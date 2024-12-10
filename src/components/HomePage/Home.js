import React from "react";
import NavbarApp from "../Navbar/NavbarApp";
import Header from "../Header/Header";
import About from "../About/About";
import Service from "../../Service/Service";
import HowItWorks from "../HowItWorks/HowItWorks";
import Team from "../Teams/Team";
import Testimonial from "../Testimonial/Testimonial";
import Contact from "../Contact/Contact";
function Home() {
  return (
    <>
      <NavbarApp />
      <Header />
      <About />
      <Service />
      <HowItWorks />
      <Team />
      <Testimonial />
      <Contact />
    </>
  );
}

export default Home;
