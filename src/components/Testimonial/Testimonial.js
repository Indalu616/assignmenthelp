import React from "react";
import "./Testimonial.css";
import { responsive, Testimonials } from "./TestimonialList";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function Testimonial() {
  return (
    <div className="container testimonial" id="testimonial">
      <p className="text-center dark-color mb-3">
        Test<span className="border-bottom border-warning">imoni</span>al
      </p>
      <h2 className="text-center dark-color mb-3">What Our Clients Say</h2>
      <Carousel responsive={responsive} infinite={true}  autoPlaySpeed={3000}  autoPlay={true}>
        {Testimonials.map((user) => {
          return (
            <div className="p-3" key={user.id}>
              <div className="img-part d-flex align-items-center justify-content-center mb-3">
                <img src={user.url} className="img-fluid user-img" alt="user" style={{width:"10rem"}}></img>
              </div>
              <div className="user-feedback">
                <p className="text-center dark-color">{user.content}</p>
                <h5 className="dark-color user-name mt-3 text-center">
                  {user.name}
                </h5>
                <h5 className="dark-color user-role text-center">
                  {user.role}
                </h5>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Testimonial;
