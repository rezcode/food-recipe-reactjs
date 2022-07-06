import React from "react";
import "./login.css";
import logo from "../../assets/images/bibimbap (1).png";

export default function login() {
  return (
    <>
      <div>
        <div className="bg" />
        <div className="bg bg2" />
        <div className="bg bg3" />
        <div className="content">
          <div className="row">
            <div className="col-md-6">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control rounded-pill"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
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
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-outline-primary rounded-pill px-5"
                >
                  Log In
                </button>
              </form>
              <div className="row my-3">
                <hr id="login-line" />
              </div>
              <button
                type="button"
                className="btn btn-outline-danger rounded-pill px-5"
              >
                Create New Account
              </button>
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
