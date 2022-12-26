import React from "react";

function Flag({ icon, color, isActive }) {
  return (
    <div className={`flags flags-${color}${isActive ? "-active" : ""}`}>
      <i className={icon} />
    </div>
  );
}

export default Flag;
