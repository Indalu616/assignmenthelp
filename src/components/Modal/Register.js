import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Register.css";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
function Register() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button
        onClick={handleShow}
        className="btn rounded border-warning  register-btn"
      >
        Join Now
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="dark-color">
            <h5 className="text-center" style={{ color: "#D1A72B" }}>
              Connect with Us on Social Media!
            </h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <p className="dark-color">
              Stay updated and connected with us through our social media
              channels! Join our Telegram and WhatsApp communities to access the
              latest updates, helpful resources, and engage in meaningful
              discussions.
            </p>
            <h6 className="text-center" style={{ color: "#D1A72B" }}>
              Join our{" "}
              <span className="border-bottom border-warning">community</span>{" "}
              channel
            </h6>
            <div className="social">
              <a className="social-btn" href="https://t.me/+ZjDmQWCeI_0yMDFk">
                <FaTelegram className="social-icon text-white" />
              </a>
              <a
                className="social-btn"
                href="https://chat.whatsapp.com/H8XWrD2x9TNKC0rPCkZH22"
              >
                <FaWhatsapp className="social-icon text-white" />
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Register;
