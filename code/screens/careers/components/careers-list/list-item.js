import React from "react";
import animations from "../../../../../assets/js/animations";
import Tags from "../../../../common/tags";

function LisItem({ folderName, title, tags }) {
  return (
    <li className="careers-list-item" data-aos={animations.up}>
      <a className="careers-list-item-link" href={`/careers/${folderName}`}>
        {title}
      </a>
      <Tags tags={tags} />
      <a className="careers-list-item-arrow" href={`/careers/${folderName}`}>
        <aside />
      </a>
    </li>
  );
}

export default LisItem;
