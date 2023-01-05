import ListProjects from "./components/listProjects";
import PageWrapper from "../../common/pageWrapper";
import React from "react";
import { CASE_STUDIES_DETAILS } from "../../../assets/js/common/case-studies-details";

function CaseStudies({ marquee, contact, _relativeURL, _ID }) {
  const { title, description, sections } = CASE_STUDIES_DETAILS;

  return (
    <PageWrapper
      title={title}
      description={description}
      sections={sections}
      alpha={<ListProjects />}
      marquee={marquee}
      contact={contact}
      _relativeURL={_relativeURL}
      _ID={_ID}
    />
  );
}

export default CaseStudies;
