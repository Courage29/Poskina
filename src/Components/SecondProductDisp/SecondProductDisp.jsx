import React from "react";
import PropTypes from "prop-types";
import ProductCard from "../ProductCard/ProductCard";
import "../ProductStyling/ProductStyling.css";
import Leggings from "../../assets/leggings.png";
import EnduranceJacket from "../../assets/endurancejacket.png";
import GymBag from "../../assets/gymbag.png";
import SpeedRunnerShoes from "../../assets/speedrunnershoes.png";

const SecondProductDisp = ({ title, description }) => {
  const SecondproductList = [
    {
      id: 1,
      image: { Leggings },
      name: "shoes",
      description: "UltraCushion Running Shoes",
      price: 12500,
      discount: 10,
    },
    {
      id: 2,
      image: { EnduranceJacket },
      name: "shoes",
      description: "Nike Crossfit Trainers",
      price: 42000,
      discount: 15,
    },
    {
      id: 3,
      image: { GymBag },
      name: "shoes",
      description: "Nike Trail Running Shoes",
      price: 18000,
      discount: 20,
    },
    {
      id: 4,
      image: { SpeedRunnerShoes },
      name: "Shoes",
      description: "SwiftStride Slip-on Sneakers",
      price: 45500,
      discount: 25,
    },
  ];

  const SecCustomStyling = {
    backgroundColor: "white",
    color: "black",
  };
  const AddCartColor2 = {
    backgroundColor: 'black'
  }
  return (
    <div className="newProduct">
      <div className="productHeading">
        <p className="tit-des">
          <span className="title">{title}</span>
          {description}
        </p>
      </div>
      <div className="products-container">
        {SecondproductList.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            style={SecCustomStyling}
            bgcolor={AddCartColor2}
          />
        ))}
      </div>
    </div>
  );
};
// Defining PropTypes for the Product component
SecondProductDisp.propTypes = {
  title: PropTypes.string.isRequired, // title should be a string and is required
  description: PropTypes.string.isRequired, // description should be a string and is required
};

export default SecondProductDisp;
