import React from "react";
import { ICONS } from "../../../../../assets/js/common/services/icons";

const ServicesSection = ({ services }) => {
  return (
    <div className="page-common-block">
      <div className="service-wrapper">
        {services.length &&
          services.map(({ icon, title, description }) => {
            return (
              <div key={title} className="service-wrapper-detail">
                <div>
                  <div className="services-content-item-type">
                    <i className={ICONS[icon]} />
                  </div>
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
