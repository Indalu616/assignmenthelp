import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import NavbarApp from "./components/Navbar/NavbarApp";
import Team from "./components/Teams/Team";
import Testimonial from "./components/Testimonial/Testimonial";
import Service from "./Service/Service";
function App() {
  return (
    <div className="App">
      <NavbarApp />
      <Header />
      <About />
      <Service />
      <HowItWorks />
      <Team />
      <Testimonial />
      <Contact />
    </div>
  );
}

export default App;
