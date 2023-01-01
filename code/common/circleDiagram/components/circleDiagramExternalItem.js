import React from "react";

function CircleDiagramExternalItem({ color }) {
  return (
    <div className="circle-diagram-technologies-wrapper">
      <div className={`circle-diagram-technologies-icons ${color}`}></div>
    </div>
  );
}

export default CircleDiagramExternalItem;
