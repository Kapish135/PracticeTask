import React, { useState } from "react";
import "./Navbar.css";
import Image from "../../assets/Rectangle-51.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
const Navbar = () => {
  const [toogle, setToogle] = useState(false);
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={Image} className="logo_image" alt="navimage" />
        </div>
        <div className="nav_options">
          <div className="menu">
            <ul>
              <li>
                <a href="/">Contact</a>
              </li>
              <li>
                <a href="/">Work</a>
              </li>
            </ul>
          </div>
          <div className="menu-icon" onClick={() => setToogle(true)}>
            <MenuIcon
              sx={{ color: "#301E4E", fontSize: "30px", marginTop: "5px" }}
            />
          </div>
        </div>
      </div>
      {toogle && (
        <div className="toogle-content">
          <div className="close-icon" onClick={() => setToogle(false)}>
            <CloseIcon
              sx={{ cursor: "pointer", marginTop: "9px", fontSize: "20px" }}
            />
          </div>
          <ul className="toogle-content-links">
            <li className="link-items">
              <a href="/">Services</a>
            </li>
            <li className="link-items">
              <a href="/">About us</a>
            </li>
            <li className="link-items">
              <a href="/">Blogs</a>
            </li>
            <li className="link-items">
              <a href="/">Contact us</a>
            </li>
          </ul>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#FF6E6C", marginLeft: "10%" }}
          >
            BOOK AN FREE MARKETING AUDIT
          </Button>
        </div>
      )}
    </>
  );
};

export default Navbar;
