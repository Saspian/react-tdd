import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/signup.css";

const Login = () => {
  let navigate = useNavigate();
  const [userDetail, setUserDetail] = useState({
    username: "",
    password: "",
  });

  const changeHandler = (e) => {
    setUserDetail({ ...userDetail, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/welcome/${userDetail.username}`);
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
