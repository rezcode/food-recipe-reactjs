import React, { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./Profile.css";
import NotFound from "../../components/notFound/NotFound";
import axios from "axios";
import MyRecipe from "../../components/myRecipe/MyRecipe";
import { useSelector } from "react-redux";

const Profile = () => {
  const [userData, setUserData] = useState([]);
  const [dataMyRecipe, SetDataMyRecipe] = useState([]);
  const user = useSelector((state) => state.auth.user);

  const configHeaders = {
    headers: {
      Authorization: `Bearer ${user?.token}`,
    },
  };

  useEffect(() => {
    getDataUser();
    getDataMyRecipe();
  }, []);

  const getDataUser = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/users/${user?.id}`, configHeaders)
      .then((res) => {
        setUserData(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getDataMyRecipe = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/users/find/recipe/${user?.id}`
      );
      SetDataMyRecipe(response?.data);
    } catch (error) {
      console.log(error, "<=== ini error getDataRecipe");
    }
  };

  return (
    <>
      <div className="row profile-wrapper justify-content-center text-center flex-vertical-center">
        <div className="col-md-4">
          {userData?.map((item, index) => (
            <div key={index}>
              <img
                crossOrigin="anonymous"
                src={item?.image_profile}
                className="image-profile"
                alt="..."
              />
              <div className="row mt-3">
                <h1 className="name-profile">{item?.name}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* menu profile */}
      <div className="container">
        <div className="row">
          <Tabs
            defaultActiveKey="my-recipe"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="my-recipe" className="menu-color" title="My Recipe">
              <div className="row mx-3 mt-3">
                <MyRecipe dataMyRecipe={dataMyRecipe} />
              </div>
            </Tab>
            <Tab eventKey="saved" title="Saved">
              <NotFound />
            </Tab>
            <Tab eventKey="contact" title="Liked">
              <NotFound />
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Profile;
