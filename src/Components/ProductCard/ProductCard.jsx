import React from "react";
import PropTypes from 'prop-types';
import { useState } from "react";
import "./ProductCard.css"

const ProductCard = ({ product, style, bgcolor}) => {
    const [liked, setLiked] = useState(false);

    const handleLikeClick = () => {
        setLiked(!liked);
    };

    return (
        <div className="product-card">
            <div className="card-image-section">
                <img src={product.image} alt={product.name} className="product-image" />
                <span className="discount-badge">{product.discount}%</span>
                <button className={`like-button ${liked ? 'liked' : ''}`} onClick={handleLikeClick}>
                <i className="bi bi-heart-fill"></i>
                </button>
            </div>
            <div className="card-info-section" style={style}>
                <p className="product-name">{product.name}</p>
                <p className="product-description">{product.description}</p>
                <h3 className="product-price">${product.price}</h3>
                <button className="add-to-cart-button"  style={bgcolor}>
                <i className="bi bi-plus"></i>
                </button>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,  // title should be a string and is required
    style: PropTypes.object.isRequired,  // title should be a string and is required
    bgcolor: PropTypes.object.isRequired,  // title should be a string and is required
  };
  

export default ProductCard;