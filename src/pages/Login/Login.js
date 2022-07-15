import React, { useState } from "react";
import "./login.css";
import logo from "../../assets/images/bibimbap (1).png";
import axios from "axios";
import { Link } from "react-router-dom";
import urlApi from "../../config/UrlApi";
import LoadingButton from "../../components/loadingComp/LoadingButton";
import SwalToastMixin from "../../utils/SwalToastMixin";

export default function Login() {
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post(`${urlApi}/auth/login`, {
        email,
        password,
      })
      .then((res) => {
        // set localstorage
        localStorage.setItem("id", res?.data?.data?.id);
        localStorage.setItem("username", res?.data?.data?.name);
        localStorage.setItem("email", res?.data?.data?.email);
        localStorage.setItem("token", res?.data?.token);
        localStorage.setItem("phoneNumber", res?.data?.data?.phone_number);
        localStorage.setItem("imageProfile", res?.data?.data?.image_profile);

        window.location.href = "/";
      })
      .catch((err) => {
        const responseError =
          err?.response?.data?.error ?? err?.response?.data?.message;
        setErrorMsg(responseError);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
        setTimeout(() => {
          setIsError(false);
        }, 1000); // delay error catch reveal
      });
  };

  return (
    <>
      <div>
        <div className="bg" />
        {isError ? <SwalToastMixin icon="error" title={errorMsg} /> : null}
        <div className="bg bg2" />
        <div className="bg bg3" />
        <div className="content">
          <div className="row">
            <div className="col-md-6">
              <form
                onSubmit={(e) => {
                  handleLogin();
                }}
              >
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control rounded-pill"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control rounded-pill"
                    id="exampleInputPassword1"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary rounded-pill px-5"
                  onClick={handleLogin}
                  disabled={isLoading}
                >
                  {isLoading ? <LoadingButton /> : "Log In"}
                </button>
              </form>
              <div className="row my-3">
                <hr id="login-line" />
              </div>
              <Link to="/register">
                <button
                  type="button"
                  className="btn btn-outline-danger rounded-pill px-5"
                >
                  Create New Account
                </button>
              </Link>
            </div>
            <div className="col-md-6">
              <img src={logo} alt="logo" className="logo-login rounded-pill" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
