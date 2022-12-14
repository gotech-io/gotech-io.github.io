import Blobs from "./components/blobs";
import React from "react";
import animations from "../../../../../assets/js/animations";

const HomeHeader = ({ title, sub_title, description, button }) => {
  return (
    <div className="home-header">
      <Blobs orangeSize={1300} greenSize={1100} />

      <div className="home-header-main">
        <div className="page-common-block">
          <di className="home-header-main-content">
            <h1 data-aos={animations.up} data-aos-delay="100">
              {title}
            </h1>

            <h2 data-aos={animations.up} data-aos-delay="250">
              {sub_title}
            </h2>

            <p data-aos={animations.up} data-aos-delay="250">
              {description}
            </p>
          </di>
          {button}
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
