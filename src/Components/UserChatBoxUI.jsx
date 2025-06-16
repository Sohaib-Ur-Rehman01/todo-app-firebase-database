import React, { useId } from "react";
import { useState, useEffect, useRef } from "react";
import { getDatabase, ref, push, onValue, off } from "firebase/database";
import { auth } from "./firebase";
import { Avatar } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { app } from "./Components/firebase";
import dayjs from "dayjs";

const UserChatBox = () => {
  const [message, setMessage] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const messagesEndRef = useRef(null);
  const db = getDatabase(app);
  const userId = auth.currentUser?.uid;
  useEffect(() => {
    if (!userId) return;
    const messagesRef = ref(db, `chats/${userId}`);
    const unSubscribe = onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const messageList = Object.entries(data).map(([id, message]) => ({
          id,
          ...message,
        }));
        setMessage(messageList);
      } else {
        setMessage([]);
      }
    });
    return () => off(messagesRef);
  }, [db, userId]);
  useEffect(() => {
    scrollToBottom();
  }, [message]);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behaviour: "smooth" });
  };
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim() || !userId) return;
    const messagesRef = ref(db, `chats/${userId}`);
    push(messagesRef, {
      text: newMessage,
      sender: "user",
      timestamp: dayjs().format(),
    });
    //Also send to manager's inbox
    const managerInboxRef = ref(db, `manager/inbox`);
    push(managerInboxRef, {
      text: newMessage,
      userId: userId,
      userName: auth.currentUser?.displayName || "User",
      timestamp: dayjs().format(),
      status: "unread",
    });
    setNewMessage("");
  };
  return (
    <>
      <div className="chat-container">
        {!isChatOpen ? (
          <button
            className="chat-toggle-button"
            onClick={() => setIsChatOpen(true)}
          >
            <div className="chat-button">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z"
                  fill="currentColor"
                />
              </svg>
              <span className="notification-badge">1</span>
            </div>
          </button>
        ) : (
          <div className="chat-box">
            <div className="chat-header">
              <div className="chat-header-info">
                <Avatar
                  src={auth.currentUser?.photoURL}
                  alt={auth.currentUser?.displayName}
                />
                <div>
                  <h3>Support Team</h3>
                  <p className="status">Online</p>
                </div>
              </div>
              <button
                className="close-button"
                onClick={() => setIsChatOpen(false)}
              >
                &times;
              </button>
            </div>
            <div className="chat-messages">
              {message.length === 0 ? (
                <div className="empty-state">
                  <p>No Message Yet.Start the conversation!</p>
                </div>
              ) : (
                message.map((message) => (
                  <div
                    className={`messages ${
                      message.sender === "user" ? "sent" : "received"
                    }`}
                  >
                    {message.sender !== "user" && (
                      <Avatar className="message-avatar" />
                    )}
                    <div className="message-content">
                      <p>{message.text}</p>
                      <span className="message-time">
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
                placeholder="Type Your Message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <button className="send-button" type="submit">
                <SendIcon />
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};
export default UserChatBox;
