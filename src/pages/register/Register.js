import React, { useState } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import LoadingButton from "../../components/loadingComp/LoadingButton";
import SwalToastMixin from "../../utils/SwalToastMixin";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate(); // untuk redirect ke login

  const register = (e) => {
    e.preventDefault(); //agar ketika submit page tidak reload
    setIsLoading(true);
    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/register`, {
        name,
        email,
        phoneNumber,
        password,
      })
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => {
        setErrorMsg(err?.response?.data);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
        setTimeout(() => {
          setIsError(false);
        }, 1000);
      });
  };

  return (
    <>
      {isError ? <SwalToastMixin icon="error" title={errorMsg} /> : null}
      <div>
        <div className="bg" />
        <div className="bg bg2" />
        <div className="bg bg3" />
        <div className="content-register">
          <div className="row justify-content-center">
            <div className="col-md-9">
              <form onSubmit={register}>
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    name="name"
                    onInput={(e) => setName(e.target.value)}
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
                  className="btn btn-primary rounded-pill px-5 mt-2"
                  onClick={register}
                >
                  {isLoading ? <LoadingButton /> : "Sign Up"}
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
