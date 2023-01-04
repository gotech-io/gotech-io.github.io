import Blobs from "./components/blobs";
import Link from "../../../common/btns/link";
import React from "react";
import animations from "../../../../assets/js/animations";

const BLOBS_SIZE = {
  ORANGE: 1300,
  GREEN: 1100,
};

const HomeHeader = ({ title, sub_title, description, url, btnText }) => {
  return (
    <div className="home-header">
      <Blobs orangeSize={BLOBS_SIZE.ORANGE} greenSize={BLOBS_SIZE.GREEN} />

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
          <Link url={url} btnText={btnText} />
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
