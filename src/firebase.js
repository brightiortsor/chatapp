import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBiDDK_LTlZYgI8SFyxeAkzo1pqCdS7UfU",
  authDomain: "chatapp-fd0fe.firebaseapp.com",
  projectId: "chatapp-fd0fe",
  storageBucket: "chatapp-fd0fe.appspot.com",
  messagingSenderId: "223023850328",
  appId: "1:223023850328:web:8780127675c67a7784bb2d",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
