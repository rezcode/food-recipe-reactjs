import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./Profile.css";
import imgProfile from "../../assets/images/avatar.png";
import NotFound from "../../components/notFound/NotFound";

const Profile = () => {
  return (
    <>
      <div className="row profile-wrapper justify-content-center text-center flex-vertical-center">
        <div className="col-md-4">
          <img src={imgProfile} className="image-profile" alt="..." />
          <div className="row mt-3">
            <h1 className="name-profile">Garneta Sharina</h1>
          </div>
        </div>
      </div>

      {/* menu profile */}
      <div className="container">
        <div className="row">
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="my-recipe" title="My Recipe">
              <p>lskjdflsdkj</p>
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
