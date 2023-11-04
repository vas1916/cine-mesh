import React from "react";
import logo from "../assets/cinemesh.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  console.log("@@USer", user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Successfully Signed Out!");
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-full z-10 bg-gradient-to-b from-black flex justify-between">
      <img className="w-2/12" src={logo} alt="logo" />

      {user && (
        <div className="flex p-4 m-2 ">
          <img className=" w-12 h-12" src={user?.photoURL} alt="logo" />
          <button
            className="text-white font-bold border-none pl-2"
            onClick={handleSignOut}
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
