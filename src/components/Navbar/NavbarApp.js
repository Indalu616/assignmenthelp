import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
function NavbarApp() {
  const [id, setId] = useState("home");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 0 && window.scrollY < 500) {
        setId("home");
      } else if (window.scrollY >= 500 && window.scrollY < 1500) {
        setId("about");
      } else if (window.scrollY >= 1500 && window.scrollY < 2100) {
        setId("service");
      } else if (window.scrollY >=2100 && window.scrollY < 2700) {
        setId("howWorks");
      } else if (window.scrollY >= 2700&& window.scrollY < 3200) {
        setId("team");
      } else if(window.scrollY >= 3200&& window.scrollY < 3500){
        setId("testimonial");
      }
      else if (window.scrollY >= 3500) {
        setId("contact");
      }
    });
  });
  return (
    <Navbar expand="lg" className="nav-home">
      <Container>
        <Navbar.Brand href="#home" className="brand-logo">
          Expert.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                id === "home" ? "nav-links focused" : "text-white nav-links"
              }
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              className={
                id === "about" ? " nav-links focused" : "text-white nav-links"
              }
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#service"
              className={
                id === "service" ? "nav-links focused" : "text-white nav-links"
              }
            >
              Services
            </Nav.Link>
            <Nav.Link
              href="#howWorks"
              className={
                id === "howWorks" ? "nav-links focused" : "text-white nav-links"
              }
            >
              How it works
            </Nav.Link>
            <Nav.Link
              href="#team"
              className={
                id === "team" ? "nav-links focused" : "text-white nav-links"
              }
            >
             Teams
            </Nav.Link>
            <Nav.Link
              href="#testimonial"
              className={
                id === "testimonial"
                  ? "nav-links focused"
                  : "text-white nav-links"
              }
            >
              Testimonials
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={
                id === "contact" ? "nav-links focused" : "text-white nav-links"
              }
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarApp;
