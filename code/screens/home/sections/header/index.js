import Blobs from "./components/blobs";
import React from "react";
import animations from "../../../../../assets/js/animations";

const HomeHeader = ({ title, subTitle, description, button }) => {
  return (
    <div className="home-header">
      <Blobs />

      <div className="home-header-main">
        <div>
          <div className="home-header-main-content">
            <h1 data-aos={animations.up} data-aos-delay="100">
              {title}
            </h1>

            <h2 data-aos={animations.up} data-aos-delay="250">
              {subTitle}
            </h2>

            <p data-aos={animations.up} data-aos-delay="250">
              {description}
            </p>
          </div>
          {button}
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
