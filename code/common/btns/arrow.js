import React from "react";
import { ICONS } from "../../../assets/js/common/icons";

function ArrowButton({ link, textBtn, color }) {
  return (
    <div className="button-arrow-wrapper">
      <a href={link}>
        {textBtn}
        <div className={`button-arrow-wrapper-icon ${color}`}>
          <i className={ICONS.ARROW_R}></i>
        </div>
      </a>
    </div>
  );
}

export default ArrowButton;
