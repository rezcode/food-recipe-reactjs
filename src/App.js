import React from "react";
import { Routes, Route } from "react-router-dom";
import DetailRecipe from "./pages/detailRecipe/DetailRecipe";
import Home from "./pages/home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/register/Register";
import WithoutNav from "./components/navbarDisplay/WithoutNav";
import WithNav from "./components/navbarDisplay/WithNav";
import Profile from "./pages/profile/Profile";
import { ProfileContex } from "./config/Contex";
import AddRecipe from "./pages/addRecipe/AddRecipe";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <ProfileContex.Provider value={ProfileContex}>
        <Routes>
          <Route element={<WithoutNav />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route element={<WithNav />}>
            <Route path="/" element={<Home />} />
            <Route path="recipe-detail/:id" element={<DetailRecipe />} />
            <Route path="profile" element={<Profile />} />
            <Route path="add-recipe" element={<AddRecipe />} />
          </Route>
        </Routes>
      </ProfileContex.Provider>
    </>
  );
}

export default App;
