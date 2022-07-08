import React from "react";
import "./DetailRecipe.css";
import imageDetail from "../../assets/images/Rectangle 313 (1).png";
import imageUserComment from "../../assets/images/img_avatar.png";

const DetailRecipe = () => {
  return (
    <>
      <div className="row mt-5">
        <div className="col-md-12">
          <h1 className="title-detail-recipe text-center m-5">
            Loream Sandwich
          </h1>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-12 text-center">
          <img
            src={imageDetail}
            className="img-fluid image-detail rounded"
            alt="..."
          />
        </div>
      </div>
      <div className="row container mt-5">
        <div className="col-md-6 offset-md-2">
          <h2>Ingredients</h2>
          <div className="row">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
              veritatis, possimus sit iure pariatur libero labore magni sunt
              quidem consequatur illo dolorem, accusamus quas aliquam vero ab
              qui esse. Officia repellendus odio adipisci corporis voluptatem,
              ducimus libero maxime quasi beatae perferendis aspernatur ipsa,
              necessitatibus sit nesciunt eaque distinctio hic non.
            </p>
          </div>
        </div>
        <div className="col-md-9 offset-md-2">
          <div className="row">
            <div className="form-floating">
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                style={{ height: "100px" }}
                defaultValue={""}
              />
              <label htmlFor="floatingTextarea2">Comments</label>
            </div>
            <div className="text-center">
              <button
                type="button"
                className="btn btn-warning button-comment mt-3"
              >
                Send
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-9 offset-md-2 mt-5">
            <h2>Comments</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-9 offset-md-2 mt-3">
            <div className="row">
              <div className="col-md-2">
                <img
                  className="img-user-comment"
                  src={imageUserComment}
                  alt="Avatar"
                />
              </div>
              <div className="col-md-6">
                <p className="user-name-comment">Ayudia</p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eveniet culpa voluptatum perspiciatis suscipit quaerat rerum
                  alias sed, reprehenderit architecto voluptates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailRecipe;
