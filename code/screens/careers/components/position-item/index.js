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
        <lottie-player
          src={src}
          background="transparent"
          style={{
            width: "50px",
            height: "50px",
            margin: "0 auto",
          }}
          speed="0.5"
          loop
          autoplay
        ></lottie-player>
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
