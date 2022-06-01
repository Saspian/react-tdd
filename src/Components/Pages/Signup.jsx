import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/signup.css";
import loader from "../../assets/loader.svg";

const Signup = () => {
  let navigate = useNavigate();
  const [userDetail, setUserDetail] = useState({
    email: "",
    password: "",
    rpassword: "",
  });
  const [loading, setLoading] = useState(false);

  const changeHandler = (e) => {
    setUserDetail({ ...userDetail, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    //submitting signup data
    setLoading(false);
    navigate(`/welcome/${userDetail.email}`);
    setUserDetail({
      email: "",
      password: "",
      rpassword: "",
    });
  };
  return (
    <main className="signup-page">
      <section className="form-section">
        <form className="form" onSubmit={submitHandler}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            value={userDetail.email}
            id="email"
            className="p-1.5"
            name="email"
            onChange={changeHandler}
            data-testid="email"
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={userDetail.password}
            id="password"
            className="p-1.5"
            name="password"
            onChange={changeHandler}
            data-testid="password"
          />
          <br />
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
            className="bg-primary flex items-center justify-center rounded-md text-white"
          >
            {loading ? <img src={loader} alt="loder" width="40" /> : ""}
            <p className="py-2">Sign Up</p>
          </button>
          <p className="alreadyLogin">
            Already signup? <Link to="/login"> Login</Link>
          </p>
        </form>
      </section>
    </main>
  );
};

export default Signup;
