import Link from "../../../../common/btns/link";
import React from "react";
import animations from "../../../../../assets/js/animations";

const PositionItem = ({ option }) => {
  const { title, src, location } = option;
  return (
    <div
      className="positions-item"
      data-aos-anchor-placement="top-center"
      data-aos={animations.zoomUp}
    >
      <div className="positions-item-content">
        <div className="positions-item-icon">
          <img src={src}></img>
        </div>
        <h6 className="positions-item-description">{title}</h6>
      </div>
      <div className="positions-item-content">
        <p className="positions-item-description">{location}</p>
        <Link btnText="apply" />
      </div>
    </div>
  );
};

export default PositionItem;
