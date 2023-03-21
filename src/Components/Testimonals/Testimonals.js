import React from "react";
import "./Testimonals.css";
import Image from "../../assets/Ellipse-25.png";
const Testimonals = () => {
  return (
    <div className="testimonals">
      <p className="heading__testimonals">Testimonals</p>

      <div className="info__testimonals">
        <div className="info_mini">
          <img src={Image} className="info_mini_img" alt="Testimonals" />
          <p className="info_mini_para">“Working with Extensive is great” </p>
        </div>

        <div className="info_sign">
          <div className="line"></div>
          <div className="sign">
            <p className="sign1">Hershel</p>
            <p className="sign2">Head of director GGPL PVT LTD.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonals;
