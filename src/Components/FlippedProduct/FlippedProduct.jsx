import React from "react";
import FlippedProdCard from "../FlippedProdCard/FlippedProdCard";
import "./FlippedProduct.css";
import Leggings from "../../assets/leggings.png"
import EnduranceJacket from "../../assets/endurancejacket.png"

const FlippedProduct = () => {
  const FlippedproductList = [
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
    }
  ];
  return (
      <div className="flippedproducts-container">
        {FlippedproductList.map((product) => (
          <FlippedProdCard key={product.id} product={product} />
        ))}
      </div>
  );
};

export default FlippedProduct;