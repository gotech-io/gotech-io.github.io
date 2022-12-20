import ColorSection from "../../../common/ColorSection";
import Left from "../../case-studies/components/left";
import PageWrapper from "../../../common/pageWrapper";
import React from "react";
import ServicesSection from "../components/servicesSection";
import StagesCycle from "../../../common/stages-cycle";
import Technologies from "../../../common/technologies";
import { SERVICES } from "../../../../assets/js/common/services/content";

function ServicePage({ entity, marquee, contact, _relativeURL, _ID }) {
  const { title, description, example, sections, services, technologies } =
    SERVICES[entity];
  return (
    <PageWrapper
      title={title}
      description={description}
      marquee={marquee}
      contact={contact}
      _relativeURL={_relativeURL}
      _ID={_ID}
    >
      {sections.length &&
        sections.map(({ type, color, title, description, paragraphs }) => {
          return (
            <div key={type} className="service">
              <ColorSection
                color={color}
                title={title}
                description={description}
                paragraphs={paragraphs}
              >
                {type === "section-alpha" && (
                  <ServicesSection services={services} />
                )}
                {type === "section-beta" && <StagesCycle />}
                {type === "section-delta" && (
                  <Technologies technologies={technologies} />
                )}
                {type === "section-zeta" && example && <Left type={example} />}
              </ColorSection>
            </div>
          );
        })}
    </PageWrapper>
  );
}

export default ServicePage;
