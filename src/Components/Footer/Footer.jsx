import React from "react";
import "./Footer.css";
import BrandLogo from "../../assets/BrandLogo.png";
import AppStore from "../../assets/appstore.png";
import GooglePlay from "../../assets/googleplay.png";

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
          </div>
        </div>
        <div class="upper-row last-row">
          <div class="upper-item">
            <h5 className="up-item-sec-row-heading">Help</h5>
          </div>
        </div>
      </div>

      {/* <hr class="footer-separator"> */}

      <div class="lower-footer">
        <div class="lower-item">Lower Item 1</div>
        <div class="lower-item">Lower Item 2</div>
        <div class="lower-item">Lower Item 3</div>
      </div>
    </footer>
  );
};

export default Footer;
