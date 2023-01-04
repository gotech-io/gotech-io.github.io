import Blobs from "../../screens/home/header/components/blobs";
import React from "react";

const BLOBS_SIZE = {
  ORANGE: 600,
  GREEN: 600,
};

const Header = ({ title, description }) => {
  return (
    <div className="page-common-header">
      <Blobs orangeSize={BLOBS_SIZE.ORANGE} greenSize={BLOBS_SIZE.GREEN} />

      <div className="page-common-block">
        <h2 className="page-common-title">{title}</h2>
        <p className="page-common-description text-description-header">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Header;
