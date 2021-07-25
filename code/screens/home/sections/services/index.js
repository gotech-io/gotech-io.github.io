import React from "react";
import animations from "../../../../../assets/js/animations";

const Services = ({ services, title, _body }) => {
  return (
    <div className="home-services section" id="services">
      <div className="home-services-header">
        <h3 className="home-services-title" data-aos={animations.up}>
          {title}
        </h3>
        <div data-aos={animations.up} data-aos-delay="100">
          {_body}
        </div>
      </div>
      <div
        className="home-services-list flex-between"
        data-aos={animations.zoomIn}
        data-aos-delay="200"
      >
        {services}
      </div>
    </div>
  );
};

export default Services;
