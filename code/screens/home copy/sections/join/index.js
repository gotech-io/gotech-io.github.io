import React from "react";
import animations from "../../../../../assets/js/animations";

const Join = ({ _body, animation, socials }) => {
  return (
    <div className="home-join">
      <div className="home-join-flex">
        <div
          className="home-join-animation"
          data-aos={animations.up}
          data-aos-anchor-placement="center-bottom"
        >
          {animation}
        </div>
        <div
          className="home-join-content"
          data-aos={animations.up}
          data-aos-anchor-placement="center-bottom"
        >
          {_body}
          {socials}
        </div>
      </div>
    </div>
  );
};

export default Join;
