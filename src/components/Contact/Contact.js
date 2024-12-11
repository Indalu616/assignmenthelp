import React, { useState } from "react";
import "./Contact.css";
import { APPI_KEY } from "../../WebForm";
import { ToastContainer, toast } from "react-toastify";
import { MdOutlineAddIcCall } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
function Contact() {
  const [result, setResult] = useState("");
  const notify = () => toast.success(result);
  const onSubmit = async (event) => {
    event.preventDefault();
    console.log("invoked");
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", APPI_KEY);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      console.log(data);
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
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
          <form onSubmit={onSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="mb-3" controlId="email">
                  <label className="dark-color">Email:</label>
                  <input
                    className="form-control"
                    type="email"
                    placeholder="name@example.com"
                    name="email"
                    style={{ backgroundColor: "#E8F0FE" }}
                  />
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="mb-3" controlId="name">
                  <label className="dark-color">Name:</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Your name"
                    name="name"
                    style={{ backgroundColor: "#E8F0FE" }}
                  />
                </div>
              </div>
            </div>
            <div className="mb-3" controlId="message">
              <label className="dark-color">Message:</label>
              <textarea
                className="form-control"
                as="textarea"
                rows="3"
                name="message"
                style={{ backgroundColor: "#E8F0FE" }}
              />
            </div>
            <div className="contact-btn-send">
              <button
                className="btn rounded text-center text-uppercase dark-color border-warning send-btn"
                type="submit"
                onClick={notify}
              >
                Send us message
              </button>
            </div>
            <ToastContainer />
          </form>
        </div>
      </div>

      {/* location and address section */}
      <div className="location-address">
        <div className="location-wrapper">
          <div className="container">
            <div className="row address-container">
              <div className="col">
                <div>
                  <TfiEmail className="address-icon" />
                </div>
                <div>
                  <p>Email us</p>
                  <p>Endalukalbesa511@gmail.com</p>
                </div>
              </div>
              <div className="col">
                <div>
                  <MdOutlineAddIcCall className="address-icon" />
                </div>
                <div>
                  <p>Phone</p>
                  <p>+971509223870</p>
                </div>
              </div>
              <div className="col">
                <div>
                  <FaLocationDot className="address-icon" />
                </div>
                <div>
                  <p>Our Location</p>
                  <p>Abu Dhabi, UAE</p>
                </div>
              </div>

              <div className="col">
                <div>
                  <FaWhatsapp className="address-icon" />
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
