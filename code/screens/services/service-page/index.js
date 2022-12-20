import ColorSection from "../../../common/ColorSection";
import PageWrapper from "../../../common/pageWrapper";
import React from "react";
import StagesCycle from "../../../common/stages-cycle";
import TechnologySection from "../components/technologySection";
import { COLORS } from "../../../../assets/js/common/colors";
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
              <ColorSection color={color} paragraphs={paragraphs}>
                {type === "section-first" && (
                  <div className="service-wrapper">
                    {services.length &&
                      services.map(({ title, description }) => {
                        return (
                          <div key={title} className="service-wrapper-detail">
                            <div>
                              <h5>{title}</h5>
                              <p>{description}</p>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                )}
              </ColorSection>

              {type === "section-first" && <StagesCycle />}

              {
                type === "section-second" && "TechnologySection"
                // <TechnologySection services={services} />
              }
              {
                type === "section-third" && "TechnologySection"
                // <TechnologySection services={services} />
              }
            </div>
          );
        })}
    </PageWrapper>
  );
}

export default ServicePage;
