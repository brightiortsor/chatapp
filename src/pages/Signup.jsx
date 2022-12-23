import React from "react";
import "../Style.scss";
import { FcAddImage } from "react-icons/fc";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
// import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [err, setErr] = useState(false);
  // const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      // Upload file and get its download URL and update user profile
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            //navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
            //setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      //setLoading(false);
    }
  };
  return (
    <div className="container">
      <div className="wrapper">
        <span className="logo">iBiChat</span>
        <span className="title">Sign Up</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="username" />
          <input type="email" placeholder="email@gmail.com" />
          <input type="password" placeholder="password" />
          <input type="file" id="file" style={{ display: "none" }} />
          <label htmlFor="file">
            <FcAddImage className="signup-icon" />
            <span>Add an Avatar</span>
          </label>
          <button>Register</button>
          {err && <span className="error">Something went wrong...</span>}
        </form>
        <p>Already have an account? Login</p>
      </div>
    </div>
  );
};

export default Signup;
