import React from "react";
import imageNewRecipe from "../../assets/images/Rectangle 313.png";

export default function NewRecipe() {
  return (
    <>
      <div className="row">
        <div className="row">
          <div className="col-md-12">
            <div className="container">
              <div className="title-new-recipe">
                <h2>New Recipe</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6 new-recipe-background">
                <div className="card text-white card-new-recipe">
                  <img
                    src={imageNewRecipe}
                    className="image-new-recipe"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h2 className="name-new-recipe">
              Healthy Bone Broth Ramen (Quick & Easy)
            </h2>
            <hr className="line-new-recipe" />
            <p className="ingredients-new-recipe">
              Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a
              hurry? That's right!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
