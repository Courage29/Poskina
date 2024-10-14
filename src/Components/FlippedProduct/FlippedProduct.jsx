import React from "react";
import FlippedProdCard from "../FlippedProdCard/FlippedProdCard";
import "./FlippedProduct.css";

const FlippedProduct = () => {
  const FlippedproductList = [
    {
      id: 1,
      image: '',
      name: "Clothing",
      description: "PowerFit Leggings lore",
      price: 38000,
      discount: 10,
      timeRem: '26/100 remaining',
    },
    {
      id: 2,
      image: '',
      name: "Clothing",
      description: "Endurance Running Jacket",
      price: 28000,
      discount: 15,
      timeRem: '12/184 remaining',
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