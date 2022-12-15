import ColorSection from "../../../common/ColorSection";
import Header from "../../../common/header";
import IntroductionSection from "../components/introductionSection";
import Mockup from "../../../common/mockup";
import Parallax from "../../../common/parallax";
import React from "react";
import Steps from "../../../common/steps";
import { PROJECTS_INFO } from "../../../../assets/js/common/case-studies-projects";
import { COLORS } from "../../../../assets/js/common/colors";
import { handleUrl } from "../../../utils";

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

  return (
    <div>
      <Header title={title} description={description} />
      <ColorSection
        color={COLORS.GREEN}
        title={client.title}
        paragraphs={client.paragraphs}
      />

      <div className="page-common-block">
        <div className="page-common-content">
          <div className="main-wrapper-image">
            <Mockup image={main} />
          </div>
          <IntroductionSection introduction={introduction} />
        </div>
      </div>

      <ColorSection
        color={COLORS.GRAY}
        title={challenge.title}
        description={challenge.description}
      >
        <Steps steps={challenge.steps} />
      </ColorSection>

      <ColorSection
        color={COLORS.GREEN}
        title={solution.title}
        paragraphs={solution.paragraphs}
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
