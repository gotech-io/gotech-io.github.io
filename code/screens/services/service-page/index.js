import Left from "../../case-studies/components/left";
import PageWrapper from "../../../common/pageWrapper";
import React from "react";
import ServicesSection from "../components/servicesSection";
import StagesCycle from "../../../common/stages-cycle";
import Technologies from "../../../common/technologies";
import { SECTIONS } from "../../../../assets/js/common/sections";
import { SERVICES } from "../../../../assets/js/common/services/content";

function ServicePage({ entity, marquee, contact, _relativeURL, _ID }) {
  const {
    title,
    description,
    color,
    sections,
    stages,
    services,
    technologies,
    example,
  } = SERVICES[entity];

  const mainColor = color;

  const subjects = [
    {
      type: SECTIONS.BETA,
      content: <ServicesSection color={mainColor} services={services} />,
    },
    {
      type: SECTIONS.DELTA,
      content: <StagesCycle stages={stages} />,
    },
    {
      type: SECTIONS.EPSILON,
      content: <Technologies technologies={technologies} />,
    },
    {
      type: SECTIONS.ZETA,
      content: <Left type={example} />,
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

export default ServicePage;
