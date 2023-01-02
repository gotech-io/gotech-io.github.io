import CircleDiagramServicesItem from "./circleDiagramServicesItem";
import React from "react";

function CircleDiagramServices({ services }) {
  return (
    <div className="circle-diagram-services">
      <div className="circle-diagram-services-circle"> </div>
      <div>
        {services.length &&
          services.map(({ f, s }) => {
            return (
              <div key={f} className="circle-diagram-services-rotate-wrapper">
                <CircleDiagramServicesItem
                  icon={f.icon}
                  link={f.link}
                  color={f.color}
                />
                <CircleDiagramServicesItem
                  icon={s.icon}
                  link={s.link}
                  color={s.color}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default CircleDiagramServices;
