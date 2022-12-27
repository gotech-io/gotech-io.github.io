import ColorSection from "../../common/colorSection";
import PageWrapper from "../../common/pageWrapper";
import React from "react";
import Timeline from "./components/timeline";
import Video from "../../common/video";
import { ABOUT_US_DETAILS } from "../../../assets/js/common/about-us";
import { COLORS } from "../../../assets/js/common/colors";

function AboutUs({ marquee, contact, _relativeURL, _ID }) {
  const { title, description, sections, video } = ABOUT_US_DETAILS;

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
        sections.map(({ type, color, title, description }) => {
          return (
            <ColorSection
              key={type}
              color={color}
              title={title}
              description={description}
            >
              {type === "section-alpha" && <Timeline />}
              {type === "section-beta" && (
                <Video src={video.src} type={video.type} />
              )}
            </ColorSection>
          );
        })}
    </PageWrapper>
  );
}

export default AboutUs;
