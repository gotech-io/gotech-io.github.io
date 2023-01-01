import CircleDiagram from "../../common/circleDiagram";
import Clients from "./components/clients";
import ColorSection from "../../common/ColorSection";
import React from "react";
import animations from "../../../assets/js/animations";
import { COLORS } from "../../../assets/js/common/colors";
import { ICONS } from "../../../assets/js/common/icons";
import { MAIN_PAGE_DETAILS } from "../../../assets/js/common/main-page";
import { handleUrl } from "../../utils";

const content = {
  title: "GoTech Group Provides",
  description:
    "State-of-the-art services, including highly qualified experts in all areas of infrastructure and development. Our services include Web Development, Mobile Development, DevOps, and QA Automation.",
  services: [
    {
      f: { icon: ICONS.WEB_DEV, link: "/services/web", color: COLORS.GREEN },
      s: {
        icon: ICONS.MOBILE_DEV,
        link: "/services/mobile",
        color: COLORS.BLUE,
      },
    },
    {
      f: {
        icon: ICONS.DEVOPS_DEV,
        link: "/services/devops",
        color: COLORS.ORANGE,
      },
      s: { icon: ICONS.QA_DEV, link: "/services/qa", color: COLORS.PINK },
    },
  ],
  technologies: [
    {
      f: "purple",
      s: "orange",
    },
    {
      f: "prime",
      s: "green",
    },
    {
      f: "pink",
      s: "blue",
    },
  ],
};

const Home = ({ header, navbar, contact, _relativeURL, _ID }) => {
  const { sections } = MAIN_PAGE_DETAILS;

  return (
    <div className="home" data-aos={animations.up}>
      {navbar}
      {header}
      <div className="home-screens">
        <lottie-player
          src="https://lottie.host/9c8c0b1e-2283-419e-a35e-c8dd8c3c5869/cqIf494w5p.json"
          background="transparent"
          speed="1"
          style={{ width: "100%", height: "100%" }}
          loop
          autoplay
        ></lottie-player>
      </div>
      {sections.length &&
        sections.map(({ type, color, title, description }) => {
          return (
            <ColorSection
              key={type}
              color={color}
              title={title}
              description={description}
            >
              {type === "section-gamma" && <CircleDiagram content={content} />}
              {type === "section-epsilon" && <Clients />}
            </ColorSection>
          );
        })}

      <div className="page-common-sub-section">{contact}</div>

      <script
        type="module"
        src={handleUrl(`/assets/js/home/index.js`, _relativeURL, _ID)}
      />
    </div>
  );
};

export default Home;
