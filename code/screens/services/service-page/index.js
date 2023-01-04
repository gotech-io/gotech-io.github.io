import Left from "../../case-studies/components/left";
import PageWrapper from "../../../common/pageWrapper";
import React from "react";
import ServicesSection from "../components/servicesSection";
import StagesCycle from "../../../common/stages-cycle";
import Technologies from "../../../common/technologies";
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

  return (
    <PageWrapper
      title={title}
      description={description}
      sections={sections}
      alpha={<ServicesSection color={mainColor} services={services} />}
      beta={<StagesCycle stages={stages} />}
      delta={<Technologies technologies={technologies} />}
      zeta={example && <Left type={example} />}
      marquee={marquee}
      contact={contact}
      _relativeURL={_relativeURL}
      _ID={_ID}
    />
  );
}

export default ServicePage;
