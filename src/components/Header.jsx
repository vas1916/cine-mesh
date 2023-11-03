import React from "react";
import logo from "../assets/cinemesh.png";

const Header = () => {
  return (
    <div className="absolute z-10 bg-gradient-to-b from-black ">
      <img className="w-2/12" src={logo} alt="logo" />
    </div>
  );
};

export default Header;
