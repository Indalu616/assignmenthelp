import React from "react";
import "./Header.css";
import tinyImg from "../../Images/tiny-img.png";
import Lottie from "lottie-react";
import animi from "./AniData.json";
import AnchorLink from "react-anchor-link-smooth-scroll";
function Header() {
  return (
    <div className="container-fluid header">
      <div className="header-over-lay rounded">
        <p className="header-p">Taste Our Quality Service</p>
        <h2 className="expert">
          Empowering{" "}
          <span className="border-bottom border-warning">Your Excel</span>lence!
        </h2>
        <p>
          Struggling with assignments? Unlock your potential with expert-crafted
          solutions designed to simplify complex subjects and guarantee academic
          excellence—your success starts here!
        </p>
        <div className="row display-flex align-items-center mt-3">
          <div className="col-md-6 mb-3">
            <button className="btn border rounded mb-2 border-warning contact-btn">
              <AnchorLink href="#contact" className="anchor-link dark-color">
                Contact us
              </AnchorLink>
            </button>
          </div>
          <div className="col-md-6 mb-3">
            <p className="dark-color call-icon mb-2">
              <span className="call me-3">
                <Lottie animationData={animi} loop={true} className="animi" />
              </span>
              <span className="phone">
                +9715<span className="border-bottom border-warning">09223</span>
                870
              </span>
            </p>
          </div>
        </div>
        <div className="tiny-img">
          <img src={tinyImg} alt="brand-tiny-image"></img>
        </div>
      </div>
    </div>
  );
}

export default Header;
