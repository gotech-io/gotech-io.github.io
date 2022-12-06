import React from "react";

const Points = ({ points }) => {
  return (
    <div className="points">
      <div className="points-item-line" />
      <div className="page-common-block points-wrapper">
        {points.length &&
          points.map((point, i) => {
            return (
              <div key={i} className="points-item">
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
