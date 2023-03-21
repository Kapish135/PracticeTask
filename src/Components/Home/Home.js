import React from "react";
import "./Home.css";
import MainImage from "../../assets/Frame-63.png";
import Overlay from "../../assets/Frame-190.png";

const Home = () => {
  return (
    <>
      <div className="Home">
        <div className="header__image">
          <img src={MainImage} className="background-image" alt="Image1" />
          <img src={Overlay} className="overlay-image" alt="Image2" />
        </div>
      </div>
    </>
  );
};

export default Home;
