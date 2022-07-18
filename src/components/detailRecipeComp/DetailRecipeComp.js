import React from "react";
import NotFound from "../notFound/NotFound";
import urlApi from "../../config/UrlApi";
import { ProfileContex } from "../../config/Contex";
import axios from "axios";
import Swal from "sweetalert2";

const DetailRecipeComp = (props) => {
  const { data } = props;
  const { id, token } = ProfileContex?._currentValue2;
  const idUser = id;

  console.log(data);

  const handleDeleteRecipe = () => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .delete(`${urlApi}/recipes/${data[0]?.id}`, config)
      .then((res) => {
        window.location.href = "/profile";
        Swal.fire("Delete Success");
      })
      .catch((err) => console.log(err));
  };

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
              {idUser == data[0]?.user_id ? (
                <>
                  <button type="button" className="btn btn-primary button-edit">
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger button-delete"
                    onClick={handleDeleteRecipe}
                  >
                    Delete
                  </button>
                </>
              ) : null}
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
