import React from "react";
import "./Dashboard.css";
import dummy from "../../Images/dummy-removebg.png";
function Profile() {
  return (
    <div className="container profile">
      <div className="row">
        <div className="col-lg-3 user-img-section">
          <div className="user-img-box">
            <img src={dummy} alt="user" className="user-img"></img>
            <p className="text-center dark-color">User Name</p>
          </div>
        </div>
        <div className="col-lg-9 user-info-section">
          <div className="user-info-box">
            <div className="row">
              <h3 className="text-center dark-color profile-h3">
                Update and Personal Information
              </h3>
              <div className="col-lg-4">
                <div className="user-personal-info-box">
                  <p className="text-center">Full Name</p>
                  <p className="text-center">Indalu Kelbesa</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="user-personal-info-box">
                  <p className="text-center">Email</p>
                  <p className="text-center">endalukalbesa511@gmail.com</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="user-personal-info-box">
                  <p className="text-center">Project status</p>
                  <p className="text-center">No submission yet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
