import React from "react";
import animations from "../../../../../assets/js/animations";

function LisItem({ folderName, title, active }) {
  return active ? (
    <li className="careers-list-item" data-aos={animations.up}>
      <a href={`/careers/${folderName}`}>
        <h4> {title}</h4>

        <aside className="careers-list-item-arrow" />
      </a>
    </li>
  ) : null;
}

export default LisItem;
