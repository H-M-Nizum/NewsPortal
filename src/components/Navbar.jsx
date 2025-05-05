import React from "react";
import { Link } from "react-router";
import userIcon from "../assets/bg-remove-user.png";
const Navbar = () => {
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
        <Link to={"/auth/login"} className="btn btn-neutral rounded-none">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
