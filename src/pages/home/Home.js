// Css for all components in screen Home
import "./Home.css";

// import components
import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/banner/Banner";
import NewRecipe from "../../components/newRecipe/NewRecipe";
import RecentRecipe from "../../components/recentRecipe/RecentRecipe";
import Footer from "../../components/footer/Footer";

function TextLinkExample() {
  return (
    <>
      <Navbar />
      <Banner />
      <NewRecipe />
      <RecentRecipe />
      <Footer />
    </>
  );
}

export default TextLinkExample;
