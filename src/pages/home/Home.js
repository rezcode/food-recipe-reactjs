// Css for all components in screen Home
import "./Home.css";

// import components
import Banner from "../../components/banner/Banner";
import NewRecipe from "../../components/newRecipe/NewRecipe";
import RecentRecipe from "../../components/recentRecipe/RecentRecipe";

function Home() {
  return (
    <>
      <Banner />
      <NewRecipe />
      <RecentRecipe />
    </>
  );
}

export default Home;
