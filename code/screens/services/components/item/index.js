import Link from "../../../../common/btns/link";
import React from "react";
import { ICONS } from "../../../../../assets/js/common/content/icons";
import { SERVICES } from "../../../../../assets/js/common/content/services";

const btnText = "read more";

const ItemServices = ({ entity }) => {
  const { title, details, url } = SERVICES[entity];
  return (
    <div className="services-content-item-info">
      <i className={ICONS[entity]} />

      <h6>{title}</h6>
      <p>{details}</p>
      <div className="services-content-item-info-btn">
        <Link url={url} btnText={btnText} />
      </div>
    </div>
  );
};

export default ItemServices;
