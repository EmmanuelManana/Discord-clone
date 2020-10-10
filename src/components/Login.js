import { Button } from "@material-ui/core";
import React from "react";
import "../styles/Login.css";
import { auth, provider } from '../firebase.js'

const Login = () => {

  const signIn = (event) => {
      // Google Login stuff here
      // // google authentication API provider.
      auth.signInWithPopup(provider)
      .catch(error => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://discord.com/assets/fc0b01fe10a0b8c602fb0106d8189d9b.png"
          alt=""
          className="src"
        />
      </div>

      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
};

export default Login;
