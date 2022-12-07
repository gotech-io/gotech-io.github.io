import React from "react";
import animations from "../../../assets/js/animations";

const stages = [
  { title: "Strategy", icon: "fa-solid fa-pencil" },
  { title: "Design", icon: "fa-solid fa-wand-magic-sparkles" },
  { title: "Develop", icon: "fa-solid fa-user-gear" },
  { title: "Testing", icon: "fa-solid fa-bug" },
  { title: "Launch", icon: "fa-solid fa-handshake" },
  { title: "Support", icon: "fa-solid fa-headset" },
];

const LifeCycle = () => {
  return (
    <div className="stages">
      <div className="stages-item-line" />
      <div className="page-common-block stages-wrapper">
        {stages.length &&
          stages.map((stage, i) => {
            const { title, icon } = stage;
            return (
              <div key={i} className="stages-item">
                <div
                  className="stages-item-wrapper"
                  data-aos={animations.zoomInDown}
                >
                  <div className="stages-item-wrapper-dot">
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

export default LifeCycle;
