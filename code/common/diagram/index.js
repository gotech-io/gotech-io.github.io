import React from "react";
import animations from "../../../assets/js/animations";

const diagramCircle = [1, 2];
const diagramItems = ["client", "product", "gotech"];

const Diagram = () => {
  return (
    <div className="page-common-block diagram">
      <div className="diagram-dot">
        {diagramCircle.map((item) => {
          return <div key={item} className="diagram-dot-item" />;
        })}
      </div>

      <div
        className="diagram-circle"
        data-aos-anchor-placement="top-center"
        data-aos={animations.zoomIn}
      >
        {diagramItems.map((item) => {
          return (
            <div key={item} className="diagram-circle-item">
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Diagram;
