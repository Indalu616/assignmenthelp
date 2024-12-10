import React, { useState } from "react";
import "./SignInSignUp.css";
import sing3 from "../../Images/sign-3-bg-removed.png";
import PrivateNav from "../PivateNav/PrivateNav";
function SignUp() {
  const [signin, setSignIn] = useState(false);
  const loadSigINPage = () => {
    setSignIn(true);
  };
  const loadSignUpPage = () => {
    setSignIn(false);
  };
  return (
    <>
      <PrivateNav />
      <div className="container sign-up-page">
        <div className="row">
          <div className="col-lg-7 col-md-6 sign-up-image-container">
            <div className="sign-up-image-section">
              <img
                src={sing3}
                alt="tablet-holding-lady"
                className="sig-up-img"
              ></img>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 form-section">
            {!signin ? (
              <p className="sign-up-p">
                <span className="border-bottom border-warning">Sign</span> up
              </p>
            ) : (
              <p className="sign-up-p">
                <span className="border-bottom border-warning">Sign</span> in
              </p>
            )}

            <div className="sign-up-form-section">
              {!signin ? (
                <div className="mb-3">
                  <label for="name" className="form-label dark-color">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Name..."
                  />
                </div>
              ) : (
                ""
              )}
              <div className="mb-3">
                <label for="email" className="form-label dark-color">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com..."
                />
              </div>
              {!signin ? (
                <div className="mb-3">
                  <label for="phone" className="form-label dark-color">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="+971..."
                  />
                </div>
              ) : (
                ""
              )}
              <div className="mb-3">
                <label for="password" className="form-label dark-color">
                  Password
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="password"
                  placeholder="*******..."
                />
              </div>
            </div>
            <div className="sign-up-btn">
              <button className="btn btn-rounded border-warning me-3 dark-color sign-btn">
                {!signin ? "Sign Up" : "Sign in"}
              </button>
              {!signin ? (
                <button className="btn  text-warning" onClick={loadSigINPage}>
                  <span className="border-bottom border-warning">Sign</span> in
                </button>
              ) : (
                <button className="btn  text-warning" onClick={loadSignUpPage}>
                  <span className="border-bottom border-warning">Sign</span> Up
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
