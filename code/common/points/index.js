import React from "react";
import animations from "../../../assets/js/animations";

const Points = ({ points }) => {
  return (
    <div className="points">
      <div className="points-item-line" />
      <div className="page-common-block points-wrapper">
        {points.length &&
          points.map((point, i) => {
            return (
              <div
                key={i}
                className="points-item"
                data-aos-anchor-placement="top-center"
                data-aos={animations.zoomIn}
              >
                <div className="points-item-number">{point.count}</div>
                <div className="points-item-dot" />
                <p>{point.title}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Points;
