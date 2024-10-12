import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import BrandLogo from "../../assets/BrandLogo.png";
import filterIcon from "../../assets/filter-icon.png";
import { useState } from "react";

const Navbar = ({ itemCount }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <nav className="navbar container">
      <div className="firstNav">
        <div>
          <ul className="different-pages">
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
            <li>
              We deliver nationwide from{" "}
              <span style={{ color: "black", fontWeight: "bold" }}>
                7:00 to 23:00
              </span>
            </li>
          </ul>
        </div>
        <div>
          <ul className="Lang-OrdTrack">
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
        <ul className="second-nav">
          <li>
            <NavLink to="/" className="logo">
              <img src={BrandLogo} alt="Logo" className="brand-logo" />
            </NavLink>
          </li>
          <li className="location">
            <i className="bi bi-geo-alt icon-location"></i>
            <p>
              Deliver to <span className="nig">Nigeria</span>
            </p>
          </li>
          <li>
            <div className="search-input-wrapper">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search..."
                className="search-input"
              />
              <i class="bi bi-search search-icon"></i>
            </div>
          </li>
          <li className="filter-section">
            <img src={filterIcon} alt="" className="filter-icon" />
            <select className="filter-dropdown">
              <option value="" disabled selected hidden className="filter-word">
                Filter
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </li>
          <li>
            <button className="cart-button">
              <i class="bi bi-cart-dash cart-icon"></i>
              {itemCount > 0 && <span className="badge">{itemCount}</span>}
            </button>
          </li>
          <li className="signin-user">
            <i class="bi bi-person icon-location"></i>
            <p>Sign In</p>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
