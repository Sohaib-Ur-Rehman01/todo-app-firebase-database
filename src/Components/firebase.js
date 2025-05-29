import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCM3jP5noU3wPlySoNYDoF-ykyZ_0vAKUk",
  authDomain: "todo-app-reat-js-database.firebaseapp.com",
  databaseURL: "https://todo-app-reat-js-database-default-rtdb.firebaseio.com",
  projectId: "todo-app-reat-js-database",
  storageBucket: "todo-app-reat-js-database.firebasestorage.app",
  messagingSenderId: "506964657857",
  appId: "1:506964657857:web:87ee9a6eb15f5718c23640",
  measurementId: "G-JSESG6PP2G",
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
