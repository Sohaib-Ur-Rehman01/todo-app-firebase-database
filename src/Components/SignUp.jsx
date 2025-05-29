import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Sign Up Successful!");
    } catch (error) {
      alert(error.message);
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
        />
      </div>
      <button className="auth-button" onClick={handleSignUp}>
        Sign Up
      </button>
    </>
  );
};
export default SignUp;
