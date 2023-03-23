import React from "react";
import Card from "../Card/Card";
import { useEffect } from "react";
import "./Ourwork.css";
import Image from "../../assets/Rectangle-55.png";
import Image1 from "../../assets/Rectangle-56.png";
import { Button } from "@mui/material";
const Ourwork = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  });
  return (
    <>
      <div className="header__ourwork">
        <p className="main__heading">OUR WORK</p>

        {width > 450 ? (
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FF6E6C",
              marginLeft: "3.5%",
              marginBottom: "30px",
              width: "20%",
              height: "5%",
            }}
          >
            View ALL
          </Button>
        ) : null}
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
          {width <= 450 ? (
            <button className="ourwork_button">View all</button>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Ourwork;
