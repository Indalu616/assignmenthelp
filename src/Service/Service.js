import React from "react";
import "./Service.css";
import Lottie from "lottie-react";
import animi from "./Service.json";
import code from "./Coding.json";
import tutor from "./Tutor.json";
function Service() {
  return (
    <div className="container mb-3 service" id="service">
      <p className="text-center mt-3" style={{ color: "#f4faffd2" }}>
        Our <span className="border-bottom border-warning">services</span>
      </p>
      <h2 className="text-center mb-3 mt-3  text-white service-h2">
        Our Top Services
      </h2>
      <p
        className="text-center m-auto  "
        style={{ width: "70%", color: " #f4faffd2" }}
      >
        To inspire students to achieve their academic dreams by transforming
        learning challenges into opportunities for growth and success.
      </p>
      <div className="row our-service">
        <div className="col service-box">
          <div className="icon-section">
            <Lottie
              animationData={tutor}
              loop={true}
              className="service-icon"
            />
          </div>
          <div className="content">
            <h5 className="text-center mb-3">Academic Tutoring</h5>
            <p className="text-center service-p">
              Empowering students to conquer academic challenges with
              personalized guidance that ignites curiosity and builds confidence
              to excel in every subject
            </p>
          </div>
        </div>
        <div className="col service-box">
          <div className="icon-section">
            <Lottie
              animationData={animi}
              loop={true}
              className="service-icon"
            />
          </div>
          <div className="content">
            <h5 className="text-center mb-3">Assignment Help</h5>
            <p className=" text-center service-p">
              Transforming your toughest assignments into success stories with
              expert assistance, ensuring precision, quality, and on-time
              delivery every time
            </p>
          </div>
        </div>
        <div className="col service-box">
          <div className="icon-section">
            <Lottie animationData={code} loop={true} className="service-icon" />
          </div>
          <div className="content">
            <h5 className="text-center mb-3">Programming Lessons</h5>
            <p className="text-center service-p">
              Unlock the power of coding with hands-on programming lessons
              tailored to turn beginners into creators and ideas into innovation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
