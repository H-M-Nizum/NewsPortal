import React from "react";
import logo from "../assets/logo.png";
import moment from "moment";

const Header = () => {
  const today = moment().format("dddd, LL");
  return (
    <div className="flex flex-col items-center justify-center gap-3 mt-5">
      <div className="logo">
        <img className="w-[300px]" src={logo} alt="Logo" />
      </div>
      <h2 className="text-gray-500">Journalism Without Fear or Favour</h2>
      <h2 className="text-gray-950">{today}</h2>
    </div>
  );
};

export default Header;
