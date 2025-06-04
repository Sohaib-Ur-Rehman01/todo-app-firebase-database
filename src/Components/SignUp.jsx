import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getDatabase, set, ref, onValue } from "firebase/database";
import { auth } from "./firebase";
import { app } from "./firebase";
import dayjs from "dayjs";
import { toast } from "react-toastify";

const db = getDatabase(app);
const SignUp = ({ showError }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const handleSignUp = async () => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;
      await updateProfile(user, {
        displayName: name,
      });
      await set(ref(db, `users/${user.uid}/profile`), {
        name: name,
        email: email,
        role: role,
        createdAt: dayjs().format(),
      });
      //manager limit
      if (role === "manager") {
        const userRoleRef = ref(db, "userRoles");
        const snapshot = await new Promise((resolve, reject) => {
          const onValueSub = onValue(
            userRoleRef,
            (snap) => {
              resolve(snap);
              onValueSub();
            },
            reject,
            { onlyOnce: true }
          );
        });
        const data = snapshot.val() || {};
        const managerCount = Object.values(data).filter(
          (r) => r === "manager"
        ).length;
        if (managerCount >= 2) {
          showError("Only 2 Managers are allowed.");
          toast.error("Only 2 Mangers are allowed");
          // delete user if already created
          await user.delete();
          return;
        }
      }

      await set(ref(db, `userRoles/${user.uid}`), role);
      showError("Sign Up Successful!");
    } catch (error) {
      showError(error.message);
      toast.error(error.message);
    }
  };
  return (
    <>
      <div className="auth-container">
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="Enter Your Name"
          className="auth-input"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
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
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="auth-input"
        >
          <option value="user">Regular User</option>
          <option value="manager">Manager</option>
        </select>
        <button className="auth-button" onClick={handleSignUp}>
          Sign Up
        </button>
      </div>
    </>
  );
};
export default SignUp;
