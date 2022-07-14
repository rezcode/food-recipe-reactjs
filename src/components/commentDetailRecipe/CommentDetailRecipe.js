import React, { useState } from "react";
import urlApi from "../../config/UrlApi";
import axios from "axios";
import { ProfileContex } from "../../config/Contex";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const CommentDetailRecipe = (props) => {
  const [comment, setComment] = useState("");
  const idRecipe = useParams();
  const { token, id } = ProfileContex?._currentValue2;
  const renderCommentUser = () => {
    if (props?.data?.length) {
      let jsx = props?.data?.map((item) => {
        return (
          <>
            <div className="row">
              <div className="col-md-9 offset-md-2 mt-3">
                <div className="row">
                  <div className="col-md-2">
                    <img
                      crossOrigin="anonymous"
                      className="img-user-comment"
                      src={`${urlApi}/${item?.image_profile?.substring(
                        7,
                        item?.image_profile?.length
                      )}`}
                      alt="Avatar"
                    />
                  </div>
                  <div className="col-md-6" style={{ marginLeft: "-60px" }}>
                    <p className="user-name-comment">{item?.name}</p>
                    <p>{item?.comment}</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      });
      return jsx;
    } else {
      return (
        <>
          <div className="row justify-content-center">
            <div className="col-md-5">
              <h5>No comment yet..</h5>
            </div>
          </div>
        </>
      );
    }
  };

  const addComment = () => {
    if (comment === "") {
      Swal.fire("Comment must be filled");
    } else {
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      const bodyParameters = {
        comment: comment,
        idRecipe: idRecipe?.id,
        idUser: id,
      };
      axios
        .post(`${urlApi}/comments/add`, bodyParameters, config)
        .then((res) => {
          window.location.href = `http://localhost:3000/recipe-detail/${idRecipe?.id}`;
        })
        .catch((err) => {
          Swal.fire("You need to login first");
          console.log(err, "<=== error failed comment");
        });
    }
  };

  return (
    <>
      <div className="col-md-9 offset-md-2">
        <div className="row">
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: "100px" }}
              defaultValue={""}
              onChange={(e) => setComment(e.target.value)}
            />
            <label htmlFor="floatingTextarea2">Comments</label>
          </div>
          <div className="text-center">
            <button
              type="button"
              className="btn btn-warning button-comment mt-3"
              onClick={addComment}
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
      {renderCommentUser()}
    </>
  );
};

export default CommentDetailRecipe;
