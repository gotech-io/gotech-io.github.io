import React from "react";
import animations from "../../../../../assets/js/animations";
import Image from "../../../../common/img";
import { handleUrl } from "../../../../utils";

const HomeHeader = ({
  title,
  sub_title,
  _body,
  button,
  background,
  _relativeURL,
  _ID,
  toggle_animation,
}) => {
  return (
    <div className="home-header">
      <Image
        src={handleUrl(background, _relativeURL, _ID)}
        customClassName="home-header-background"
      />

      <div className="home-header-main flex-between">
        <section className="home-header-main-content">
          <h1 data-aos={animations.up} data-aos-delay="100">
            {title}
          </h1>
          <h2 data-aos={animations.up} data-aos-delay="250">
            {sub_title}
          </h2>
          <div data-aos={animations.up} data-aos-delay="400">
            {_body}
          </div>
          <span data-aos={animations.zoomIn} data-aos-delay="800">
            {button}
          </span>
        </section>
      </div>
      <a href="/#services">{toggle_animation}</a>
    </div>
  );
};

export default HomeHeader;
