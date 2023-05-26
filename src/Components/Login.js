import React, { useContext, useState } from "react";
import "./Login.css";
import { myContext } from "./context";
//import {Link } from 'react-router-dom'
//import Register from "./Register";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const data = useContext(myContext);
  const { formData } = data;
  const [loginFail, setLoginFail] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Email = (e) => {
    setEmail(e.target.value);
  };

  const Password = (e) => {
    setPassword(e.target.value);
  };
  const navigate = useNavigate();

  const LoginButtonClick = () => {
    navigate("/");
  };

  const Submit = (e) => {
    e.preventDefault();

    if (email === formData.email && password === formData.password) {
      LoginButtonClick();
      console.log("Login successfull");
    } else {
      console.log("Invalid email or password");
      setLoginFail(true);
    }
  };
  return (
    <div className="Login">
      <h2>Login</h2>
      <form className="LoginForm" onSubmit={Submit}>
        <div>
          <label className="LoginEmail">Email:</label>
          <br />
          <input
            className="LogimEmailInput"
            type="email"
            value={email}
            onChange={Email}
          />
        </div>
        <div>
          <label className="LoginPassword">Password:</label>
          <br />
          <input
            className="LoginPasswordInput"
            type="password"
            value={password}
            onChange={Password}
          />
        </div>
        <button className="LoginButton" type="submit">
          Login
        </button>
      </form>
      {loginFail && <p>Opps!... Try Again</p>}
    </div>
  );
};
export default Login;
