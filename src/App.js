import { Routes, Route } from "react-router-dom";
import DetailRecipe from "./pages/detailRecipe/DetailRecipe";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import WithoutNav from "./components/navbarDisplay/WithoutNav";
import WithNav from "./components/navbarDisplay/WithNav";

function App() {
  return (
    <>
      <Routes>
        <Route element={<WithoutNav />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route element={<WithNav />}>
          <Route path="/" element={<Home />} />
          <Route path="recipe-detail" element={<DetailRecipe />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
