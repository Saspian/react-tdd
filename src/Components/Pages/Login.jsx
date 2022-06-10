import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/signup.css";
import { baseurl } from "../API/config";
import loader from "../../assets/loader.svg";

const Login = () => {
  let navigate = useNavigate();
  const [userDetail, setUserDetail] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  const changeHandler = (e) => {
    setError("");
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
        email: userDetail.email,
        password: userDetail.password,
      }),
    });
    const data = await response.json();
    if (response.status !== 200) {
      setLoading(false);
      setError(data.message);
      return;
    }
    setLoading(false);
    let authData = {
      token: data.token,
      refreshToken: data.refreshToken,
    };
    let perState = {
      user: {
        username: data.username,
        _uid: data.id,
        role: data.role,
      },
    };
    localStorage.setItem("twj", JSON.stringify(authData));
    localStorage.setItem("perState", JSON.stringify(perState));
    navigate(`/`);
    setError("");
    setUserDetail({
      email: "",
      password: "",
    });
  };
  return (
    <main className="signup-page">
      <section className="form-section">
        <div className="font-medium text-2xl mb-4">Login</div>
        <form className="form" onSubmit={submitHandler}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            value={userDetail.email}
            id="email"
            name="email"
            className="p-1.5 mb-4"
            onChange={changeHandler}
            data-testid="email"
          />
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
            disabled={loading}
            className="bg-primary flex items-center justify-center rounded-md text-white mx-1.5"
          >
            {loading ? <img src={loader} alt="loder" width="40" /> : ""}
            <p className="py-2">Login</p>
          </button>
          {error ? (
            <span className="text-red-500 pt-1">{error}</span>
          ) : (
            <span className="pb-3"></span>
          )}
          <p className="">
            Create account <Link to="/signup"> Sign Up</Link>
          </p>
        </form>
      </section>
    </main>
  );
};

export default Login;
