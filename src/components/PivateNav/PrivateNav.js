import React from "react";
import "../Navbar/Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Link} from "react-router"
function PrivateNav() {
  return (
    <Navbar expand="lg" className="nav-home">
      <Container>
        <Navbar.Brand href="#home" className="brand-logo">
          Expert.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/assignmenthelp" className="text-white nav-links">
              Home
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PrivateNav;
