import CircleDiagram from "../../common/circleDiagram";
import React from "react";
import animations from "../../../assets/js/animations";
import { ICONS } from "../../../assets/js/common/icons";
import { handleUrl } from "../../utils";

const content = {
  title: "GoTech Group Provides",
  description:
    "State-of-the-art services, including highly qualified experts in all areas of infrastructure and development. Our services include Web Development, Mobile Development, DevOps, and QA Automation.",
  services: [
    { f: ICONS.WEB_DEV, s: ICONS.MOBILE_DEV },
    { f: ICONS.DEVOPS_DEV, s: ICONS.QA_DEV },
  ],
  technologies: [
    { f: ICONS.NETWORK, s: ICONS.PIE },
    { f: ICONS.AWS, s: ICONS.DOCKER },
    { f: ICONS.SLACK, s: ICONS.STACK },
  ],
};

const Home = ({ header, navbar, _relativeURL, _ID }) => {
  return (
    <div className="home" data-aos={animations.up}>
      {navbar}
      {header}

      <CircleDiagram content={content} />

      <script
        type="module"
        src={handleUrl(`/assets/js/home/index.js`, _relativeURL, _ID)}
      />
    </div>
  );
};

export default Home;
