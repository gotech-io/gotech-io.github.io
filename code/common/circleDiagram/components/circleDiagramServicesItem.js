import React from "react";

function CircleDiagramServicesItem({ icon, link, color }) {
  return (
    <div className="circle-diagram-services-wrapper">
      <a href={link} className={`circle-diagram-services-icons ${color}`}>
        <i className={icon}></i>
      </a>
    </div>
  );
}

export default CircleDiagramServicesItem;
