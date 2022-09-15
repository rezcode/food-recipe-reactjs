// Css for all components in screen Home
import "./Home.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// import components
import Banner from "../../components/banner/Banner";
import NewRecipe from "../../components/newRecipe/NewRecipe";
import RecentRecipe from "../../components/recentRecipe/RecentRecipe";

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

  const getDataRecipe = () => {
    axios(`${process.env.REACT_APP_API_URL}/recipes`)
      .then((res) => {
        setRecipeList(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getNewRecipe = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/recipes`
      );
      const { data } = response.data;
      setNewRecipe(data);
    } catch (error) {
      console.log(error, "<== error getNewRecipe");
    }
  };

  const getRecentRecipe = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/recipes/find/recent`
      );
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
                <div key={index} className="col-md-3 text-center">
                  <Link to={`/recipe-detail/${recipeList.id}`}>
                    <div className="card card-my-recipe mb-4">
                      <img
                        crossOrigin="anonymous"
                        src={recipeList.food_image}
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
