import React, { useState } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import urlApi from "../../config/UrlApi";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate(); // untuk redirect ke login

  const register = async (e) => {
    e.preventDefault(); //agar ketika submit page tidak reload
    try {
      await axios.post(`${urlApi}/auth/register`, {
        username,
        email,
        phoneNumber,
        password,
      });
      navigate("/login");
    } catch (error) {
      if (error.response) {
        console.log(username);
        console.log(error.response);
      }
    }
  };

  return (
    <>
      <div>
        <div className="bg" />
        <div className="bg bg2" />
        <div className="bg bg3" />
        <div className="content">
          <div className="row justify-content-center">
            <div className="col-md-9">
              <form>
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    name="username"
                    onInput={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control rounded-pill"
                    name="email"
                    onInput={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    name="phoneNumber"
                    onInput={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control rounded-pill"
                    name="password"
                    onInput={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-outline-primary rounded-pill px-5"
                  onClick={register}
                >
                  Sign Up
                </button>
              </form>
              <div className="row my-3">
                <hr id="login-line" />
              </div>
              <p>already have an account?</p>
              <Link to="/login">
                <button
                  type="button"
                  className="btn btn-outline-danger rounded-pill px-5"
                >
                  Log In
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
