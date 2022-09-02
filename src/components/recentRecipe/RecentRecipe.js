import React from "react";
import urlApi from "../../config/UrlApi";
import NotFound from "../notFound/NotFound";
import { Link } from "react-router-dom";

const RecentRecipe = (props) => {
  const renderRecentRecipe = () => {
    let { data } = props;
    if (data?.length > 0) {
      let jsx = data?.map((item) => {
        return (
          <>
            <div className="col-md-4 text-center">
              <Link to={`/recipe-detail/${item.id}`}>
                <div className="card card-recent-recipe mb-4">
                  <img
                    crossOrigin="anonymous"
                    src={item.food_image}
                    className="card-img-top image-recent"
                    alt="..."
                  />
                  <h5 className="card-title name-card-recent">{item.title}</h5>
                </div>
              </Link>
            </div>
          </>
        );
      });
      return jsx;
    } else {
      return <NotFound />;
    }
  };

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
        <div className="row">
          <div className="container">
            <div className="row justify-content-center classss">
              {renderRecentRecipe()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentRecipe;
