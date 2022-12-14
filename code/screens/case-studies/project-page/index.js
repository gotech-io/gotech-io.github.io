import ArrowButton from "../../../common/btns/arrow";
import ColorSection from "../../../common/ColorSection";
import Header from "../../../common/header";
import IntroduceItem from "../components/introduceItem";
import Parallax from "../../../common/parallax";
import React from "react";
import Steps from "../../../common/steps";
import Tags from "../../../common/tag";
import { COLORS } from "../../../../assets/js/common/colors";
import { PROJECTS_INFO } from "../../../../assets/js/common/content/case-studies-projects";
import { handleUrl } from "../../../utils";

const isEmpty = "Right now we don't have a description!";
const textBtn = "see all";

function ProjectPage({ type, marquee, contact, _relativeURL, _ID }) {
  const { title, description, images, client, challenge, solution, introduce } =
    PROJECTS_INFO[type];
  const { main, parallax } = images;

  return (
    <div>
      <Header title={title} description={description} />
      <ColorSection
        color={COLORS.GREEN}
        title={client.title}
        description={client.description}
      />

      <div className="page-common-block">
        <div className="page-common-content">
          <div className="main-wrapper">
            <div className="main-wrapper-image">
              <img src={main.src} alt={main.alt} />
            </div>
          </div>

          <div className="project-page-block">
            {introduce.length ? (
              introduce.map((intro, i) => {
                return (
                  <IntroduceItem
                    key={i}
                    title={intro.title}
                    description={intro.description || ""}
                  >
                    {intro.options && (
                      <div>
                        <Tags
                          tags={intro.options}
                          count={intro.options.length || 0}
                        />
                        {intro.link && (
                          <ArrowButton link={intro.link} textBtn={textBtn} />
                        )}
                      </div>
                    )}
                  </IntroduceItem>
                );
              })
            ) : (
              <ColorSection color={COLORS.GREEN} title={isEmpty} />
            )}
          </div>
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
        description={solution.description}
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
