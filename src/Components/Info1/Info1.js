import React from "react";
import { Button } from "@mui/material";
import "./Info1.css";
import Ellipse from "../../assets/Ellipse-24.png";
const Info1 = () => {
  return (
    <>
      <div className="header__info1">
        <div className="image-container">
          <img src={Ellipse} className="background-image1" alt="ellipse" />

          <div className="text-overlay">
            <h2 className="info-heading1">What We Do. </h2>
            <p className="para-overlay">
              We do lots of stuffs , basically adding value to your product .
            </p>
          </div>
        </div>
        <div className="para-container">
          <p className="info-text">Digital Marketing</p>
          <p className="info-text">Digital Marketing</p>
          <p className="info-text">Digital Marketing</p>
          <p className="info-text">Digital Marketing</p>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#301E4E", marginTop: "-3%" }}
          >
            VIEW ALL
          </Button>
        </div>
      </div>
    </>
  );
};

export default Info1;
