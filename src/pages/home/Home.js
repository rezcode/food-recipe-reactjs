// Css for all components in screen Home
import "./Home.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// import components
import Banner from "../../components/banner/Banner";
import NewRecipe from "../../components/newRecipe/NewRecipe";
import RecentRecipe from "../../components/recentRecipe/RecentRecipe";
import urlApi from "../../config/UrlApi";

function Home() {
  const [newRecipe, setNewRecipe] = useState([]);
  const [recentRecipe, setRecentRecipe] = useState([]);
  const [recipeList, setRecipeList] = useState(null);
  const [isParentData, setIsParentData] = useState("");

  useEffect(() => {
    getDataRecipe();
    getNewRecipe();
    getRecentRecipe();
  }, []);

  console.log("isParentData", isParentData);

  const getDataRecipe = () => {
    axios(`${urlApi}/recipes`)
      .then((res) => {
        setRecipeList(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
      <Banner sentToParent={setIsParentData} />
      <div className="container my-5">
        <div className="row">
          {recipeList &&
            recipeList
              .filter((recipeList) => {
                if (isParentData === "") {
                  return null;
                } else if (
                  recipeList.title
                    .toLowerCase()
                    .includes(isParentData.toLowerCase())
                ) {
                  return recipeList;
                }
              })
              .map((recipeList, index) => (
                <div className="col-md-3 text-center">
                  <Link to={`/recipe-detail/${recipeList.id}`}>
                    <div className="card card-my-recipe mb-4">
                      <img
                        crossOrigin="anonymous"
                        src={`${urlApi}/${recipeList.food_image.substring(
                          7,
                          recipeList.food_image.length
                        )}`}
                        className="card-img-top image-recent"
                        alt="..."
                      />
                      <h5 className="card-title name-card-recent">
                        {recipeList.title}
                      </h5>
                    </div>
                  </Link>
                </div>
              ))}
        </div>
      </div>
      <NewRecipe data={newRecipe} />
      <RecentRecipe data={recentRecipe} />
    </>
  );
}

export default Home;
