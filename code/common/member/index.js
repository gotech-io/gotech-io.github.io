import React from "react";
import animations from "../../../assets/js/animations";

const Member = ({ name, position, image, linkedin }) => {
  return (
    <div className="team-member-wrapper">
      <div className="team-member-image">
        <img src={image} alt="client images" />
      </div>
      <div
        className="team-member-content"
        data-aos={animations.up}
        data-aos-delay="150"
      >
        <div>
          <h6>{name}</h6>
          <p>{position}</p>
        </div>
        <a href={linkedin} target="_blank">
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
};

export default Member;
