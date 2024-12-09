import React from "react";
import "./HowItWorks.css";
function HowItWorks() {
  return (
    <div className="container-fluid how-it-works" id="howWorks">
      <div className="container">
        <p className="text-center how-it-works-p">How it works</p>
        <h3 className="text-center how-it-works-h3">
          Simplifying Learning in 3 Easy Steps!
        </h3>
        <div className="row">
          {/* first */}
          <div className="col-lg-4 col-md-6">
            <div className="steps">
              <div className="text-center step"><span>01</span></div>
              <div>
                <h5 className="text-center step-title">Submit Your Request</h5>
                <p className="text-center dark-color">
                  Call us on
                  <span className="text-warning"> +971509223870 </span> and just
                  share the details of your assignment or project, including
                  deadlines and specific requirements, through our whattsapp
                  group.
                </p>
              </div>
            </div>
          </div>
          {/* second */}
          <div className="col-lg-4 col-md-6">
            <div className="steps">
              <div className="text-center step"><span>02</span></div>
              <div>
                <h5 className="text-center step-title">Get Matched</h5>
                <p className="text-center dark-color">
                  We connect you with the best-fit expert from our professional
                  team to ensure you receive tailored guidance and top-quality
                  work.
                </p>
              </div>
            </div>
          </div>
          {/* third */}
          <div className="col-lg-4 col-md-6">
            <div className="steps">
              <div className="text-center step"><span>03</span></div>
              <div>
                <h5 className="text-center step-title">Achieve Success</h5>
                <p className="text-center dark-color">
                  Receive your completed assignment on time, review it, and use
                  it to excel in your studies and achieve your academic goals!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
