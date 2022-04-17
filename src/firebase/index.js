import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6ZRnj2AljoAc4flntjzZNsErLf50VC_Q",
  authDomain: "login-page-auth-32f79.firebaseapp.com",
  projectId: "login-page-auth-32f79",
  storageBucket: "login-page-auth-32f79.appspot.com",
  messagingSenderId: "601314770085",
  appId: "1:601314770085:web:27112002378bd562a2614c",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }
