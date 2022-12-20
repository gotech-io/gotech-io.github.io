import React from "react";

const ServicesSection = ({ services }) => {
  return (
    <div className="page-common-block">
      <div className="service-wrapper">
        {services.length &&
          services.map(({ title, description }) => {
            return (
              <div key={title} className="service-wrapper-detail">
                <div>
                  <h5>{title}</h5>
                  <p>{description}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ServicesSection;
