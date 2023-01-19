import React from "react";
import animations from "../../../../../assets/js/animations";
import { TEAMS } from "../../../../../assets/js/common/teams";

const Team = ({ list, _body, title }) => {
  return (
    <div className="home-team section">
      <div className="section-header" data-aos={animations.up}>
        <h5 className="section-title">{title}</h5>
        {/* <section className="section-body">{_body}</section> */}
        {/* <ListMembers teams={TEAMS} /> */}
      </div>
      <aside className="indicator" id="team"></aside>
      <div className="home-team-list">{list}</div>
    </div>
  );
};

export default Team;
