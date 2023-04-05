import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../common/navbar/navBar";
import "./sign-up.css";
import axios from "../../axios";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleChange(e) {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const handleSubmit = async (e) => {
    setError(null);
    e.preventDefault();
    try {
      const res = await axios.post("/auth/register", {
        name: data.name,
        phone: data.phone,
        email: data.email,
        password: data.password,
      });
      if (res.data === "USEREXISTS") return setError("USEREXISTS");
      console.log(res);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <NavBar />
      <div className="form">
        <div className="box">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={data.name}
              className="input"
              onChange={handleChange}
            />
            <label>Phone</label>
            <input
              type="number"
              name="phone"
              value={data.phone}
              className="input"
              onChange={handleChange}
            />
            <label>Email id</label>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              className="input"
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              className="input"
            />
            {error ? (
              <p style={{ color: "red" }}>Account already Exists</p>
            ) : null}
            <input type="submit" name="" className="submit" value="Sign Up" />
            <p>Already have an account?</p>
            <Link to="/login">
              <span>Login</span>
            </Link>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignUp;
