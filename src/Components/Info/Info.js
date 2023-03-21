import React from "react";
import { Button } from "@mui/material";
import "./Info.css";
const Info = () => {
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
        <Button
          variant="contained"
          sx={{
            marginLeft: "5%",
            backgroundColor: "#301E4E",
          }}
        >
          BOOK A FREE MARKETING AUDIT
        </Button>
      </div>
    </>
  );
};

export default Info;
