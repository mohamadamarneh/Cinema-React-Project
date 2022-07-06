import "./SignIn.css";
import TextField from "@mui/material/TextField";
import GoogleIcon from "../../images/google.svg";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import FilledInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AppleIcon from "../../images/apple.ico";
import axios from "axios";
import { Router } from 'react-router';

const SignIn = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  function login(e) {
    e.preventDefault();
    //console.log({name,email,password})

    //send to api
    axios.post(`https://62c52d60a361f725127c1c74.mockapi.io/users`, {
      name,
      email,
      password,
    });

    localStorage.setItem("username", name);




  }






  // const [values, setValues] = useState({
  //   password: "",
  //   showPassword: false,
  // });
  // const handleChange = (prop) => (event) => {
  //   setValues({ ...values, [prop]: event.target.value });
  // };

  // const handleClickShowPassword = () => {
  //   setValues({
  //     ...values,
  //     showPassword: !values.showPassword,
  //   });
  // };

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };

  return (
    <>
      <div className="login__main">
        <div className="login__row row ">
          <div className="login__right card">
            <div className="form__login">
              <div className="login__title">
                <h2 className="t">Create your free account</h2>
                <p>No credit card required.</p>
              </div>
              <div className="login__btns">
                <div className="google__login">
                  <button className="google">
                    {" "}
                    <img src={GoogleIcon} width="20" alt="" /> Continue with
                    Google
                  </button>
                </div>
                <div className="apple__login">
                  <button className="apple">
                    {" "}
                    <img src={AppleIcon} width="20" alt="" /> Continue with
                    Apple
                  </button>
                </div>
                <div className="or__line">
                  <p className="span-h"></p>
                  <p className="span-p"> or</p>
                  <p class="span-k"></p>
                </div>

                <div className="sign_name">
                  <h5>Name</h5>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                  />
                </div>

                <div className="sign_pass">
                  <h5>Email</h5>
                  <input
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                  />
                </div>
                <div className="sign_pass">
                  <h5>Password</h5>
                  <input
                    type="password"
                    placeholder="Enter Pasword"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                  />
                </div>

                <div className="new__acc">
                  <button  onClick={login}>Create An Account</button>
                  <p>
                    Aready have an Account? <b>Sign in</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
