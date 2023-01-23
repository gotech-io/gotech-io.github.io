import BlobButton from "../btns/blob";
import GreyBoxIcon from "../grey-box-icon";
import React from "react";
import Tags from "../tags";

const btnText = "See more";

function GreyBox({ title, description, icon, image, tags, link }) {
  return (
    <div className="grey-box">
      {icon && <i className={`grey-box-icon ${icon}`} />}
      {image && <GreyBoxIcon image={image} />}

      <h4>{title}</h4>
      <p className="grey-box-description">{description}</p>

      <div className="grey-box-wrapper">
        {tags && <Tags tags={tags} count="2" />}
        {link && <BlobButton link={link} btnText={btnText} />}
      </div>
    </div>
  );
}

export default GreyBox;
