import React from "react";
import logoNotFound from "../../assets/images/not-found.png";
import "./NotFoudn.css";

const NotFound = () => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <img className="logo-not-found" src={logoNotFound} alt="..." />
        </div>
      </div>
    </>
  );
};

export default NotFound;
