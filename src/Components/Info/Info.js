import React from "react";
import { Button } from "@mui/material";
import { useEffect } from "react";
import "./Info.css";
const Info = () => {
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
      <div className="header__info">
        <p className="p_tag">WHO WE ARE</p>
        <p className="info_heading">We are Extensive</p>
        <p className="info_para">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        {width > 450 ? (
          <Button
            variant="contained"
            sx={{
              marginLeft: "4%",
              backgroundColor: "#301E4E",
              padding: "10px",
            }}
          >
            BOOK A FREE MARKETING AUDIT
          </Button>
        ) : (
          <Button
            variant="contained"
            sx={{
              marginLeft: "5%",
              marginTop: "2%",
              backgroundColor: "#301E4E",
              fontSize: "11px",
              width: "70%",
            }}
          >
            Book A FREE MARKETING AUDIT
          </Button>
        )}
      </div>
    </>
  );
};

export default Info;
