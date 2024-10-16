import React from "react";
import { useState } from "react";
import "./FlippedProdCard.css"
import PropTypes from 'prop-types';

const FlippedProdCard = ({product}) => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };
  return (
    <div className="flipped-product-card">
      <div className="flippedcard-image-section">
        <img src={product.image} alt={product.name} className="flippedproduct-image" />
        <span className="flippeddiscount-badge">{product.discount}%</span>
        <button
          className={`like-button ${liked ? "liked" : ""}`}
          onClick={handleLikeClick}
        >
          <i className="bi bi-heart-fill"></i>
        </button>
      </div>
      <div className="flippedcard-info-section">
        <p className="flippedproduct-name">{product.name}</p>
        <h3 className="flippedproduct-price">${product.price}</h3>
        <p className="flippedproduct-description">{product.description}</p>
        <div className="separator-line"></div>
        <p className="flippedproduct-time-remaining">{product.timeRem}</p>
        <button className="flippedadd-to-cart-button">
          <i className="bi bi-plus"></i>
        </button>
      </div>
    </div>
  );
};
FlippedProdCard.propTypes = {
  product: PropTypes.object.isRequired,  // title should be a string and is required
};

export default FlippedProdCard;
