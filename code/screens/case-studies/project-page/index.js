import DetailsSection from "../components/detailsSection";
import PageWrapper from "../../../common/pageWrapper";
import Parallax from "../../../common/parallax";
import React from "react";
import Steps from "../../../common/steps";
import { PROJECTS_INFO } from "../../../../assets/js/common/case-studies-projects";

function ProjectPage({ type, marquee, contact, _relativeURL, _ID }) {
  const { title, description, sections, steps, images, introduction } =
    PROJECTS_INFO[type];

  const { main, parallax } = images;

  return (
    <PageWrapper
      title={title}
      description={description}
      sections={sections}
      beta={<DetailsSection main={main} introduction={introduction} />}
      gamma={<Steps steps={steps} />}
      epsilon={<Parallax src={parallax.src} alt={parallax.alt} />}
      marquee={marquee}
      contact={contact}
      _relativeURL={_relativeURL}
      _ID={_ID}
    />
  );
}

export default ProjectPage;
