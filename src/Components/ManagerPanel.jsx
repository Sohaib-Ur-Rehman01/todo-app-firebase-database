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

import styles from "./ManagerPanel.module.css";

// import React, { PureComponent } from "react";

const ManagerPanel = () => {
  const [user, setUser] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [showCompletedTasks, setShowCompletedTasks] = useState(false);
  const [dueDate, setDueDate] = useState("");
  const [loading, setLoading] = useState(true);
  const db = getDatabase(app);
  // const [allUsers, setAllUsers] = useState([]);
  const managerId = auth.currentUser?.uid;
  useEffect(() => {
    const usersRef = ref(db, "users");
    const tasksRef = ref(db, "tasks");
    let userLoaded = false;
    let taskLoaded = false;
    const checkAllLoader = () => {
      if (userLoaded && taskLoaded) {
        setLoading(false);
      }
    };
    const handleError = (error) => {
      console.error("Firebase error", error);
      userLoaded = true;
      taskLoaded = true;
      setLoading(false);
    };
    setLoading(true);
    onValue(
      usersRef,
      (snapshot) => {
        const data = snapshot.val();
        if (!data) {
          userLoaded = true;
          checkAllLoader();
          return;
        }
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
        userLoaded = true;
        checkAllLoader();
      },
      handleError
    );
    onValue(
      tasksRef,
      (snapshot) => {
        const data = snapshot.val();
        const taskList = [];
        for (const key in data) {
          taskList.push({ id: key, ...data[key] });
        }
        setTasks(taskList);
        taskLoaded = true;
        checkAllLoader();
      },
      handleError
    );
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
      dueDate: dueDate,
    });
    setTaskTitle("");
    setTaskDesc("");
    setSelectedUser("");
    setDueDate("");
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
      {loading ? (
        <div className={styles["loaderContainer"]}>
          <div className={styles["loader"]}>
            <div className={styles["loaderDot"]}></div>
            <div className={styles["loaderDot"]}></div>
            <div className={styles["loaderDot"]}></div>
          </div>
        </div>
      ) : (
        <>
          <div className={styles["manager-panel-main-container"]}>
            <div className={styles["manager-panel-container"]}>
              <h2 className={styles["manager-panel-heading"]}>Manager Panel</h2>
              <div className={styles["assign-task-box"]}>
                <h3 className={styles["assign-title"]}>Assign Task</h3>
                <select
                  className={styles["input-field"]}
                  value={selectedUser}
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
                  className={styles["input-field"]}
                  value={taskTitle}
                  onChange={(e) => setTaskTitle(e.target.value)}
                />
                <textarea
                  placeholder="Task Description"
                  className={styles["input-field"]}
                  value={taskDesc}
                  onChange={(e) => setTaskDesc(e.target.value)}
                />
                <input
                  type="datetime-local"
                  className={styles["input-field"]}
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                />
                <label htmlFor="dateInput" className={styles["assign-title"]}>
                  ⏰ Enter Due Date & Time
                </label>
                <button
                  onClick={assignTask}
                  className={styles["primary-button"]}
                >
                  Assign
                </button>
              </div>

              <div className={styles["task-list-box"]}>
                <h3 className={styles["task-list-heading"]}>All Tasks</h3>
                {pendingTask
                  .filter((task) => task.assignedBy === managerId)
                  .map((task) => (
                    <div key={task.id} className={styles["task-item"]}>
                      <div
                        className={styles["task-title"]}
                      >{`${task.title}`}</div>
                      <div className={styles["task-info"]}>
                        👤 Assign To:{" "}
                        {user.find((u) => u.uid === task.assignedTo)?.name ||
                          "unknown"}
                      </div>
                      <div className={styles["task-info"]}>
                        Description: {task.description}
                      </div>
                      <div className={styles["task-info"]}>
                        🟫 Status:{task.status}
                      </div>
                      <div className={styles["task-info"]}>
                        ⏰ Due Date:{task.dueDate}
                      </div>
                      {task.status !== "finished" && (
                        <div className={styles["task-button"]}>
                          <button
                            className={styles["delete-button"]}
                            onClick={() => deleteTask(task.id)}
                          >
                            Delete
                          </button>
                          <button
                            className={styles["finish-button"]}
                            onClick={() => finishTask(task.id)}
                          >
                            Finish Task
                          </button>
                        </div>
                      )}
                    </div>
                  ))}

                <div className={styles["completed-task-section"]}>
                  <h3
                    className={styles["completed-task-heading"]}
                    onClick={() => setShowCompletedTasks(!showCompletedTasks)}
                  >
                    Completed Tasks By Employees
                    <span className={styles["arrow"]}>
                      {showCompletedTasks ? "▲" : "▼"}
                    </span>
                  </h3>

                  {showCompletedTasks && (
                    <>
                      {finishTask.length === 0 ? (
                        <p>No task finished yet:</p>
                      ) : (
                        finishedTask.map((task) => (
                          <div
                            key={task.id}
                            className={`${styles["task-item"]} ${styles["completed"]}`}
                          >
                            <div
                              className={styles["task-title"]}
                            >{`Task: ${task.title}`}</div>
                            <div className={styles["task-info"]}>
                              👤 Assign To :
                              {user.find((u) => u.uid === task.assignedTo)
                                ?.name || "unknown"}
                            </div>
                            <div className={styles["task-info"]}>
                              ✅ Status: {task.status}
                            </div>
                            <div className={styles["task-info"]}>
                              Description: {task.description}
                            </div>
                            <div className={styles["task-info"]}>
                              ⏰ Due Date:{task.dueDate}
                            </div>
                            <div className={styles["task-info"]}>
                              ⏰ Finished At:
                              {dayjs(task.finishedAt).format(
                                "DD MMM YYYY, h:mm A"
                              )}
                            </div>
                            <div className={styles["del-report-btn"]}>
                              <button className={styles["report-btn"]}>
                                🚩Report
                              </button>
                              <button
                                className={styles["deletee-btn"]}
                                onClick={() => deleteTask(task.id)}
                              >
                                🗑️ Delete
                              </button>
                            </div>
                          </div>
                        ))
                      )}
                    </>
                  )}

                  {finishedTask.length > 0 && (
                    <button
                      className={styles["delete-all-manager-completed-portion"]}
                      onClick={handleDeleteAllFinishedTasks}
                    >
                      🧹 Delete All Tasks
                      <small>Delete only all finished tasks</small>
                    </button>
                  )}
                </div>
              </div>
            </div>
            <button onClick={handleLogOut} className={styles["primary-button"]}>
              Log Out
            </button>
          </div>
          <ToastContainer position="top-right" autoClose={3000} />
        </>
      )}
    </>
  );
};
export default ManagerPanel;
