import ArrowButton from "../../../../common/btns/arrow";
import React from "react";
import animations from "../../../../../assets/js/animations";
import { ICONS } from "../../../../../assets/js/common/icons";
import { SERVICES } from "../../../../../assets/js/common/services/content";

const textBtn = "more";

const ItemServices = ({ entity }) => {
  const { title, details, url, color } = SERVICES[entity];
  // return (
  //   <div className="services-content-item-info">
  // <div className={`services-content-item-type ${color}`}>
  //   <i className={ICONS[entity]} />
  // </div>

  //     <div className="services-content-item-info-block">
  //       <h6>{title}</h6>
  //       <p>{details}</p>
  //     </div>

  //     <div className="services-content-item-info-btn">
  //       <ArrowButton link={url} textBtn={textBtn} color={color} />
  //     </div>
  //   </div>
  // );
  return (
    <div>
      <div className="services-list-item-icon">
        <i className={ICONS[entity]} />
      </div>
      <div className="services-list-item-title">
        <h5>{title}</h5>
      </div>
      <div className="services-list-item-details">{details}</div>
    </div>
  );
};

export default ItemServices;
