// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/auth";
import { getAuth } from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBtaY5RRcHzg7PQwlkiOnTUGjOzbOmfvAI",
  authDomain: "instagram-clone-7801d.firebaseapp.com",
  projectId: "instagram-clone-7801d",
  storageBucket: "instagram-clone-7801d.appspot.com",
  messagingSenderId: "457079622779",
  appId: "1:457079622779:web:b4763c253f647c175566de",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
