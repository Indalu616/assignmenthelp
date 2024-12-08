import React from "react";
import "./Testimonial.css";
import Carousel from "react-bootstrap/Carousel";
import { Testimonials } from "./TestimonialList";
function Testimonial() {
  return (
    <div className="container testimonial" id="testimonial">
      <p className="text-center dark-color mb-3">
        Test<span className="border-bottom border-warning">imoni</span>al
      </p>
      <h2 className="text-center dark-color mb-3">What Our Clients Say</h2>
      <Carousel>
        {Testimonials.map((testimony) => {
          return(
          <Carousel.Item key={testimony.id}>
            <div className="row">
              <div className="col-md-3">
                <div className="user-img">
                  <img
                    src={testimony.url}
                    alt="user"
                    className="img-fluid"
                  ></img>
                </div>
              </div>
              <div className="col-md-9">
                <div className="user-testimony pt-3">
                  <p className="mt-3 dark-color ">{testimony.content}</p>
                  <h5 className="dark-color user-name mt-3">{testimony.name}</h5>
                  <h5 className="dark-color user-role">{testimony.role}</h5>
                </div>
              </div>
            </div>
          </Carousel.Item>)
        })}
      </Carousel>
    </div>
  );
}

export default Testimonial;
