import ColorSection from "../../../common/ColorSection";
import DetailsProject from "../components/detailsProject";
import Header from "../../../common/header";
import Parallax from "../../../common/parallax";
import React from "react";
import { PROJECTS_INFO } from "../../../../assets/js/common/case-studies-projects";
import { COLORS } from "../../../../assets/js/common/colors";
import { handleUrl } from "../../../utils";

export const TYPES = {
  CLIENT: "client",
  CHALLENGE: "challenge",
  SOLUTION: "solution",
};

function ProjectPage({ type, marquee, contact, _relativeURL, _ID }) {
  const {
    title,
    description,
    images,
    client,
    challenge,
    solution,
    introduction,
  } = PROJECTS_INFO[type];
  const { main, parallax } = images;

  const details = [
    { type: TYPES.CLIENT, content: client, color: COLORS.GREEN },
    { type: TYPES.CHALLENGE, content: challenge, color: COLORS.GRAY },
    { type: TYPES.SOLUTION, content: solution, color: COLORS.GREEN },
  ];

  return (
    <div>
      <Header title={title} description={description} />

      <DetailsProject
        details={details}
        introduction={introduction}
        main={main}
      />

      <Parallax src={parallax.src} alt={parallax.alt} />

      <div>{marquee}</div>
      <div className="page-common-sub-section">{contact}</div>

      <script
        type="module"
        src={handleUrl(`/assets/js/screens/about/index.js`, _relativeURL, _ID)}
      />
    </div>
  );
}

export default ProjectPage;
