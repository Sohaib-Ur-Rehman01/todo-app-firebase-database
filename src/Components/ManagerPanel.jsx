import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import {
  getDatabase,
  ref,
  onValue,
  set,
  remove,
  update,
  Database,
  // query,
  // orderByValue,
  // equalTo,
} from "firebase/database";
import { app, auth } from "./firebase";
import { v4 as uuidv4 } from "uuid";
import { signOut } from "firebase/auth";
import dayjs from "dayjs";

const ManagerPanel = () => {
  const [user, setUser] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [showCompletedTasks, setShowCompletedTasks] = useState(false);
  const db = getDatabase(app);
  // const [allUsers, setAllUsers] = useState([]);
  const managerId = auth.currentUser?.uid;
  useEffect(() => {
    const usersRef = ref(db, "users");
    onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      if (!data) return;
      // const userList = Object.entries(data)
      //   // .filter(([uid]) => uid !== managerId)
      //   .map(([uid, userData]) => ({
      //     uid,
      //     name: userData.profile?.name || "No Name",
      //     email: userData.profile?.email || "No email",
      //   }));
      // setUser(userList);
      const usersArray = [];
      for (const uid in data) {
        if (uid === managerId) continue;
        const profile = data[uid].profile;
        console.log("profile for", uid, profile);
        if (profile && profile.name && profile.email) {
          usersArray.push({ uid, name: profile.name, email: profile.email });
        }
      }
      // console.log(usersArray);
      setUser(usersArray);
    });
    const tasksRef = ref(db, "tasks");
    onValue(tasksRef, (snapshot) => {
      const data = snapshot.val();
      const taskList = [];
      for (const key in data) {
        taskList.push({ id: key, ...data[key] });
      }
      setTasks(taskList);
    });
  }, [db, managerId]);
  const assignTask = () => {
    if (!selectedUser || !taskTitle) return;
    const taskId = uuidv4();
    set(ref(db, `tasks/${taskId}`), {
      title: taskTitle,
      description: taskDesc,
      assignedTo: selectedUser,
      assignedBy: managerId,
      status: "pending",
      createdAt: dayjs().format(),
    });
    setTaskTitle("");
    setTaskDesc("");
    setSelectedUser("");
  };
  const finishTask = (id) => {
    update(ref(db, `tasks/${id}`), {
      status: "finished",
      finishedAt: dayjs().format(),
    });
  };
  const deleteTask = (id) => {
    remove(ref(db, `tasks/${id}`));
  };

  const handleLogOut = async () => {
    try {
      await signOut(auth);
      console.log("Log out successfully");
    } catch (error) {
      console.log("Log out failed", error);
    }
  };
  const pendingTask = tasks.filter(
    (task) => task.assignedBy === managerId && task.status !== "finished"
  );
  const finishedTask = tasks.filter(
    (task) => task.assignedBy === managerId && task.status === "finished"
  );
  const handleDeleteAllFinishedTasks = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete all finished tasks"
    );
    if (!confirmDelete) return;
    try {
      const updates = {};
      finishedTask.forEach((task) => {
        updates[`tasks/${task.id}`] = null;
      });
      await update(ref(db), updates);
      toast.success("All finished tasks deleted successfully.");
    } catch (error) {
      console.error("Error deleting all finished tasks:", error);
      toast.error(error.message);
    }
  };
  return (
    <>
      <div className="manager-panel-container">
        <h2 className="manager-panel-heading">Manager Panel</h2>
        <div className="assign-task-box">
          <h3 className="assign-title">Assign Task</h3>
          <select
            className="input-field"
            value={selectedUser}
            id=""
            onChange={(e) => setSelectedUser(e.target.value)}
          >
            <option value="">Select User</option>
            {user.map((user) => (
              <option key={user.uid} value={user.uid}>
                {user.name} ({user.email})
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Task Title"
            className="input-field"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
          <textarea
            placeholder="Task Description"
            className="input-field"
            value={taskDesc}
            onChange={(e) => setTaskDesc(e.target.value)}
          />
          <button onClick={assignTask} className="primary-button">
            Assign
          </button>
        </div>
        <div className="task-list-box">
          <h3 className="task-list-heading">All Tasks</h3>
          {pendingTask
            .filter((task) => task.assignedBy === managerId)
            .map((task) => (
              <div key={task.id} className="task-item">
                <div className="task-title">{`Your Task:${task.title}`}</div>
                <div className="task-info">
                  Assign To:
                  {user.find((u) => u.uid === task.assignedTo)?.name ||
                    "unknown"}
                </div>
                <div className="task-info">Status:{task.status}</div>
                {task.status !== "finished" && (
                  <div className="task-button">
                    <button
                      className="delete-button"
                      onClick={() => deleteTask(task.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="finish-button"
                      onClick={() => finishTask(task.id)}
                    >
                      Finish Task
                    </button>
                  </div>
                )}
              </div>
            ))}
          <div className="completed-task-section">
            <h3
              className="completed-task-heading"
              onClick={() => setShowCompletedTasks(!showCompletedTasks)}
            >
              Completed Tasks By Employees
              <span className="arrow">{showCompletedTasks ? "▲" : "▼"}</span>
            </h3>
            {showCompletedTasks && (
              <>
                {finishTask.length === 0 ? (
                  <p>No task finished yet:</p>
                ) : (
                  finishedTask.map((task) => (
                    <div key={task.id} className="task-item completed">
                      <div className="task-title">{`Your Task: ${task.title}`}</div>
                      <div className="task-info">
                        👤 Assign To :
                        {user.find((u) => u.uid === task.assignedTo)?.name ||
                          "unknown"}
                      </div>
                      <div className="task-info">✅ Status: {task.status}</div>
                      <div className="task-info">
                        ⏰ Finished At:
                        {dayjs(task.finishedAt).format("DD MMM YYYY, h:mm A")},
                      </div>
                      <button className="report-btn">🚩 Report</button>
                      <button
                        className="deletee-btn"
                        onClick={() => deleteTask(task.id)}
                      >
                        🗑️ delete
                      </button>
                    </div>
                  ))
                )}
              </>
            )}
            {finishedTask.length > 0 && (
              <button
                className="delete-all-manager-completed-portion"
                onClick={handleDeleteAllFinishedTasks}
              >
                🧹 Delete All Tasks
                <small>Delete only all finished tasks</small>
              </button>
            )}
          </div>
        </div>

        <button onClick={handleLogOut}>Log Out</button>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};
export default ManagerPanel;
