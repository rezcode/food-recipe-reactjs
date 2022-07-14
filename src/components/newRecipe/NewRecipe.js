import React from "react";
import urlApi from "../../config/UrlApi";
import NotFound from "../notFound/NotFound";

const NewRecipe = (props) => {
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
          {props?.data?.length > 0 ? (
            <>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6 new-recipe-background">
                    <div className="card text-white card-new-recipe">
                      <img
                        crossOrigin="anonymous"
                        src={`${urlApi}/${props.data[0].food_image.substring(
                          7,
                          props.data[0].food_image.length
                        )}`}
                        className="image-new-recipe"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <h2 className="name-new-recipe">{props.data[0].title}</h2>
                <hr className="line-new-recipe" />
                <p className="ingredients-new-recipe">
                  {props.data[0].ingredients}
                </p>
              </div>
            </>
          ) : (
            <NotFound />
          )}
        </div>
      </div>
    </>
  );
};

export default NewRecipe;
