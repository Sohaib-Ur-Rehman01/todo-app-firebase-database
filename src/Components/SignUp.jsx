import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

const SignUp = ({ showError }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      showError("Sign Up Successful!");
    } catch (error) {
      showError(error.message);
    }
  };
  return (
    <>
      <div className="auth-container">
        <h2>Sign Up</h2>
        <input
          type="email"
          placeholder="Enter Your Email"
          id="signUpInput"
          className="auth-input"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter a strong password"
          id="passInput"
          onChange={(e) => setPassword(e.target.value)}
          className="auth-input"
          onKeyDown={(e) => (e.key === "Enter" ? handleSignUp() : null)}
        />
        <button className="auth-button" onClick={handleSignUp}>
          Sign Up
        </button>
      </div>
    </>
  );
};
export default SignUp;
