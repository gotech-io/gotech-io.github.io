import React from "react";
import animations from "../../../assets/js/animations";

const StagesCycle = ({ stages }) => {
  return (
    <div className="stages">
      <div className="stages-item-line" />
      <div className="page-common-block stages-wrapper">
        {stages.length &&
          stages.map((stage) => {
            const { title, icon, color } = stage;
            return (
              <div
                key={title}
                className="stages-item"
                data-aos-anchor-placement="top-center"
                data-aos={animations.zoomIn}
              >
                <div
                  className="stages-item-wrapper"
                  data-aos={animations.zoomIn}
                >
                  <div className={`stages-item-wrapper-dot ${color}`}>
                    <i className={icon}></i>
                  </div>
                </div>
                <p>{title}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default StagesCycle;
