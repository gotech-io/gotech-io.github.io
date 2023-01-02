import React from "react";

function CircleDiagramExternalItem({ color }) {
  return (
    <div className="circle-diagram-external-wrapper">
      <div className={`circle-diagram-external-icons ${color}`}></div>
    </div>
  );
}

export default CircleDiagramExternalItem;
