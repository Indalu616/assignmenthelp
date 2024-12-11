import React from "react";
import "./Dashboard.css";
import DashboardNav from "./DashboardNav";
import Profile from "./Profile";
function Dashboard() {
  return (
    <div>
      <DashboardNav />
      <div className="container-fluid dashboard-header">
        <div className="container welcome-container">
          <h2 className="text-center mb-4">Welcome to Expert</h2>
          <Profile />
          <div className="file-upload-guidelines">
            <h3 className="text-center upload">Upload your Assignment</h3>
            <p className="text-center file-instruction">
              Please, be aware that you should upload in a pdf format only. If
              you have an assignement that can not be uploaded like homework
              from school platform, please contact us on whattsapp using
              <span className="text-warning border-bottom border-warning">
                +971509223870
              </span>
            </p>
            <div className="mb-3 text-center">
              <label htmlFor="assignment" className="form-label">
                Upload your file
              </label>
              <input
                type="file"
                className="form-control"
                id="assignment"
                placeholder="name@example.com"
              />
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <button className="btn text-center text-white rounded border-warning upload-btn">
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
