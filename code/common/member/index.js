import Image from "../img";
import React from "react";
import animations from "../../../assets/js/animations";
import { handleUrl } from "../../utils";

const Member = ({ image, name, position, link, _relativeURL, _ID }) => {
  return (
    <div
      className="home-team-member"
      data-aos={animations.up}
      data-aos-duration="1000"
    >
      <Image src={handleUrl(image, _relativeURL, _ID)} />
      <div
        className="home-team-member-content"
        data-aos={animations.up}
        data-aos-delay="150"
      >
        <div className="home-team-member-content-header">
          <h6>{name}</h6>
          <a href={link} target="_blank">
            <i className="fa-brands fa-linkedin" />
          </a>
        </div>

        <p>{position}</p>
      </div>
    </div>
  );
};

export default Member;
