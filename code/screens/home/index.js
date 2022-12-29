import CircleDiagram from "../../common/circleDiagram";
import React from "react";
import animations from "../../../assets/js/animations";
import { COLORS } from "../../../assets/js/common/colors";
import { ICONS } from "../../../assets/js/common/icons";
import { handleUrl } from "../../utils";

const content = {
  title: "GoTech Group Provides",
  description:
    "State-of-the-art services, including highly qualified experts in all areas of infrastructure and development. Our services include Web Development, Mobile Development, DevOps, and QA Automation.",
  services: [
    {
      f: { icon: ICONS.WEB_DEV, color: "green" },
      s: { icon: ICONS.MOBILE_DEV, color: COLORS.BLUE },
    },
    {
      f: { icon: ICONS.DEVOPS_DEV, color: "orange" },
      s: { icon: ICONS.QA_DEV, color: "pink" },
    },
  ],
  technologies: [
    {
      f: "green",
      s: "pink",
    },
    {
      s: "blue",
      f: "purple",
    },
    {
      f: "orange",
      s: "prime",
    },
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
