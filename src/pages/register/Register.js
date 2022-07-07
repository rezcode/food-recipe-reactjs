import React from "react";
import "./register.css";
import { Link } from "react-router-dom";

export default function login() {
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
                  <input type="text" className="form-control rounded-pill" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input type="email" className="form-control rounded-pill" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input type="text" className="form-control rounded-pill" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control rounded-pill"
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-outline-primary rounded-pill px-5"
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
}
