import React, { useState, useEffect } from "react";
import "./login.css";
import logo from "../../assets/images/bibimbap (1).png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      Swal.fire({
        icon: "error",
        text: message,
      });
    }
    if (user?.token) {
      navigate("/");
    }
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = {
      email,
      password,
    };
    dispatch(login(formData));
  };

  console.log(message);

  return (
    <>
      <div>
        <div className="bg" />
        <div className="bg bg2" />
        <div className="bg bg3" />
        <div className="content">
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={handleLogin}>
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
                  {isLoading ? "Loading..." : "Login"}
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
