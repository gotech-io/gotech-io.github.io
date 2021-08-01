import React from "react";
import animations from "../../../../../assets/js/animations";
import Tags from "../../../../common/tags";

function LisItem({ folderName, title, tags }) {
  return (
    <li className="careers-list-item" data-aos={animations.up}>
      <a href={`/careers/${folderName}`}>
        <h4> {title}</h4>

        <Tags tags={tags} />

        <aside className="careers-list-item-arrow" />
      </a>
    </li>
  );
}

export default LisItem;
