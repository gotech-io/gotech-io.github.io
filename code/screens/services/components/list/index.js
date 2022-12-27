import React from "react";
import animations from "../../../../../assets/js/animations";

const ListServices = ({ services }) => {
  return (
    <div className="services-content">
      {services.length &&
        services.map((service) => {
          return (
            <div
              key={service.type}
              className="services-content-item"
              data-aos-anchor-placement="top-center"
              data-aos={animations.zoomIn}
            >
              {service}
            </div>
          );
        })}
    </div>
  );
};

export default ListServices;
