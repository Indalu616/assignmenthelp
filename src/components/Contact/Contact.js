import React from "react";
import "./Contact.css";
import Form from "react-bootstrap/Form";
import Lottie from "lottie-react";
import email from "./Email.json";
import call from "./CallUs.json";
import location from "./Location.json";
import whattsapp from "./Whattsapp.json";
function Contact() {
  return (
    <div className="container-fluid pt-4" id="contact">
      <div className="container">
        <h3 className="text-center dark-color mt-3">
          Con<span className="border-bottom border-warning">tact</span> us
        </h3>
        <p className="text-center dark-color mt-3 mb-3">
          Any Questions or remarks? just write us a message!
        </p>
        <div className="form-container">
          <Form>
            <div className="row">
              <div className="col-md-6 mb-3">
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label className="dark-color">Email:</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
              </div>
              <div className="col-md-6 mb-3">
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label className="dark-color">Name:</Form.Label>
                  <Form.Control type="text" placeholder="Your name" />
                </Form.Group>
              </div>
            </div>
            <Form.Group className="mb-3" controlId="message">
              <Form.Label className="dark-color">Message:</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
          <div className="contact-btn-send">
            <button className="btn rounded text-center text-uppercase text-white">
              Send us message
            </button>
          </div>
        </div>
      </div>

      {/* location and address section */}
      <div className="location-address">
        <div className="location-wrapper">
          <div className="container">
            <div className="row address-container">
              <div className="col">
                <div>
                  <Lottie
                    animationData={email}
                    loop={true}
                    className="address-icon"
                  />
                </div>
                <div>
                  <p>Email us</p>
                  <p>Endalukalbesa511@gmail.com</p>
                </div>
              </div>
              <div className="col">
                <div>
                  <Lottie
                    animationData={call}
                    loop={true}
                    className="address-icon"
                  />
                </div>
                <div>
                  <p>Phone</p>
                  <p>+971509223870</p>
                </div>
              </div>
              <div className="col">
                <div>
                  <Lottie
                    animationData={location}
                    loop={true}
                    className="address-icon"
                  />
                </div>
                <div>
                  <p>Our Location</p>
                  <p>Abu Dhabi, UAE</p>
                </div>
              </div>

              <div className="col">
                <div>
                  <Lottie
                    animationData={whattsapp}
                    loop={true}
                    className="address-icon"
                  />
                </div>
                <div>
                  <p>Join Our Whattsapp Group</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
