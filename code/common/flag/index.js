import React from "react";
import { ICONS } from "../../../assets/js/common/icons";

function Flag({ icon, color }) {
  return (
    <div className={`flags ${color}`}>
      <i className={ICONS[icon]} />
    </div>
  );
}

export default Flag;
