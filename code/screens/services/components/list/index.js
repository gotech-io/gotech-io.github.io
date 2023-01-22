import GreyBox from "../../../../common/greyBox";
import React from "react";
import animations from "../../../../../assets/js/animations";
import { ICONS } from "../../../../../assets/js/common/icons";

const ListServices = ({ services }) => {
  return (
    <div className="page-common-block services-content">
      {services.length &&
        services.map((service) => {
          return (
            <div
              className="services-content-wrapper"
              key={service.type}
              data-aos-anchor-placement="top"
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
