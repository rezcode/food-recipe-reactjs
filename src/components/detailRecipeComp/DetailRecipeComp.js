import React from "react";
import NotFound from "../notFound/NotFound";
import urlApi from "../../config/UrlApi";

const DetailRecipeComp = (props) => {
  const { data } = props;

  const renderRecipeDetail = () => {
    if (data?.length) {
      return (
        <>
          <div className="row mt-5">
            <div className="col-md-12">
              <h1 className="title-detail-recipe text-center m-5">
                {data[0]?.title}
              </h1>
            </div>
          </div>
          <div className="row mt-3 justify-content-center">
            <div className="col-md-6 text-center image-detail-wrapper">
              <img
                crossOrigin="anonymous"
                src={`${urlApi}/${data[0].food_image?.substring(
                  7,
                  data[0]?.food_image?.length
                )}`}
                className="img-fluid image-detail rounded"
                alt="..."
              />
            </div>
          </div>
          <div className="row container mt-5">
            <div className="col-md-6 offset-md-2">
              <h2>Ingredients</h2>
              <div className="row">
                <p>{data[0]?.ingredients}</p>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      <NotFound />;
    }
  };

  return <>{renderRecipeDetail()}</>;
};

export default DetailRecipeComp;
