import React from "react";
import Card from "../Card/Card";
import "./Ourwork.css";
import Image from "../../assets/Rectangle-55.png";
import Image1 from "../../assets/Rectangle-56.png";
import { Button } from "@mui/material";
const Ourwork = () => {
  return (
    <>
      <div className="header__ourwork">
        <p className="main__heading">OUR WORK</p>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FF6E6C",
            marginLeft: "7%",
            marginBottom: "30px",
          }}
        >
          View ALL
        </Button>
        <div className="ourwork_cards">
          <Card
            name="STARBUCKS"
            description="Our ad campaign brought 80% footfall to the company"
            image={Image}
          />
          <Card
            name="NIKE"
            description="Our ad campaign brought 80% footfall to the company"
            image={Image1}
          />
          <Card
            name="NIKE"
            description="Our ad campaign brought 80% footfall to the company"
            image={Image1}
          />
          <Card
            name="STARBUCKS"
            description="Our ad campaign brought 80% footfall to the company"
            image={Image}
          />
        </div>
      </div>
    </>
  );
};

export default Ourwork;
