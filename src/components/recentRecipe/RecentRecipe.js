import React from "react";
import imageRecentRecipe1 from "../../assets/images/Rectangle 314.png";
import imageRecentRecipe2 from "../../assets/images/Rectangle 315.png";
import imageRecentRecipe3 from "../../assets/images/Rectangle 316.png";

export default function RecentRecipe() {
  return (
    <>
      <div className="row">
        <div className="row">
          <div className="col-md-12">
            <div className="container">
              <div className="title-six-recent">
                <h2>Recent recipes</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-3">
            <div className="card card-recent-recipe">
              <img
                src={imageRecentRecipe1}
                className="card-img-top"
                alt="..."
              />
              <h5 className="card-title name-card-recent">
                Special title treatment
              </h5>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card card-recent-recipe">
              <img
                src={imageRecentRecipe2}
                className="card-img-top"
                alt="..."
              />
              <h5 className="card-title name-card-recent">
                Special title treatment
              </h5>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card card-recent-recipe">
              <img
                src={imageRecentRecipe3}
                className="card-img-top"
                alt="..."
              />
              <h5 className="card-title name-card-recent">
                Special title treatment
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
