import React from "react";
import imageLanding from "../../assets/images/—Pngtree—delicious food_568171 1.png";

export default function Banner() {
  return (
    <>
      <div className="row mt-5">
        <div className="col-md-9">
          <div className="row">
            <div className="col-md-7">
              <div className="title-landing">
                Discover Recipe & Delicious Food
              </div>
              <div className="input-group flex-nowrap search-landing">
                <span className="input-group-text" id="addon-wrapping">
                  🔍
                </span>
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="addon-wrapping"
                />
              </div>
            </div>
            <div className="col-md-5">
              <div>
                <img src={imageLanding} className="image-landing" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 side-background"></div>
      </div>
    </>
  );
}
