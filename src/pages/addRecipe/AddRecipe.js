import React from "react";
import "./AddRecipe.css";
import iconUpload from "../../assets/images/icon-upload.png";

const AddRecipe = () => {
  return (
    <>
      <div className="container">
        <div className="row add-recipe-wrapper">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="row">
              <input type="file" id="upload" hidden />
              <label className="label-button-upload" for="upload">
                <div className="icon-upload">
                  <img src={iconUpload} alt="icon-upload" />
                  <p className="mt-2 title-icon-upload">Add Photo</p>
                </div>
              </label>
            </div>
            <div className="row mt-3">
              <input
                className="form-control form-control-lg form-add-recipe-bgcolor"
                type="text"
                placeholder="Title"
                aria-label=".form-control-lg example"
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
                />
                <label htmlFor="floatingTextarea2">Comments</label>
              </div>
            </div>
            <div className="row mt-3 justify-content-center">
              <div className="col-4">
                <button
                  type="button"
                  className="btn btn-warning button-add-recipe"
                >
                  Warning
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
