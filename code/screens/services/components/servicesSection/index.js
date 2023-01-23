import GreyBox from "../../../../common/greyBox";
import React from "react";
import animations from "../../../../../assets/js/animations";
import { ICONS } from "../../../../../assets/js/common/icons";

const ServicesSection = ({ services }) => {
  return (
    <div className="page-common-block">
      <div className="service-wrapper">
        {services.length &&
          services.map(({ title, description, image }) => {
            return (
              <div
                className="services-content-wrapper"
                key={title}
                data-aos-anchor-placement="top"
                data-aos={animations.zoomIn}
              >
                <GreyBox
                  title={title}
                  description={description}
                  image={image}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ServicesSection;
