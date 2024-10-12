import React from "react";
import "./Navbar.css"
import { NavLink } from "react-router-dom";
import BrandLogo from "../../assets/BrandLogo.png";
import filterIcon from "../../assets/filter-icon.png";

const Navbar = ({ itemCount }) => {
  return (
    <nav className="navbar">
      <div>
        <div>
          <ul>
            <li>
              <NavLink to="/About">About</NavLink>
            </li>
            <li>
              <NavLink to="/Wishlist">Wishlist</NavLink>
            </li>
            <li>
              <NavLink to="/acaount">My account</NavLink>
            </li>
            <li>
              <NavLink to="contacts">Contact</NavLink>
            </li>
            <li>We deliver nationwide from 7:00 to 23:00</li>
          </ul>
        </div>
        <div>
          <ul>
            <li class="dropdown-container">
              <select id="language-select" className="lang-dropdown">
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="zh">Chinese</option>
              </select>
            </li>
            <li>Order Tracking</li>
          </ul>
        </div>
      </div>
      <div>
        <ul>
          <li>
            <NavLink to="/" className="logo">
              <img src={BrandLogo} alt="Logo" />
              Poskina
            </NavLink>
          </li>
          <li>
            <i class="bi bi-geo-alt"></i>Deliver to Nigeria
          </li>
          <li>
            {" "}
            <input
              type="text"
              className="search-input"
              placeholder="Search for products, categories or brand..."
            />
            <button className="search-button">
              <i class="bi bi-search"></i>
            </button>
          </li>
          <li>
            <select id="product-select" className="prod-filter-dropdown">
              <option value="en">Shoes</option>
              <option value="es">Clothes</option>
              <option value="fr">Bags</option>
              <option value="de">Bags</option>
            </select>
          </li>
          <li>
            <button className="cart-button">
              <img src={filterIcon} alt="" className="cart-icon"/>
              {itemCount > 0 && <span className="badge">{itemCount}</span>}
            </button>
          </li>
          <li>
            Sign In
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;