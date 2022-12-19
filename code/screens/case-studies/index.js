import ColorSection from "../../common/ColorSection";
import PageWrapper from "../../common/pageWrapper";
import React from "react";
import { COLORS } from "../../../assets/js/common/colors";

const isEmpty = "Right now we don't have a new examples for you!";

function CaseStudies({
  title,
  description,
  projects,
  marquee,
  contact,
  _relativeURL,
  _ID,
}) {
  return (
    <PageWrapper
      title={title}
      description={description}
      marquee={marquee}
      contact={contact}
      _relativeURL={_relativeURL}
      _ID={_ID}
    >
      {projects.length ? (
        projects.map((project) => {
          return <div key={project.key}>{project}</div>;
        })
      ) : (
        <ColorSection color={COLORS.GREEN} title={isEmpty} />
      )}
    </PageWrapper>
  );
}

export default CaseStudies;
