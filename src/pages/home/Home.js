// Css for all components in screen Home
import "./Home.css";
import axios from "axios";
import { useEffect, useState } from "react";

// import components
import Banner from "../../components/banner/Banner";
import NewRecipe from "../../components/newRecipe/NewRecipe";
import RecentRecipe from "../../components/recentRecipe/RecentRecipe";
import urlApi from "../../config/UrlApi";

function Home() {
  const [newRecipe, setNewRecipe] = useState([]);
  const [recentRecipe, setRecentRecipe] = useState([]);

  useEffect(() => {
    // if (localStorage.getItem("token")) {
    //   window.location.href = "/";
    // }
    // console.log(localStorage.getItem("username"));
    getNewRecipe();
    getRecentRecipe();
  }, []);

  const getNewRecipe = async () => {
    try {
      const response = await axios.get(`${urlApi}/recipes`);
      const { data } = response.data;
      setNewRecipe(data);
    } catch (error) {
      console.log(error, "<== error getNewRecipe");
    }
  };

  const getRecentRecipe = async () => {
    try {
      const response = await axios.get(`${urlApi}/recipes/find/recent`);
      const { data } = response.data;
      setRecentRecipe(data);
    } catch (error) {
      console.log(error, "<== error getRecentRecipe");
    }
  };

  return (
    <>
      <Banner />
      <NewRecipe data={newRecipe} />
      <RecentRecipe data={recentRecipe} />
    </>
  );
}

export default Home;
