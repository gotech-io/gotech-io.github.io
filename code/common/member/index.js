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
        <div className="team-member-content-wrapper">
          <h6>{name}</h6>
          <a href={linkedin} target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>

        <p>{position}</p>
      </div>
    </div>
  );
};

export default Member;
