import React from "react";
import { ICONS } from "../../../assets/js/common/icons";

function BlobButton({ link, btnText }) {
  return (
    <div className="button-blob">
      <a href={link}>
        <div className="button-blob-circle" />
        <p>
          {btnText}
          <i className={ICONS.ARROW_R}></i>
        </p>
      </a>
    </div>
  );
}

export default BlobButton;
