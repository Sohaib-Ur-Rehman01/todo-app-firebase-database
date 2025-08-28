import {
  getAuth,
  // createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getDatabase, onValue, ref, set, update } from "firebase/database";
import { app } from "./Components/firebase";
import { useEffect, useState } from "react";
import Addtodos from "./Components/AddTodo";
import TodoList from "./TodoList";
import CompletedTasks from "./Components/FinishTodosPortion";
import "./App.css";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import { onAuthStateChanged } from "firebase/auth";
import dayjs from "dayjs";
import ErrorMessage from "./Components/ErrorBox";
import PaginateTODOS from "./Components/Paginate";
import ManagerPanel from "./Components/ManagerPanel";
import { motion } from "framer-motion";
// Firebase setup

const db = getDatabase(app);
const auth = getAuth(app);
function App() {
  /** =========================
   *  State Management
   *  ========================= */
  const [todos, setTodos] = useState([]);
  const [finishTodos, setFinishTodos] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc");
  const [finishTodosSortOrder, setFinishTodosSortOrder] = useState("asc");
  const [error, setError] = useState(null);
  const [currentPage, SetCurrentPage] = useState(1);
  const [userRole, setUserRole] = useState(null);
  const [managerTasks, setManagerTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [includeCompleted, setIncludeCompleted] = useState(false);
  const todosPerPage = 10;
  /** =========================
   *  Search Logic
   *  ========================= */
  const searchedActiveTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );
  // Filter completed todos only if "Include Completed" is checked
  const searchedCompletedTodos = includeCompleted
    ? finishTodos.filter((todo) =>
        todo.text.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];
  // Final list to render
  const hasSearch = searchTerm.trim() !== "";
  const searchResults = includeCompleted
    ? [...searchedActiveTodos, ...searchedCompletedTodos]
    : searchedActiveTodos;
  // const finalCompletedTodos = includeCompleted ? filterCompletedTodos : [];

  const getCurrentTodos = () => {
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    return sortedTodos.slice(indexOfFirstTodo, indexOfLastTodo);
  };
  const getCurrentFinishedTodos = () => {
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    return sortedTodosCompletedTaskSection.slice(
      indexOfFirstTodo,
      indexOfLastTodo
    );
  };

  /** =========================
   *  Pagination Logic
   *  ========================= */
  const paginate = (pageNumber) => SetCurrentPage(pageNumber);

  /** =========================
   *  Error Handler
   *  ========================= */
  const showError = (message) => {
    setError(message);
    setTimeout(() => setError(null), 5000);
  };
  /** =========================
   *  Sorting Logic
   *  ========================= */
  const toggleSortOrder = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };
  const togglefinishTodosSortOrder = () => {
    setFinishTodosSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };
  const sortedTodos = [...todos].sort((a, b) => {
    const dateA = dayjs(a.dueDate);
    const dateB = dayjs(b.dueDate);
    return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
  });

  const sortedTodosCompletedTaskSection = [...finishTodos].sort((a, b) => {
    const dateA = dayjs(a.finishedAt);
    const dateB = dayjs(b.finishedAt);
    return finishTodosSortOrder === "asc" ? dateA - dateB : dateB - dateA;
  });
  /** =========================
   *  Firebase Auth
   *  ========================= */
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const roleRef = ref(db, `users/${currentUser.uid}/profile/role`);
        onValue(
          roleRef,
          (snapshot) => {
            const role = snapshot.val();
            console.log(
              "Fetch Role",
              role,
              "for Path ======>>",
              `users/${currentUser.uid}/profile/role`
            );
            setUserRole(role || "user");
            setLoading(false);
          },
          (error) => {
            console.error("Error fetching role:", error);
            setUserRole("user");
            setLoading(false);
          }
        );
      } else {
        setLoading(false);
      }
    });
    return () => unSubscribe();
  }, []);
  useEffect(() => {
    if (!user) return;
    const todoRef = ref(db, `users/${user.uid}/todos`);
    const finishTodosRef = ref(db, `users/${user.uid}/finishedTodos`);

    const handleError = (error) => {
      console.error(`Firebase read error: ${error}`);
      showError(`Firebase data read error: ${error.message}`);
    };
    const todoUnSub = onValue(todoRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setTodos(data);
      } else {
        setTodos([]);
      }
    });
    const finishUnSub = onValue(
      finishTodosRef,
      (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setFinishTodos(data);
        } else {
          setFinishTodos([]);
        }
      },
      handleError
    );
    return () => {
      todoUnSub();
      finishUnSub();
    };
  }, [user]);
  useEffect(() => {
    if (!user) return;

    const userTodosRef = ref(db, `users/${user.uid}/todos`);
    const finishTodosRef = ref(db, `users/${user.uid}/finishedTodos`);
    const allTaskRef = ref(db, `tasks`);

    const unsubscribeUserTodos = onValue(userTodosRef, (snapshot) => {
      const data = snapshot.val() || {};
      setTodos(Object.values(data));
    });

    const unsubscribeFinishTodos = onValue(finishTodosRef, (snapshot) => {
      const data = snapshot.val() || {};
      setFinishTodos(Object.values(data));
    });

    const unSubscribeManagerTasks = onValue(allTaskRef, (snapshot) => {
      const data = snapshot.val() || {};
      const filteredTasks = Object.entries(data)
        .map(([id, task]) => ({ ...task, id }))
        .filter((task) => task.assignedTo === user.uid);
      setManagerTasks(filteredTasks);
    });

    return () => {
      unsubscribeUserTodos();
      unsubscribeFinishTodos();
      unSubscribeManagerTasks();
    };
  }, [user]);
  useEffect(() => {
    if (todos.length > 0 || finishTodos.length > 0) {
      SetCurrentPage(1);
    }
  }, [todos, finishTodos]);
  /** =========================
   *  CRUD Functions
   *  ========================= */
  const putData = () => {
    if (!user) return;
    set(ref(db, `users/${user.uid}/todos`), todos);
    set(ref(db, `users/${user.uid}/finishedTodos`), finishTodos);
  };

  const addTodos = (inputText, userDueDate) => {
    if (!user || inputText.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      text: inputText,
      createdAt: dayjs().format(),
      dueDate: userDueDate || dayjs().add(2, "seconds").format(),
    };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    set(ref(db, `users/${user.uid}/todos`), updatedTodos);
    // setInput("");
    console.log(Date.now());
  };
  const deleteTodo = (id) => {
    if (!user) return;
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    set(ref(db, `users/${user.uid}/todos`), updatedTodos);
  };
  const updateTodo = (id, newText) => {
    if (!user) return;
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodos(updatedTodos);
    set(ref(db, `users/${user.uid}/todos`), updatedTodos);
  };
  const finishTodo = (id) => {
    if (!user) return;
    const index = todos.findIndex((todo) => {
      return todo.id === id;
    });
    const finishTask = todos.find((todo) => {
      return todo.id === id;
    });
    if (!finishTask) return;
    const now = dayjs();
    const isLate = now.isAfter(dayjs(finishTask.dueDate));
    const updatedTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    const updatedFinishTodos = [
      ...finishTodos,
      {
        ...finishTask,
        originalIndex: index,
        finishedLate: isLate,
        finishedAt: now.format(),
      },
    ];
    setTodos(updatedTodos);
    setFinishTodos(updatedFinishTodos);
    // firebase m dono list update kryn
    set(ref(db, `users/${user.uid}/todos`), updatedTodos);
    set(ref(db, `users/${user.uid}/finishedTodos`), updatedFinishTodos);
  };
  const unFinishTodo = (id) => {
    if (!user) return;
    const taskToUnFinish = finishTodos.find((todo) => {
      return todo.id === id;
    });
    if (!taskToUnFinish) return;
    const UpdatedFinishTodo = finishTodos.filter((todo) => {
      return todo.id !== id;
    });
    const updatedTodos = [...todos];
    const indexInsert =
      typeof taskToUnFinish.originalIndex === "number"
        ? taskToUnFinish.originalIndex
        : updatedTodos.length;

    // updatedTodos.splice(indexInsert, 0, {
    //     ...taskToUnFinish,
    //     originalIndex: undefined,
    //   }
    // );
    const cleanTodo = { ...taskToUnFinish };
    delete cleanTodo.originalIndex;
    updatedTodos.splice(indexInsert, 0, cleanTodo);
    setTodos(updatedTodos);
    setFinishTodos(UpdatedFinishTodo);
    // firebase m dono list update
    set(ref(db, `users/${user.uid}/todos`), updatedTodos);
    set(ref(db, `users/${user.uid}/finishedTodos`), UpdatedFinishTodo);
  };
  const deleteFinishTodos = (id) => {
    if (!user) return;
    const updateDeleteFinishTodos = finishTodos.filter(
      (todo) => todo.id !== id
    );
    setFinishTodos(updateDeleteFinishTodos);
    set(ref(db, `users/${user.uid}/finishedTodos`), updateDeleteFinishTodos);
  };
  const handleSignOut = async () => {
    try {
      setTodos([]);
      setFinishTodos([]);
      await signOut(auth);
    } catch (error) {
      console.error("Error Signing Out", error);
    }
  };
  const deleteAllTodos = () => {
    setTodos([]);
    setFinishTodos([]);
    set(ref(db, `users/${user.uid}/todos`), []);
    set(ref(db, `users/${user.uid}/finishedTodos`), []);
    showError("All Todos Deleted Successfully");
  };
  const managerUserUIFinishedTask = async (taskId) => {
    const db = getDatabase(app);
    try {
      await update(ref(db, `tasks/${taskId}`), {
        status: "finished",
        finishedAt: dayjs().format(),
      });
      console.log(`Task ${taskId} marked as finished.`);
    } catch (error) {
      console.log("Error for finish as mark button ", error);
    }
  };
  /** =========================
   *  Render
   *  ========================= */

  if (loading) {
    return (
      <>
        <div className="loaderContainer">
          <div className="loader">
            <div className="loaderDot"></div>
            <div className="loaderDot"></div>
            <div className="loaderDot"></div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {!user ? (
        <>
          <motion.div
            className="auth-layout"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="auth-card">
              {showLogin ? (
                <>
                  <Login showError={showError} setUserRole={setUserRole} />
                  <p>Don't have an account?</p>
                  <span
                    onClick={() => setShowLogin(false)}
                    className="signuplogin"
                  >
                    Sign Up
                  </span>
                </>
              ) : (
                <>
                  <SignUp showError={showError} />
                  <p>Already have an account?</p>
                  <span
                    onClick={() => {
                      setShowLogin(true);
                    }}
                    className="signuplogin"
                  >
                    Login
                  </span>
                </>
              )}
              {error && (
                <ErrorMessage message={error} onClose={() => setError(null)} />
              )}
            </div>
          </motion.div>
        </>
      ) : (
        <>
          {userRole === "manager" ? (
            <ManagerPanel user={user} />
          ) : (
            <motion.div
              className="container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <>
                <div className="user-credentials">
                  <p className="userId">{`User Id: ${user.uid}`}</p>
                  <h2 className="welcomeUser">{`Welcome: ${user.displayName}`}</h2>
                  <h2 className="welcomeUser">{`User Email: ${user.email}`}</h2>
                </div>
              </>

              <Addtodos onAdd={addTodos} showError={showError} />
              {/* ✅ Search + Checkbox UI */}
              <div className="search-bar">
                <input
                  type="text"
                  placeholder="Search todos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={includeCompleted}
                    onChange={() => setIncludeCompleted((prev) => !prev)}
                  />
                  Include Completed Todos
                </label>
              </div>

              {/* ✅ Search + Checkbox UI */}

              {/* <TodoList
                todos={getCurrentTodos()}
                sortOrder={sortOrder}
                ontoggleSort={toggleSortOrder}
                onDelete={deleteTodo}
                onUpdate={updateTodo}
                onFinish={finishTodo}
                putData={putData}
              />

              {includeCompleted && searchTerm.trim() !== "" && (
                <CompletedTasks
                  sortOrder={finishTodosSortOrder}
                  finishedTodos={finalCompletedTodos}
                  onDelete={deleteFinishTodos}
                  onUnfinish={unFinishTodo}
                  putData={putData}
                  ontoggleSort={togglefinishTodosSortOrder}
                  showSortButton={false}
                />
              )} */}
              {/* If user is searching */}

              {/* ✅ Conditional Rendering Based on Search State */}
              {hasSearch ? (
                // ========================
                // 🔎 Search Mode
                // ========================
                searchResults.length > 0 ? (
                  <>
                    <TodoList
                      todos={searchedActiveTodos}
                      sortOrder={sortOrder}
                      ontoggleSort={toggleSortOrder}
                      onDelete={deleteTodo}
                      onUpdate={updateTodo}
                      onFinish={finishTodo}
                      putData={putData}
                    />

                    {includeCompleted && searchedCompletedTodos.length > 0 && (
                      <CompletedTasks
                        finishedTodos={searchedCompletedTodos}
                        sortOrder={finishTodosSortOrder}
                        onDelete={deleteFinishTodos}
                        onUnfinish={unFinishTodo}
                        putData={putData}
                        ontoggleSort={togglefinishTodosSortOrder}
                        showSortButton={false}
                      />
                    )}
                  </>
                ) : (
                  <p className="not-found">Todos not found ❌</p>
                )
              ) : (
                // ========================
                // 📝 Normal Mode
                // ========================
                <>
                  <TodoList
                    todos={getCurrentTodos()}
                    sortOrder={sortOrder}
                    ontoggleSort={toggleSortOrder}
                    onDelete={deleteTodo}
                    onUpdate={updateTodo}
                    onFinish={finishTodo}
                    putData={putData}
                  />

                  {sortedTodos.length > todosPerPage && (
                    <PaginateTODOS
                      todosPerPage={todosPerPage}
                      totalTodos={sortedTodos.length}
                      currentPage={currentPage}
                      paginate={paginate}
                    />
                  )}

                  <CompletedTasks
                    finishedTodos={getCurrentFinishedTodos()}
                    sortOrder={finishTodosSortOrder}
                    onDelete={deleteFinishTodos}
                    onUnfinish={unFinishTodo}
                    putData={putData}
                    ontoggleSort={togglefinishTodosSortOrder}
                    showSortButton={true}
                  />

                  {sortedTodosCompletedTaskSection.length > todosPerPage && (
                    <PaginateTODOS
                      todosPerPage={todosPerPage}
                      totalTodos={sortedTodosCompletedTaskSection.length}
                      currentPage={currentPage}
                      paginate={paginate}
                    />
                  )}
                </>
              )}

              {/* for manager task  */}

              {managerTasks.length > 0 && (
                <div className="assigned-section">
                  <h2>📋 Tasks Assigned by Manager</h2>
                  {managerTasks.map((task) => (
                    <div key={task.id} className="task-item">
                      <h3 className="task-title">
                        📌 {`Your task is: ${task.title}`}
                      </h3>
                      <p className="task-description">
                        📄 {`Description: ${task.description}`}
                      </p>
                      <p>
                        ⏱️ Created At:
                        {dayjs(task.createdAt).format("YYYY-MM-DD HH:mm")}
                      </p>
                      {task.dueDate && (
                        <p>
                          ⏰ Due Date:
                          {dayjs(task.dueDate).format("YYYY-MM-DD HH:mm")}
                        </p>
                      )}
                      <p>🟫 Status: {task.status}</p>
                      {task.status !== "finished" && (
                        <button
                          className="finish-btn"
                          onClick={() => managerUserUIFinishedTask(task.id)}
                        >
                          ✅ Mark As Finish
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              )}
              {/* for manager task  */}
              {/* <PaginateTODOS
                todosPerPage={todosPerPage}
                totalTodos={sortedTodos.length}
                currentPage={currentPage}
                paginate={paginate}
              />
              <CompletedTasks
                sortOrder={finishTodosSortOrder}
                finishedTodos={getCurrentFinishedTodos()} // ✅ full completed todos (paginated)
                onDelete={deleteFinishTodos}
                onUnfinish={unFinishTodo}
                putData={putData}
                ontoggleSort={togglefinishTodosSortOrder}
                showSortButton={true} // ✅ permanent section me sort dikhana
              />
              <PaginateTODOS
                todosPerPage={todosPerPage}
                totalTodos={sortedTodosCompletedTaskSection.length}
                currentPage={currentPage}
                paginate={paginate}
              /> */}
              {todos.length > 0 || finishTodos.length > 0 ? (
                <button onClick={deleteAllTodos} className="delete-all">
                  Delete All Todos. <small>Finished & Unfinished</small>
                </button>
              ) : null}
              <button onClick={handleSignOut} className="delete-all">
                Log Out
              </button>
            </motion.div>
          )}
        </>
      )}
    </>
  );
}

export default App;
