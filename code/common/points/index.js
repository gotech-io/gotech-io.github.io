import React from "react";
import animations from "../../../assets/js/animations";

const Points = ({ points }) => {
  return (
    <div className="points">
      <div className="points-item-line" />
      <div className="page-common-block points-wrapper">
        {points.length &&
          points.map(({ title, count }) => {
            return (
              <div
                key={title}
                className="points-item"
                data-aos-anchor-placement="top-center"
                data-aos={animations.zoomIn}
              >
                <div className="points-item-number">{count}</div>
                <div className="points-item-dot" />
                <p>{title}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Points;
