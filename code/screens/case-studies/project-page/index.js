import ColorSection from "../../../common/ColorSection";
import Header from "../../../common/header";
import Parallax from "../../../common/parallax";
import ProjectDetails from "../components/projectDetails";
import React from "react";
import Steps from "../../../common/steps";
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

      {details.length &&
        details.map(({ type, content, color }) => {
          return (
            <div key={type}>
              <ColorSection
                color={color}
                title={content.title}
                description={content.description}
                paragraphs={content.paragraphs}
              >
                {type === TYPES.CHALLENGE && <Steps steps={content.steps} />}
              </ColorSection>

              {type === TYPES.CLIENT && (
                <ProjectDetails main={main} introduction={introduction} />
              )}
            </div>
          );
        })}

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
