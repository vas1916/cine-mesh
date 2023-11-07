import React, { useRef, useState } from "react";
import Header from "./Header";
import { BG_URL } from "../utils/constants";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { signInUser } from "../utils/reduxSlices/userSlice";
import { DEFAULT_USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);
  const dispatch = useDispatch();
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    //Validate the form data
    const isInValidMessage = checkValidData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(isInValidMessage);
    if (isInValidMessage) return;
    if (!isSignInForm) {
      // Sign Up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullName.current.value,
            photoURL: DEFAULT_USER_AVATAR,
          })
            .then(() => {
              const { email, password, displayName, photoURL } =
                auth.currentUser;
              dispatch(signInUser({ email, password, displayName, photoURL }));
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          className="h-screen object-cover md:w-screen"
          src={BG_URL}
          alt="cinemesh-background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black bg-opacity-50 text-white md:mt-[15%] mt-[50%] mx-auto p-4 right-0 left-0 w-4/12 xs:w-3/4 xxs:w-full rounded-md"
      >
        <h1 className="text-2xl mb-2  font-bold">
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className=" bg-gray-600 my-2 p-4 w-full rounded-md"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="  bg-gray-600 my-2 p-4 w-full rounded-md"
        />
        <input
          ref={password}
          type="password"
          placeholder="password"
          className=" bg-gray-600 my-2 p-4 w-full rounded-md "
        />
        {errorMessage !== null && (
          <p className="text-red-600 p-2 text-lg font-bold">{errorMessage}</p>
        )}
        <button
          onClick={handleButtonClick}
          className="bg-red-600 hover:bg-red-700 cursor-pointer mt-4 px-4 py-3  w-full rounded-md"
        >
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
