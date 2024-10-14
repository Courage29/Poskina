import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./Product.css";
import Leggings from "../../assets/leggings.png"
import EnduranceJacket from "../../assets/endurancejacket.png"
import GymBag from "../../assets/gymbag.png"
import SpeedRunnerShoes from "../../assets/speedrunnershoes.png"

const Product = ({ title, description }) => {
  const productList = [
    {
      id: 1,
      image: {Leggings},
      name: "Clothing",
      description: "PowerFit Leggings",
      price: 38000,
      discount: 10,
    },
    {
      id: 2,
      image: {EnduranceJacket},
      name: "Clothing",
      description: "Endurance Running Jacket",
      price: 28000,
      discount: 15,
    },
    {
      id: 3,
      image: {GymBag},
      name: "Bag",
      description: "Proflex Gym Bag",
      price: 18000,
      discount: 20,
    },
    {
      id: 4,
      image: {SpeedRunnerShoes},
      name: "Shoes",
      description: "Speed runner X Pro Shoes",
      price: 45500,
      discount: 25,
    },
  ];
  return (
    <div className="newProduct">
      <div className="productHeading">
        <p>
          <span className="title">{title}</span>
          {description}
        </p>
      </div>
      <div className="products-container">
        {productList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;
