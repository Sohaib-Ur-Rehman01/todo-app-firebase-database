import { useState, useEffect, useRef } from "react";
import {
  getDatabase,
  ref,
  push,
  onValue,
  off,
  update,
} from "firebase/database";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Badge,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { app } from "./firebase";
import dayjs from "dayjs";
import { FaDAndDBeyond } from "react-icons/fa";
const ManagerChatBox = () => {
  const [conversation, setConversation] = useState([]);
  const [activeConversation, setActiveConversation] = useState(null);
  const [message, setMessage] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const messagesEndRef = useRef(null);

  const db = getDatabase(app);
  useEffect(() => {
    const conversationRef = ref(db, `chats/inbox`);
    const unSubscribe = onValue(conversationRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const conversationList = Object.entries(data)
          .map(([id, message]) => ({
            id: message.userId,
            userName: message.userName,
            lastMessage: message.text,
            timestamp: message.timestamp,
            status: message.status,
          }))
          .reduce((acc, current) => {
            const existing = acc.find((item) => item.userId === current.userId);
            if (existing) {
              if (current.timestamp > existing.timestamp) {
                existing.lastMessage = current.lastMessage;
                existing.timestamp = current.timestamp;
                existing.status = current.status;
              }
              return acc;
            }
            return [...acc, current];
          }, [])
          .sort((a, b) => b.timestamp - a.timestamp);
        setConversation(conversationList);
      } else {
        setConversation([]);
      }
    });
    return () => off(conversationRef);
  }, [db]);
  useEffect(() => {
    if (!activeConversation) return;
    const messagesRef = ref(db, `chats/${activeConversation.userId}`);
    const unSubscribe = onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const messageList = Object.entries(data)
          .map(([id, message]) => ({
            id,
            ...message,
          }))
          .sort((a, b) => a.timestamp - b.timestamp);
        setMessage(messageList);

        // Mark messages as read
        const updates = {};
        conversation.forEach((conv) => {
          if (
            conv.userId === activeConversation.userId &&
            conv.status === "unread"
          ) {
            updates[`manager/inbox/${conv.id}/status`] = "read";
          }
        });
        if (Object.keys(updates).length > 0) {
          update(ref(db, updates));
        }
      } else {
        setMessage([]);
      }
    });

    return () => off(messagesRef);
  }, [db, activeConversation, conversation]);
  useEffect(() => {
    scrollToBottom();
  }, [message]);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim() || !activeConversation) return;
    const messagesRef = ref(db, `chats/${activeConversation.userId}`);
    push(messagesRef, {
      text: newMessage,
      sender: "manager",
      timestamp: dayjs().format(),
    });
    setNewMessage("");
  };
  const filteredConversation = conversation.filter((conv) =>
    conv.userName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <div className="manager-chat-container">
        <div className="conversation-list">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search Users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <List className="user-list">
              {filteredConversation.map((conv) => (
                <>
                  <ListItem
                    className="user-item"
                    key={conv.userId}
                    selected={activeConversation?.userId === conv.userId}
                    onClick={() => setActiveConversation(conv)}
                  >
                    <ListItemAvatar>
                      <Badge
                        color="primary"
                        variant="dot"
                        invisible={conv.status !== "unread"}
                      >
                        <Avatar>{conv.userName.charAt(0)}</Avatar>
                      </Badge>
                    </ListItemAvatar>
                    <ListItemText
                      primary={conv.userName}
                      secondary={
                        conv.lastMessage.length > 30
                          ? `${conv.lastMessage.substring(0, 30)}...`
                          : conv.lastMessage
                      }
                    />
                    <span className="message-time">
                      {" "}
                      {dayjs(message.timestamp).format("h:mm A")}
                    </span>
                  </ListItem>
                </>
              ))}
            </List>
          </div>
          <div className="chat-area">
            {activeConversation ? (
              <>
                <div className="chat-header">
                  <div className="chat-info">
                    {" "}
                    <Avatar>{activeConversation.userName.charAt(0)}</Avatar>
                  </div>
                  <div>
                    <h3>{activeConversation.userName}</h3>
                    <p className="statu">Active Now</p>
                  </div>
                </div>
                <div className="chat-actions">
                  <button className="action-button">📞</button>
                  <button className="action-button">🔄</button>
                </div>
                <div className="chat-message">
                  {message.length === 0 ? (
                    <div className="empty-state">
                      <p>No messages yet. Start the conversation!</p>
                    </div>
                  ) : (
                    message.map((message) => (
                      <div
                        className={`message ${
                          message.sender === "manager" ? "sent" : "received"
                        }`}
                      >
                        {" "}
                        {message.sender !== "manager" && (
                          <Avatar className="message-avatar">
                            {activeConversation.userName.charAt(0)}
                          </Avatar>
                        )}
                        <div className="message-content">
                          <p>{message.text}</p>
                          <span className="message-time">
                            {" "}
                            {dayjs(message.timestamp).format("h:mm A")}
                          </span>
                        </div>
                      </div>
                    ))
                  )}
                  <div ref={messagesEndRef} />
                </div>
                <form onSubmit={handleSendMessage} className="chat-input">
                  <button type="button" className="emoji-button">
                    <EmojiEmotionsIcon />
                  </button>
                  <button type="button" className="attach-button">
                    <AttachFileIcon />
                  </button>
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                  />
                  <button type="submit" className="send-button">
                    <SendIcon />
                  </button>
                </form>
              </>
            ) : (
              <>
                <div className="no-conversation">
                  <div className="illustration">
                    <svg
                      width="200"
                      height="200"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z"
                        fill="#E0E0E0"
                      />
                      <path
                        d="M8 10C8 10.5523 7.55228 11 7 11C6.44772 11 6 10.5523 6 10C6 9.44772 6.44772 9 7 9C7.55228 9 8 9.44772 8 10Z"
                        fill="#9E9E9E"
                      />
                      <path
                        d="M18 10C18 10.5523 17.5523 11 17 11C16.4477 11 16 10.5523 16 10C16 9.44772 16.4477 9 17 9C17.5523 9 18 9.44772 18 10Z"
                        fill="#9E9E9E"
                      />
                      <path
                        d="M7 13C7 13 8 15 12 15C16 15 17 13 17 13"
                        stroke="#9E9E9E"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <h3>Select a conversation</h3>
                  <p>Choose a user from the list to start chatting</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default ManagerChatBox;
