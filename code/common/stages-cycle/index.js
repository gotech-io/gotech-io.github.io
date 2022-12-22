import React from "react";
import animations from "../../../assets/js/animations";

// const stages = [
//   { title: "Strategy", icon: "fa-solid fa-pencil" },
//   { title: "Design", icon: "fa-solid fa-wand-magic-sparkles" },
//   { title: "Develop", icon: "fa-solid fa-user-gear" },
//   { title: "Testing", icon: "fa-solid fa-bug" },
//   { title: "Launch", icon: "fa-solid fa-handshake" },
//   { title: "Support", icon: "fa-solid fa-headset" },
// ];

const stages = [
  { title: "medicine", color: "green", icon: "fa-solid fa-stethoscope" },
  { title: "education", color: "blue", icon: "fa-solid fa-graduation-cap" },
  { title: "shopping", color: "pink", icon: "fa-solid fa-bag-shopping" },
  { title: "cryptocurrency", color: "orange", icon: "fa-brands fa-bitcoin" },
  {
    title: "artificial intelligence",
    color: "purple",
    icon: "fa-solid fa-code-branch",
  },
  { title: "government", color: "prime", icon: "fa-solid fa-building-shield" },
];

const StagesCycle = () => {
  return (
    <div className="stages">
      <div className="stages-item-line" />
      <div className="page-common-block stages-wrapper">
        {stages.length &&
          stages.map((stage) => {
            const { title, color, icon } = stage;
            return (
              <div
                key={performance.now()}
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
