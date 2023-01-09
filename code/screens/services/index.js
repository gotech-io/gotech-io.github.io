import Diagram from "../../common/diagram";
import ListServices from "./components/list";
import PageWrapper from "../../common/pageWrapper";
import Points from "../../common/points";
import React from "react";
import { SECTIONS } from "../../../assets/js/common/sections";
import { PAGE_DETAILS } from "../../../assets/js/common/services";

function Services({ services, marquee, contact, _relativeURL, _ID }) {
  const { title, description, sections, points } = PAGE_DETAILS;

  const subjects = [
    {
      type: SECTIONS.BETA,
      content: <ListServices services={services} />,
    },
    {
      type: SECTIONS.DELTA,
      content: <Points points={points} />,
    },
    {
      type: SECTIONS.EPSILON,
      content: <Diagram />,
    },
  ];

  return (
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
  );
}

export default Services;
