import React, { useState } from "react";
import Header from "./Header";
import { BG_URL } from "../utils/constants";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_URL} alt="cinemesh-background" />
      </div>
      <form className="absolute bg-black bg-opacity-50 text-white my-24 mx-auto p-12 right-0 left-0 w-4/12 rounded-md">
        <h1 className="text-2xl mb-2  font-bold">
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className=" bg-gray-600 my-2 p-4 w-full rounded-md"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="  bg-gray-600 my-2 p-4 w-full rounded-md"
        />
        <input
          type="password"
          placeholder="password"
          className=" bg-gray-600 my-2 p-4 w-full rounded-md "
        />
        <button className="bg-red-600 hover:bg-red-700 cursor-pointer mt-4 px-4 py-3  w-full rounded-md">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer my-4" onClick={toggleSignInForm}>
          {isSignInForm
            ? "Already registerd? Sign In Now. "
            : "New to Cinemesh? Sign Up Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
