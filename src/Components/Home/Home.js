import React from "react";
import "./Home.css";
import MainImage from "../../assets/Frame-63.png";

const Home = () => {
  return (
    <>
      <div className="Home">
        <div className="header__image">
          <img src={MainImage} className="background-image" alt="Image1" />
          <div className="overlay_div">
            <p className="overlay_cont1">
              We are <span className="mini_cont">Extensive.</span>
            </p>
            <p className="overlay_cont2">
              Helping you stand out in a crowded market
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
