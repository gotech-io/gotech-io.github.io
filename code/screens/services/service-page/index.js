import CaseStudyItem from "../../case-studies/components/case-study-item";
import PageWrapper from "../../../common/pageWrapper";
import React from "react";
import ServicesSection from "../components/services-section";
import StagesCycle from "../../../common/stages-cycle";
import Technologies from "../../../common/technologies";
import { SECTIONS } from "../../../../assets/js/common/sections";
import { SERVICES } from "../../../../assets/js/common/services/content";

function ServicePage({ entity, marquee, contact, _relativeURL, _ID }) {
  const {
    title,
    description,
    sections,
    stages,
    services,
    technologies,
    example,
  } = SERVICES[entity];

  const subjects = [
    {
      type: SECTIONS.ALPHA,
      content: <ServicesSection services={services} />,
    },
    {
      type: SECTIONS.BETA,
      content: <StagesCycle stages={stages} />,
    },
    {
      type: SECTIONS.DELTA,
      content: <Technologies technologies={technologies} />,
    },
    {
      type: SECTIONS.ZETA,
      content: <CaseStudyItem type={example} />,
    },
  ];

  return (
    <div className="service-page">
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

export default ServicePage;
