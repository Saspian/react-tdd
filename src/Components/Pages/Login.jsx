import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/signup.css";
import { baseurl } from "../API/config";

const Login = () => {
  let navigate = useNavigate();
  console.log(baseurl, "@@baseURl");
  const [userDetail, setUserDetail] = useState({
    username: "",
    password: "",
  });

  const changeHandler = (e) => {
    setUserDetail({ ...userDetail, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch(`${baseurl}/user/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userDetail.username,
        password: userDetail.password,
      }),
    });
    const data = await response.json();
    navigate(`/welcome/${data.username}`);
    setUserDetail({
      username: "",
      password: "",
    });
  };
  return (
    <main className="signup-page">
      <section className="form-section">
        <form className="form" onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={userDetail.username}
            id="username"
            name="username"
            onChange={changeHandler}
            data-testid="username"
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={userDetail.password}
            id="password"
            name="password"
            onChange={changeHandler}
            data-testid="password"
          />
          <br />
          <input type="submit" data-testid="signupButton" label="Login" />
          <p className="alreadyLogin">
            Create account <Link to="/signup"> Sign Up</Link>
          </p>
        </form>
      </section>
    </main>
  );
};

export default Login;
