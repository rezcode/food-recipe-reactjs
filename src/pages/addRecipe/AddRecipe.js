import React, { useState } from "react";
import "./AddRecipe.css";
import iconUpload from "../../assets/images/icon-upload.png";
import Swal from "sweetalert2";
import axios from "axios";
import { ProfileContex } from "../../config/Contex";
import { useNavigate } from "react-router-dom";
import LoadingButton from "../../components/loadingComp/LoadingButton";

const AddRecipe = () => {
  const [titleImage, setTitleImage] = useState("Add Recipe Image");
  const [saveImage, setSaveImage] = useState({});
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const { token, id } = ProfileContex?._currentValue2;
  const [category, setCategory] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleImage = (e) => {
    let image = e.target?.files[0];
    let nameImage = e.target?.files[0]?.name;
    setTitleImage(nameImage);
    setSaveImage(image);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleAddRecipe = () => {
    setLoading(true);
    if (!saveImage) {
      Swal.fire("Insert food Image first!");
    } else {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("ingredients", ingredients);
      formData.append("foodImage", saveImage);
      formData.append("id_user", parseInt(id));
      formData.append("id_category", parseInt(category));

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data; ",
        },
      };

      axios
        .post(`${process.env.REACT_APP_API_URL}/recipes/add`, formData, config)
        .then((res) => {
          setLoading(false);
          Swal.fire("add Recipe Success").then((result) => {
            result.isConfirmed && navigate("/");
          });
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
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
            <div className="form-floating mt-3">
              <select
                className="form-select"
                onChange={handleCategory}
                id="floatingSelect"
              >
                <option value={1}>Cakes</option>
                <option value={2}>Dessert</option>
                <option value={3}>Fat Food</option>
                <option value={4}>Vegan Food</option>
              </select>
              <label htmlFor="floatingSelect">Category</label>
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
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Submit"}
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
