import React from "react";
import animations from "../../../../../assets/js/animations";

const Team = ({ list, _body }) => {
  return (
    <div className="home-team section" id="team">
      <div className="home-team-content" data-aos={animations.up}>
        {_body}
      </div>
      <div className="home-team-list">{list}</div>
    </div>
  );
};

export default Team;
