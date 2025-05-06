import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { createContext } from "react";
import { auth } from "../firebace/firebase.config";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Function for Signup using email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Create Context value
  const authInfo = {
    user,
    setUser,
    createUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
