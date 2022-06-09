import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/signup.css";
import { baseurl } from "../API/config";
import loader from "../../assets/loader.svg";

const Signup = () => {
  let navigate = useNavigate();
  const [userDetail, setUserDetail] = useState({
    name: "",
    email: "",
    password: "",
    rpassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const changeHandler = (e) => {
    setUserDetail({ ...userDetail, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    //submitting signup data
    const response = await fetch(`${baseurl}/user/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userDetail.name,
        email: userDetail.email,
        password: userDetail.password,
        repassword: userDetail.rpassword,
      }),
    });
    const data = await response.json();
    if (response.status !== 200) {
      setLoading(false);
      setError(data.message);
      return;
    }
    setLoading(false);
    navigate(`/login`);
    setUserDetail({
      name: "",
      email: "",
      password: "",
      rpassword: "",
    });
  };
  return (
    <main className="signup-page">
      <section className="form-section">
        <div className="font-medium text-2xl mb-4">Sign Up</div>
        <form className="form" onSubmit={submitHandler}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={userDetail.name}
            id="name"
            className="p-1.5 mb-4"
            name="name"
            onChange={changeHandler}
            data-testid="name"
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            value={userDetail.email}
            id="email"
            className="p-1.5 mb-4"
            name="email"
            onChange={changeHandler}
            data-testid="email"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={userDetail.password}
            id="password"
            className="p-1.5 mb-4"
            name="password"
            onChange={changeHandler}
            data-testid="password"
          />
          <label htmlFor="rpassword">Repeat Password</label>
          <input
            type="password"
            value={userDetail.rpassword}
            id="rpassword"
            className="p-1.5"
            name="rpassword"
            onChange={changeHandler}
            data-testid="rpassword"
          />
          <br />
          <button
            type="submit"
            data-testid="signupButton"
            disabled={loading}
            className="bg-primary flex items-center justify-center rounded-md text-white mx-1.5"
          >
            {loading ? <img src={loader} alt="loder" width="40" /> : ""}
            <p className="py-2">Sign Up</p>
          </button>
          {error ? (
            <span className="text-red-500 pt-1">{error}</span>
          ) : (
            <span className="pb-3"></span>
          )}
          <p className="alreadyLogin">
            Already signup? <Link to="/login"> Login</Link>
          </p>
        </form>
      </section>
    </main>
  );
};

export default Signup;
