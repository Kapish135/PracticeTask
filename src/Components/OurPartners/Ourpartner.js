import React from "react";
import { Pinterest } from "@mui/icons-material";
import "./Ourpartner.css";

const Ourpartner = () => {
  return (
    <>
      <p className="heading__ourpartner">Our Partners.</p>
      <p className="p_ourpartner">Your success is our success</p>

      <div className="showcase_partners">
        {new Array(10).fill().map((comp, index) => (
          <div className="icons_ourpartner" key={index}>
            <Pinterest sx={{ width: "50px", height: "50px" }} />
            <p className="text">Pinterest</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Ourpartner;
