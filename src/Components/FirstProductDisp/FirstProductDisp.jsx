import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from "../ProductCard/ProductCard";
import "../ProductStyling/ProductStyling.css";
import Leggings from "../../assets/leggings.png";
import EnduranceJacket from "../../assets/endurancejacket.png";
import GymBag from "../../assets/gymbag.png";
import SpeedRunnerShoes from "../../assets/speedrunnershoes.png";


const FirstProductDisp = ({ title, description }) => {
  const FirstProductList = [
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

  const CustomStyle = {
    backgroundColor: 'black',
    color: 'white'
  }
  const AddCartColor = {
    backgroundColor: '#6B7280'
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
        {FirstProductList.map((product) => (
          <ProductCard key={product.id} product={product} style={CustomStyle} bgcolor={AddCartColor}/>
        ))}
      </div>
    </div>
  );
};
// Defining PropTypes for the Product component
FirstProductDisp.propTypes = {
  title: PropTypes.string.isRequired,  // title should be a string and is required
  description: PropTypes.string.isRequired,  // description should be a string and is required
};

export default FirstProductDisp;
