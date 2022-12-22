import ArrowButton from "../../../../common/btns/arrow";
import React from "react";
import { ICONS } from "../../../../../assets/js/common/icons";
import { SERVICES } from "../../../../../assets/js/common/services/content";

const textBtn = "read more";

const ItemServices = ({ entity }) => {
  const { title, details, url } = SERVICES[entity];
  return (
    <div className="services-content-item-info">
      <div className="services-content-item-type">
        <i className={ICONS[entity]} />
      </div>

      <h6>{title}</h6>
      <p>{details}</p>

      <div className="services-content-item-info-btn">
        <ArrowButton link={url} textBtn={textBtn} />
      </div>
    </div>
  );
};

export default ItemServices;
