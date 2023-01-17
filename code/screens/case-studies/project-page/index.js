import DetailsSection from "../components/detailsSection";
import PageWrapper from "../../../common/pageWrapper";
import Parallax from "../../../common/parallax";
import React from "react";
import Steps from "../../../common/steps";
import { PROJECTS_INFO } from "../../../../assets/js/common/case-studies-projects";
import { SECTIONS } from "../../../../assets/js/common/sections";

function PageProject({ type, marquee, contact, _relativeURL, _ID }) {
  const { title, description, sections, steps, images, introduction } =
    PROJECTS_INFO[type];

  const { main, parallax } = images;

  const subjects = [
    {
      type: SECTIONS.BETA,
      content: <DetailsSection main={main} introduction={introduction} />,
    },
    {
      type: SECTIONS.GAMMA,
      content: <Steps steps={steps} />,
    },
    {
      type: SECTIONS.EPSILON,
      content: <Parallax src={parallax.src} alt={parallax.alt} />,
    },
  ];

  return (
    <div className="project-page">
      <PageWrapper
        title={title}
        description={description}
        sections={sections}
        subjects={subjects}
        marquee={marquee}
        contact={contact}
        _relativeURL={_relativeURL}
        _ID={_ID}
      />
    </div>
  );
}

export default PageProject;
