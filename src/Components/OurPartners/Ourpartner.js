import React, { useEffect } from "react";
import "./Ourpartner.css";
import data from "./Data";
import data1 from "./Data1";
const Ourpartner = () => {
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
      <div className="header__ourpartners">
        <p className="heading__ourpartner">Our Partners.</p>
        {width > 550 ? (
          <p className="p_ourpartner">Your success is our success</p>
        ) : (
          <p className="p_ourpartner">
            We do lots of stuffs , basically adding value to your product .
          </p>
        )}
        {width > 550 ? (
          <div className="showcase_partners">
            {data.map((item, index) => {
              return (
                <div className="icons_ourpartner" key={index}>
                  <div className="icon_image_container">
                    <img
                      src={item.src}
                      className="icon_image"
                      alt="icon_image"
                    />
                  </div>
                  <p className="text">{item.text}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="showcase_partners">
            {data1.map((item, index) => {
              return (
                <div className="icons_ourpartner" key={index}>
                  <div className="icon_image_container">
                    <img
                      src={item.src}
                      className="icon_image"
                      alt="icon_image"
                    />
                  </div>
                  <p className="text">{item.text}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Ourpartner;
