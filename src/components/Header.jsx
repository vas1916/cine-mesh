import React from "react";
import logo from "../assets/cinemesh-logo-latest.png";
const Header = () => {
  return (
    <div className="px-8 py-2 absolute bg-gradient-to-b from-black ">
      <img className="w-4/12" src={logo} alt="logo" />
    </div>
  );
};

export default Header;
