import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import { auth } from "../firebace/firebase.config";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // Function for Signup using email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Function for login using email and password
  const signUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Function for signout
  const signoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };
  // Function for Update user profile
  const updateUserProfile = (profile) => {
    setLoading(true);
    return updateProfile(auth.currentUser, profile);
  };
  // Create Context value
  const authInfo = {
    user,
    setUser,
    createUser,
    signUser,
    signoutUser,
    loading,
    updateUserProfile,
  };

  // Create observer for auth state change
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("User state changed", currentUser);
      setLoading(false); // Set loading to false when the auth state changes
    });

    return () => {
      unSubscribe(); // Unsubscribe from the observer when the component unmounts
    };
  }, []);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
