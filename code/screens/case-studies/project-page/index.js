import DetailsProject from "../components/detailsProject";
import PageWrapper from "../../../common/pageWrapper";
import Parallax from "../../../common/parallax";
import React from "react";
import Steps from "../../../common/steps";
import { PROJECTS_INFO } from "../../../../assets/js/common/case-studies-projects";
import { COLORS } from "../../../../assets/js/common/colors";

export const TYPES = {
  CLIENT: "client",
  CHALLENGE: "challenge",
  SOLUTION: "solution",
};

function ProjectPage({ type, marquee, contact, _relativeURL, _ID }) {
  const {
    title,
    description,
    sections,
    steps,
    //----
    //images,
    // client,
    // challenge,
    // solution,
    // introduction,
  } = PROJECTS_INFO[type];
  //const { main, parallax } = images;

  // const details = [
  //   { type: TYPES.CLIENT, content: client, color: COLORS.GREEN },
  //   { type: TYPES.CHALLENGE, content: challenge, color: COLORS.GRAY },
  //   { type: TYPES.SOLUTION, content: solution, color: COLORS.GREEN },
  // ];

  return (
    <PageWrapper
      title={title}
      description={description}
      sections={sections}
      // alpha={<ServicesSection color={mainColor} services={services} />}
      // beta={<StagesCycle stages={stages} />}
      gamma={<Steps steps={steps} />}
      marquee={marquee}
      contact={contact}
      _relativeURL={_relativeURL}
      _ID={_ID}
    >
      {/* <DetailsProject
        details={details}
        introduction={introduction}
        main={main}
      />

      <Parallax src={parallax.src} alt={parallax.alt} /> */}
    </PageWrapper>
  );
}

export default ProjectPage;
