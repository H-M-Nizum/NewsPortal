import React from "react";
import { Link } from "react-router";
import userIcon from "../assets/user.png";
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
        <button className="btn btn-neutral rounded-none">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
