import React from "react";
import animations from "../../../assets/js/animations";

const Technologies = ({ technologies }) => {
  return (
    <div className="page-common-block">
      <div className="technology">
        {technologies.length
          ? technologies.map(({ title, icon }) => {
              return (
                <div
                  key={title}
                  className="technology-item"
                  data-aos-anchor-placement="top-center"
                  data-aos={animations.zoomIn}
                >
                  <img src={icon} alt="technology" />
                  <p>{title}</p>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default Technologies;
