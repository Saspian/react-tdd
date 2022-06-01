import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/signup.css";
import { baseurl } from "../API/config";
import loader from "../../assets/loader.svg";

const Login = () => {
  let navigate = useNavigate();
  const [userDetail, setUserDetail] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const changeHandler = (e) => {
    setUserDetail({ ...userDetail, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
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
    setLoading(false);
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
            className="p-1.5"
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
            className="p-1.5"
            onChange={changeHandler}
            data-testid="password"
          />
          <br />
          <button
            type="submit"
            data-testid="loginButton"
            className="bg-primary flex items-center justify-center rounded-md text-white"
          >
            {loading ? <img src={loader} alt="loder" width="40" /> : ""}
            <p className="py-2">Login</p>
          </button>
          <p className="alreadyLogin">
            Create account <Link to="/signup"> Sign Up</Link>
          </p>
        </form>
      </section>
    </main>
  );
};

export default Login;
