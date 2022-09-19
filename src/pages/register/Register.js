import React, { useState, useEffect } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  register,
  resetLoggedUser,
} from "../../redux/features/auth/authSlice.js";
import Swal from "sweetalert2";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, isError, navigate, message, dispatch]);

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("inside function", isSuccess);
    const body = {
      name,
      email,
      phoneNumber,
      password,
    };
    dispatch(register(body));
  };

  if (isSuccess) {
    navigate("/login");
    dispatch(resetLoggedUser());
  }

  if (isError) {
    Swal.fire({
      icon: "error",
      text: message,
    });
    dispatch(resetLoggedUser());
  }

  return (
    <>
      <div>
        <div className="bg" />
        <div className="bg bg2" />
        <div className="bg bg3" />
        <div className="content-register">
          <div className="row justify-content-center">
            <div className="col-md-9">
              <form onSubmit={handleRegister}>
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
                  type="submit"
                  className="btn btn-primary rounded-pill px-5 mt-2"
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "Register"}
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
