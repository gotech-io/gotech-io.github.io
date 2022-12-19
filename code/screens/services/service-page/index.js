import ColorSection from "../../../common/ColorSection";
import PageWrapper from "../../../common/pageWrapper";
import React from "react";
import StagesCycle from "../../../common/stages-cycle";
import TechnologySection from "../components/technologySection";
import { SERVICES } from "../../../../assets/js/common/services/content";

function ServicePage({ entity, marquee, contact, _relativeURL, _ID }) {
  const { title, description, sections, services } = SERVICES[entity];
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
        sections.map(({ type, color, paragraphs }) => {
          return (
            <div key={type}>
              <ColorSection
                color={color}
                paragraphs={paragraphs}
              ></ColorSection>

              {type === "section-first" && <StagesCycle />}

              {type === "section-second" && (
                <TechnologySection services={services} />
              )}
            </div>
          );
        })}
    </PageWrapper>
  );
}

export default ServicePage;
