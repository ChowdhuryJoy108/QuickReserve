import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";
import auth from "../firebase/firebase.init";
import axios from "axios";

const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateProfileInfo = (updateInfo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, updateInfo);
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(true);
      if (currentUser) {
        
        setUserId(currentUser.uid);
        setUser(currentUser);

        if (currentUser?.email) {
          const user = { email: currentUser.email };

          axios
            .post(
              "https://quick-reserve-server.vercel.app/jwt",
              user,
              { withCredentials: true }
            )
            .then((res) => {
              console.log("login token", res.data);
              setLoading(false);
            });
        } else {
          axios
            .post(
              "https://quick-reserve-server.vercel.app/logout",
              {},
              {
                withCredentials: true,
              }
            )
            .then((res) => {
              console.log("logout", res.data);
              setLoading(false);
            });
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    userId,
    createUser,
    signInUser,
    updateProfileInfo,
    signOutUser,
    signInWithGoogle,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
