import Link from "../../../../common/btns/link";
import React from "react";
import { SERVICES } from "../../../../../assets/js/common/content/services";

const btnText = "read more";

const ItemServices = ({ type }) => {
  const { title, details, src, url } = SERVICES[type];
  return (
    <div className="services-content-item-info">
      <div className="services-content-item-info-img">
        <img src={src} alt="services" />
      </div>
      <h6>{title}</h6>
      <p>{details}</p>
      <div className="services-content-item-info-btn">
        <Link url={url} btnText={btnText} />
      </div>
    </div>
  );
};

export default ItemServices;
