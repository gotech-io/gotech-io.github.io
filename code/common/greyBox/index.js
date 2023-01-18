import BlobButton from "../btns/blob";
import React from "react";
import Tags from "../tags";

const btnText = "See more";

function GreyBox({ title, description, icon, tags, link }) {
  return (
    <div className="grey-box">
      {icon && <i className={`grey-box-icon ${icon}`} />}

      <h3>{title}</h3>
      <p className="grey-box-description">{description}</p>

      <div className="grey-box-wrapper">
        {tags && <Tags tags={tags} count="2" />}
        <BlobButton link={link} btnText={btnText} />
      </div>
    </div>
  );
}

export default GreyBox;
