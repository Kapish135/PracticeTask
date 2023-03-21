import React from "react";
import { Facebook } from "@mui/icons-material";
import { Instagram } from "@mui/icons-material";
import { Twitter } from "@mui/icons-material";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer__part1">
        <p className="part1_content">
          Looking to drive results?{" "}
          <span className="mini_part1">Lets Chat</span>
        </p>
      </div>

      <div className="Footer__part2">
        <div className="Footer_logo">
          <p className="logo_text">Logo</p>
        </div>
        <div className="Footer_options">
          <div className="options">
            <p className="options_text">Home page</p>
            <p className="options_text">About us</p>
            <p className="options_text">Book audit</p>
            <p className="options_text">Our services</p>
            <p className="options_text">Contact us</p>
            <p className="options_text">Blogs</p>
          </div>
          <div className="copyright">
            <p className="copyright_text">Copyright@2023</p>
          </div>
        </div>
        <div className="Footer_social">
          <Instagram sx={{ color: "white" }} />
          <Facebook sx={{ color: "white" }} />
          <Twitter sx={{ color: "white" }} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
