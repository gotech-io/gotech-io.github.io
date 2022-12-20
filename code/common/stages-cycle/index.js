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

const StagesCycle = () => {
  return (
    <div className="stages-cycle">
      <div className="page-common-block">
        <h5>App Development Process</h5>
        <p>
          There is a long and complex process that starts with receiving a
          client’s request and finishes with developing an application and
          successfully launching it. Yet we apply the best methods and
          techniques to make this process run smoothly and to facilitate the
          efficiency of each of its stages.
        </p>
      </div>
      <div className="stages">
        <div className="stages-item-line" />
        <div className="page-common-block stages-wrapper">
          {stages.length &&
            stages.map((stage) => {
              const { title, icon } = stage;
              return (
                <div key={performance.now()} className="stages-item">
                  <div
                    className="stages-item-wrapper"
                    data-aos={animations.zoomIn}
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
    </div>
  );
};

export default StagesCycle;
