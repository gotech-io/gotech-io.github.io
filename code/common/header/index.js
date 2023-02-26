import Blobs from "../../screens/home/sections/header/components/blobs";
import React from "react";

const Header = ({ title, description }) => {
  return (
    <div className="page-common-header">
      <Blobs />

      <div className="w-container w-padding">
        <div className="page-common-block">
          <h2 className="page-common-title">{title}</h2>
          <p className="page-common-description text-description-header">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
