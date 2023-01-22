import React from "react";
import Teams from "../../../../common/teams";
import animations from "../../../../../assets/js/animations";

const HomePageTeams = ({ title, list, _body }) => {
  return (
    <div className="home-team section">
      <div className="section-header" data-aos={animations.up}>
        <h5 className="section-title">{title}</h5>
        <section className="section-body">{_body}</section>
      </div>
      <aside className="indicator" id="team"></aside>
      {list}
    </div>
  );
};

export default HomePageTeams;
