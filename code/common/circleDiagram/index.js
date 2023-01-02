import CircleDiagramExternal from "./components/circleDiagramExternal";
import CircleDiagramServices from "./components/circleDiagramServices";
import React from "react";
import { COLORS } from "../../../assets/js/common/colors";
import { ICONS } from "../../../assets/js/common/icons";

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
  externalsCircles: [
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

function CircleDiagram() {
  return (
    <div className="page-common-block">
      <div className="circle-diagram">
        <div className="circle-diagram-content">
          <div>
            <h4>{content.title}</h4>
            <p>{content.description}</p>
          </div>
        </div>

        <CircleDiagramServices services={content.services} />
        <CircleDiagramExternal externalsCircles={content.externalsCircles} />
      </div>
    </div>
  );
}

export default CircleDiagram;
