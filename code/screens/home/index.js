import React from "react";
import animations from "../../../assets/js/animations";

const Home = ({
  header,
  services,
  clients,
  about,
  case_studies,
  join,
  team,
  contact,
  navbar,
}) => {
  return (
    <div className="home" data-aos={animations.up}>
      {navbar}
      {header}
      {services}
      {clients}
      {about}
      {case_studies}
      {join}
      {team}
      {contact}
    </div>
  );
};

export default Home;
