import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const singOutUser = () => {
    setLoading(true);
    return signOut(auth);
  }

  // onAuthStateChanged(auth, (currentUser) => {
  //   if (createUser) {
  //     console.log("Has current user :", currentUser);
  //   } else {
  //     console.log("Current User :", currentUser);
  //   }
  // });

   //Get the currently signed-in user

  useEffect(() => { // Subscribe to auth state changes. This will be called when the component mounts and unmounts.
    // Mount means when the component is added to the DOM
    // Unmount means when the component is removed from the DOM
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log('Inside useEffect on auth stage change', currentUser)
      setUser(currentUser);
      setLoading(false);
    })
    return () => { // Cleanup subscription on unmount
      unSubscribe();
    }
  }, []);

  const userInfo = {
    user,
    loading,
    createUser,
    signInUser,
    singOutUser
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;

/*
const name = "Tahmid";
const age = 25;

const profile = {
    name,
    age,
}
console.log(profile);
*/