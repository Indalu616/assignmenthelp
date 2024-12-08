import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./Register.css";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Register() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const notify = () => toast("Registered successfully!");
  return (
    <>
      <Button
        onClick={handleShow}
        className="btn rounded border-warning  register-btn"
      >
        Register Now
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="dark-color">
            Welcome to <span className="text-warning">Expert</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label className="dark-color">Full name</Form.Label>
              <Form.Control type="text" placeholder="Your name here..." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="phone">
              <Form.Label className="dark-color">Phone Number</Form.Label>
              <Form.Control type="text" placeholder="phone number here..." />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className="submit-btn border-warning" onClick={notify}>
            Submit
          </Button>
          <ToastContainer />
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Register;
