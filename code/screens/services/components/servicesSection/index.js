import React from "react";
import animations from "../../../../../assets/js/animations";
import { ICONS } from "../../../../../assets/js/common/icons";

const ServicesSection = ({ color, services }) => {
  return (
    <div className="page-common-block">
      <div className="service-wrapper">
        {services.length &&
          services.map(({ icon, title, description }) => {
            return (
              <div
                key={title}
                className="service-wrapper-detail"
                data-aos-anchor-placement="top-center"
                data-aos={animations.zoomInUp}
              >
                <div>
                  <div className={`services-content-item-type ${color}`}>
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
