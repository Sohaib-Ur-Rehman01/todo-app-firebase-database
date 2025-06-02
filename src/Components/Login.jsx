import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

const Login = ({ showError }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      showError("Login Successful!");
    } catch (error) {
      showError(error.message);
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
