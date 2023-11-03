import React from "react";
import Header from "./Header";
import { BG_URL } from "../utils/constants";
const Login = () => {
  return (
    <div>
      <Header />
      <div></div>
      <img src={BG_URL} alt="cinemesh-background" />
    </div>
  );
};

export default Login;
