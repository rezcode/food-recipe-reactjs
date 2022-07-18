import React, { useState } from "react";
import "./AddRecipe.css";
import iconUpload from "../../assets/images/icon-upload.png";
import Swal from "sweetalert2";
import axios from "axios";
import urlApi from "../../config/UrlApi";
import { ProfileContex } from "../../config/Contex";

const AddRecipe = () => {
  const [titleImage, setTitleImage] = useState("Add Recipe Image");
  const [saveImage, setSaveImage] = useState({});
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const { token, id } = ProfileContex?._currentValue2;

  const handleImage = (e) => {
    let image = e.target?.files[0];
    let nameImage = e.target?.files[0]?.name;
    setTitleImage(nameImage);
    setSaveImage(image);
  };

  console.log("saveImage", saveImage);

  const handleAddRecipe = () => {
    if (!saveImage) {
      Swal.fire("Insert Image first!");
    } else {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("ingredients", ingredients);
      formData.append("foodImage", saveImage);
      formData.append("userId", parseInt(id));

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data; ",
        },
      };

      axios
        .post(`${urlApi}/recipes/add`, formData, config)
        .then((res) => {
          Swal.fire("add Recipe Success");
          window.location.href = "/";
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div className="container">
        <div className="row add-recipe-wrapper">
          <form>
            <div className="row">
              <input type="file" id="upload" onChange={handleImage} hidden />
              <label className="label-button-upload" for="upload">
                <div className="icon-upload">
                  <img src={iconUpload} alt="icon-upload" />
                  <p className="mt-2 title-icon-upload">{titleImage}</p>
                </div>
              </label>
            </div>
            <div className="row mt-3">
              <input
                className="form-control form-control-lg form-add-recipe-bgcolor"
                type="text"
                placeholder="Title"
                aria-label=".form-control-lg example"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="row mt-3">
              <div className="form-floating" style={{ padding: "0px" }}>
                <textarea
                  className="form-control form-add-recipe-bgcolor"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style={{ height: "100px" }}
                  defaultValue={""}
                  onChange={(e) => setIngredients(e.target.value)}
                />
                <label htmlFor="floatingTextarea2">Ingredients</label>
              </div>
            </div>
            <div className="row mt-3 justify-content-center">
              <div className="col-4">
                <button
                  type="button"
                  className="btn btn-warning button-add-recipe"
                  onClick={handleAddRecipe}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddRecipe;
