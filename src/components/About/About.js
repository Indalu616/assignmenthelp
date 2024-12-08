import React from "react";
import "./About.css";
import aboutImg from "../../Images/about-img.avif";
import Lottie from "lottie-react";
import success from "./Success.json";
import Register from "../Modal/Register";
function About() {
  return (
    <div className="container-fluid mt-4" id="about">
      <p className="text-center mb-3 about-p">
        Ab<span className="border-bottom border-warning">out </span>us
      </p>
      <h2 className="text-center about-h2 mb-3">Explore more about us</h2>
      <div className="container about-main">
        <div className="row">
          <div className="col-md-6 about-left-section p-3">
            <div className="img-section">
              <img
                src={aboutImg}
                alt="about"
                style={{ width: "100%" }}
                className="rounded img-fluid"
              ></img>
            </div>
          </div>
          <div className="col-md-6 about-right-section p-3">
            <div>
              <h4 className="dark-color mb-3">Your Success, Our Passion</h4>
              <p className="dark-color  about-section-p">
                We are a team of academic enthusiasts and professionals driven
                by the mission to empower students with top-notch assignment
                help. Our expertise spans diverse fields, ensuring unmatched
                quality and precision.
              </p>
              {/* our uniqueness */}
              <div className="row">
                <div className="col-1">
                  <button className="btn rounded p-2 icon-rapper">
                    <Lottie
                      animationData={success}
                      loop={true}
                      className="about-icon"
                    />
                  </button>
                </div>
                <div className="col-11 ps-4">
                  <p className="dark-color p-2">
                    Our team members have secured 'A' grades in the very
                    subjects we guide you in.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-1">
                  <button className="btn rounded p-2 icon-rapper">
                    <Lottie
                      animationData={success}
                      loop={true}
                      className="about-icon"
                    />
                  </button>
                </div>
                <div className="col-11 ps-4">
                  <p className="dark-color p-2">
                    Personalized solutions that align perfectly with your
                    academic needs.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-1">
                  <button className=" btn rounded p-2 icon-rapper">
                    <Lottie
                      animationData={success}
                      loop={true}
                      className="about-icon"
                    />
                  </button>
                </div>
                <div className="col-11 ps-4">
                  <p className="dark-color p-2">
                    We respect your time and always deliver on schedule.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* join us section */}
      <div className="containe-fluid join-us">
        <div className="container join-us-content">
          <div className="row p-5">
            <div className="col-md-6">
              <p className="text-white join-p">We are spreading Day by Day</p>
              <h2 className="text-warning join-h2">Join Our Community</h2>
              <p className="text-white join-p">
                With every assignment, we aim to build your confidence and
                understanding, equipping you with the tools for lifelong
                success.
              </p>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-cente">
              <Register className="btn rounded border-warning join-btn register-btn"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
