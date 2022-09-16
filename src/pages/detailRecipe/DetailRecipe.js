import React, { useEffect, useState } from "react";
import "./DetailRecipe.css";
import { useParams } from "react-router-dom";
import DetailRecipeComp from "../../components/detailRecipeComp/DetailRecipeComp";
import axios from "axios";
import "./DetailRecipe.css";
import CommentDetailRecipe from "../../components/commentDetailRecipe/CommentDetailRecipe";

const DetailRecipe = () => {
  const [dataRecipe, setDataRecipe] = useState([]);
  const [dataComment, setDataComment] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    getDataRecipe();
    getCommentRecipe();
  }, []);

  // get id recipe from url
  const idRecipe = useParams();
  const { id } = idRecipe;

  const getDataRecipe = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/recipes/${id}`
      );
      const { data } = response.data;
      setDataRecipe(data);
    } catch (error) {
      console.log(error, "<=== ini error getDataRecipe");
    }
  };

  const getCommentRecipe = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/comments/recipe/${id}`
      );
      const { data } = response.data;
      setDataComment(data);
    } catch (error) {
      console.log(error, "<=== ini error getCommentRecipe");
    }
  };

  return (
    <>
      <DetailRecipeComp data={dataRecipe} />
      <CommentDetailRecipe data={dataComment} />
    </>
  );
};

export default DetailRecipe;
