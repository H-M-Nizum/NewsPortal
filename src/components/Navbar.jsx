import React, { useContext } from "react";
import { Link } from "react-router";
import userIcon from "../assets/bg-remove-user.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, signoutUser } = useContext(AuthContext);
  console.log(user);
  const handelSignout = () => {
    signoutUser()
      .then(() => {
        console.log("Signout successful");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };
  return (
    <div className="flex justify-between">
      <div className=""></div>
      <div className="nav flex items-center gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/career">Career</Link>
      </div>
      <div className="login flex items-center gap-2">
        <div className="">
          <img src={userIcon} alt="userIcon" />
        </div>
        {user ? (
          <button onClick={handelSignout} className="btn btn-error">
            Signout
          </button>
        ) : (
          <Link to={"/auth/login"} className="btn btn-neutral rounded-md">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
