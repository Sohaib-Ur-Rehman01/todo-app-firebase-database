import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login Successful!");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <>
      <div className="auth-container">
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Enter Your Email"
          id="loginInput"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
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
        />
        <button className="auth-button" onClick={handleLogin}>
          Log In
        </button>
      </div>
    </>
  );
};
export default Login;
