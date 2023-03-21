import React from "react";
import "./Card.css";
const Card = (product) => {
  return (
    <>
      <div className="productCard">
        <img className="product_img" src={product.image} alt={product.name} />
        <p className="product_name">{product.name}</p>
        <span className="product_desc">{product.description}</span>
      </div>
    </>
  );
};

export default Card;
