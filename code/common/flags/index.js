import Flag from "../flag";
import React from "react";
import animations from "../../../assets/js/animations";

function Flags({ flags, activeType }) {
  return (
    <div className="clients-flags-wrapper">
      {flags.length &&
        flags.map(({ type, color, icon, link }) => {
          const isActive = activeType === type;
          return (
            <div
              key={type}
              data-aos-anchor-placement="top"
              data-aos={animations.zoomIn}
            >
              <a href={link}>
                <Flag icon={icon} color={color} isActive={isActive} />
              </a>
            </div>
          );
        })}
    </div>
  );
}

export default Flags;
