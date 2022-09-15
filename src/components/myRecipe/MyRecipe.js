import React from "react";
import { Link } from "react-router-dom";

const MyRecipe = (props) => {
  const renderMyRecipe = () => {
    let jsx = props?.dataMyRecipe?.map((item) => {
      return (
        <div className="col-3">
          <Link to={`/recipe-detail/${item?.id}`}>
            <div className="card card-my-recipe mb-4">
              <img
                crossOrigin="anonymous"
                src={item?.food_image}
                className="card-img-top image-recent"
                alt="..."
              />
              <h5 className="card-title name-card-recent">{item?.title}</h5>
            </div>
          </Link>
        </div>
      );
    });
    return jsx;
  };

  return (
    <>
      {props?.dataMyRecipe?.length > 0 ? (
        <>{renderMyRecipe()}</>
      ) : (
        <div className="text-center">
          <p>
            You don't have your own recipe
            <br /> please add your recipe <Link to="/add-recipe">here</Link>
          </p>
        </div>
      )}
    </>
  );
};

export default MyRecipe;
