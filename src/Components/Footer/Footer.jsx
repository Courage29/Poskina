import React from "react";
import "./Footer.css";
import BrandLogo from "../../assets/BrandLogo.png";
import AppStore from "../../assets/appstore.png";
import GooglePlay from "../../assets/googleplay.png";
import Visa from "../../assets/visapayment.png";
import AmericanExpress from "../../assets/americanexpress.png";
import MasterCard from "../../assets/mastercard.png";
import Stripe from "../../assets/stripe.png";
import Paypal from "../../assets/paypal.png";
import ApplePay from "../../assets/applepay.png";
import Facebook from "../../assets/facebook.png";
import Twitter from "../../assets/twitter.png";
import Instagram from "../../assets/instagram.png";
import Linkedln from "../../assets/linkedln.png";

const Footer = () => {
  return (
    <footer class="footer container">
      <div class="upper-footer">
        <div class="upper-row first-row">
          <div class="upper-item">
            <img src={BrandLogo} alt="Brand" />
            <p className="shortBizIntro size-font">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br></br>
              Doloribus rem saepe dolorem quasi ea! Soluta magnam <br></br>
              aperiam maiores commodi, nostrum deleniti doloremque<br></br>
            </p>
          </div>
          <div class="upper-item">
            <h4>Join Our Newsletter</h4>
            <p className="RegLetter size-font">
              Register now to get latest updates on promotions & discounts
            </p>
            <div class="email-form">
              <div class="input-container">
                <span class="icon-envelope">
                  <i class="bi bi-envelope"></i>
                </span>
                <input type="email" placeholder="Enter your email" required />
                <button type="submit">Send</button>
              </div>
            </div>
          </div>
        </div>
        <div class="upper-row second-row">
          <div class="upper-item distant-item">
            <h5 className="up-item-sec-row-heading">Download Our App</h5>
            <div className="app">
              <img src={GooglePlay} alt="" />
              <img src={AppStore} alt="" />
            </div>
          </div>
          <div class="upper-item">
            <h5 className="up-item-sec-row-heading">Contact Us</h5>
            <p className="size-font">
              <a href="mailto:youremail@example.com">
                {" "}
                <span className="up-item-sec-row-text-icon">
                  <i class="bi bi-envelope"></i>
                </span>
                support@email.com
              </a>
            </p>
            <p className="size-font up-item-sec-row-text">
              <a href="tel:+1234567890">
                <span className="up-item-sec-row-text-icon">
                  <i class="bi bi-telephone"></i>
                </span>
                +234 234 567 890
              </a>
            </p>
            <p className="size-font up-item-sec-row-text">
              <span className="up-item-sec-row-text-icon">
                <i class="bi bi-alarm"></i>
              </span>
              Mon-Fri: 7AM - 11PM (GMT +1:00)
            </p>
          </div>
          <div class="upper-item">
            <h5 className="up-item-sec-row-heading">About Us</h5>
            <div className="up-item-sec-row-buttons">
              <button>Delivery Process</button>
              <button>Category</button>
              <button>How We Work</button>
            </div>
          </div>
          <div class="upper-item">
            <h5 className="up-item-sec-row-heading">How to Buy</h5>
            <div className="up-item-sec-row-buttons">
              <button>Make Payments</button>
              <button>Delivery Options</button>
              <button>Buyer Protection</button>
            </div>
          </div>
          <div class="upper-item">
            <h5 className="up-item-sec-row-heading">Help</h5>
            <div className="up-item-sec-row-buttons">
              <button>Contact Us</button>
              <button>FAQ</button>
              <button>Privacy Policy</button>
            </div>
          </div>
        </div>
        <div class="upper-row last-row">
          <div class="upper-item">
            <span>
              <img src={Visa} alt="Visa" />
            </span>
            <span>
              <img src={AmericanExpress} alt="AmericanExpress" />
            </span>
            <span>
              <img src={MasterCard} alt="MasterCard" />
            </span>
            <span>
              <img src={Stripe} alt="Stripe" />
            </span>
            <span>
              <img src={Paypal} alt="Paypal" />
            </span>
            <span>
              <img src={ApplePay} alt="ApplePay" />
            </span>
          </div>
        </div>
      </div>

      <div className="footer-separator"></div>

      <div class="lower-footer">
        <div class="lower-item">
          <p className="lower-item-color">Follow us on social media:</p>
          <div className="social-links">
            <a href="">
              <img src={Facebook} alt="" />
            </a>
            <a href="">
              <img src={Twitter} alt="" />
            </a>
            <a href="">
              <img src={Instagram} alt="" />
            </a>
            <a href="">
              <img src={Linkedln} alt="" />
            </a>
          </div>
        </div>
        <div class="lower-item">
          <p className="lower-item-color">@Copyright 2024 Poskina. All rights reserved</p>
        </div>
        <div class="lower-item lower-item-color">
          <a href="" className="lower-item-third-column-link">Terms and Condition</a>
          <a href="" className="lower-item-third-column-link mid-link">Privacy Policy</a>
          <a href="" className="lower-item-third-column-link">Order Tracking</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
