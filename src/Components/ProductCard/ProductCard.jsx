import React from "react";
import { useState } from "react";
import "./ProductCard.css"

const ProductCard = ({ product }) => {
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
                <i class="bi bi-heart-fill"></i>
                </button>
            </div>
            <div className="card-info-section">
                <p className="product-name">{product.name}</p>
                <p className="product-description">{product.description}</p>
                <h3 className="product-price">${product.price}</h3>
                <button className="add-to-cart-button">
                <i class="bi bi-plus"></i>
                </button>
            </div>
        </div>
    );
};

export default ProductCard;