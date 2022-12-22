import React from "react";
import animations from "../../../assets/js/animations";

const Diagram = () => {
  return (
    <div className="diagram">
      <div className="diagram-dot">
        <div className="diagram-dot-item" />
        <div className="diagram-dot-item" />
      </div>

      <div
        className="diagram-circle"
        data-aos-anchor-placement="top-center"
        data-aos={animations.zoomIn}
      >
        <div className="diagram-circle-item">client</div>
        <div className="diagram-circle-item">product</div>
        <div className="diagram-circle-item">gotech</div>
      </div>
    </div>
  );
};

export default Diagram;
