import React from "react";

function GreyBoxIcon({ image }) {
  return (
    <div className="grey-box-image">
      <div className="grey-box-image-bg">
        <img
          src={"/assets/images/common/service-circle.png"}
          alt="grey-box-image"
        />
      </div>
      <div className="grey-box-image-icon">
        <img src={image} alt="grey-box-image" />
      </div>
    </div>
  );
}

export default GreyBoxIcon;
