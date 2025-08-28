import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, get, ref } from "firebase/database";
import { app } from "./firebase";
import { auth } from "./firebase";
import { toast } from "react-toastify";

const db = getDatabase(app);
const Login = ({ showError }) => {
  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;
      const snapshot = await get(ref(db, `users/${user.uid}/profile`));
      if (snapshot.exists()) {
        const userData = snapshot.val();
        // setName(userData.name);
        console.log("UserName from DB", userData.name);
      }
      showError("Login Successful!");
      toast.success("Login Successfully");
    } catch (error) {
      showError(error.message);
      toast.error(error.message);
    }
  };
  return (
    <>
      <div className="auth-container">
        <h2>Login</h2>
        {/* <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="auth-input"
        /> */}
        <input
          type="email"
          placeholder="Enter Your Email"
          id="loginInput"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="auth-input"
        />
        <input
          type="password"
          placeholder="Enter your password"
          id="loginPass"
          className="auth-input"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          onKeyDown={(e) => (e.key === "Enter" ? handleLogin() : null)}
        />
        <button className="auth-button" onClick={handleLogin}>
          Log In
        </button>
      </div>
    </>
  );
};
export default Login;
