import {
  getAuth,
  // createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getDatabase, onValue, ref, set } from "firebase/database";
import { app } from "./Components/firebase";
import { useEffect, useState } from "react";
import Addtodos from "./Components/AddTodo";
import TodoList from "./TodoList";
import CompletedTasks from "./Components/FinishTodosPortion";
import "./App.css";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import { onAuthStateChanged } from "firebase/auth";
const db = getDatabase(app);
const auth = getAuth(app);
function App() {
  const [todos, setTodos] = useState([]);
  const [finishTodos, setFinishTodos] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);
  useEffect(() => {
    if (!user) return;
    const todoRef = ref(db, `users/${user.uid}/todos`);
    const finishTodosRef = ref(db, `users/${user.uid}/finishedTodos`);

    const handleError = (error) => {
      console.error(`Firebase read error: ${error}`);
      alert(`Firebase data read error: ${error.message}`);
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

  const putData = () => {
    if (!user) return;
    set(ref(db, `users/${user.uid}/todos`), todos);
    set(ref(db, `users/${user.uid}/finishedTodos`), finishTodos);
  };

  const addTodos = (inputText) => {
    if (!user || inputText.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      text: inputText,
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
    const updatedTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    const updatedFinishTodos = [
      ...finishTodos,
      { ...finishTask, originalIndex: index },
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

  if (loading) {
    return (
      <>
        <div className="loadin-screen">
          <div className="loading-spinner">
            {/* <h2 style={{ textAlign: "center" }}>Loading...</h2> */}
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {!user ? (
        <>
          <div className="auth-layout">
            <div className="auth-card">
              {showLogin ? (
                <>
                  <Login />
                  <p>Don't have an account?</p>
                  <span
                    onClick={() => setShowLogin(false)}
                    style={{
                      color: "blue",
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                  >
                    Sign Up
                  </span>
                </>
              ) : (
                <>
                  <SignUp />
                  <p>Already have an account?</p>
                  <span
                    onClick={() => {
                      setShowLogin(true);
                    }}
                    style={{
                      color: "blue",
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                  >
                    Login
                  </span>
                </>
              )}
            </div>
            <div className="auth-card"></div>
          </div>
        </>
      ) : (
        <>
          <div className="container">
            {user && (
              <>
                <div className="user-credentials">
                  <p className="userId">{`User Id: ${user.uid}`}</p>
                  <h2 className="welcomeUser">{`Welcome: ${user.email}`}</h2>
                </div>
              </>
            )}
            <Addtodos onAdd={addTodos} />

            <TodoList
              todos={todos}
              onDelete={deleteTodo}
              onUpdate={updateTodo}
              onFinish={finishTodo}
              putData={putData}
            />
            <CompletedTasks
              finishedTodos={finishTodos}
              onDelete={deleteFinishTodos}
              onUnfinish={unFinishTodo}
              putData={putData}
            />
          </div>
          <button onClick={handleSignOut} className="auth-button">
            Log Out
          </button>
        </>
      )}
    </>
  );
}

export default App;
