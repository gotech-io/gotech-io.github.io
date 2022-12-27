import ColorSection from "../../common/ColorSection";
import PageWrapper from "../../common/pageWrapper";
import React from "react";
import TimelineItem from "./components/timelineItem";
import { COLORS } from "../../../assets/js/common/colors";
import { TIMELINE } from "../../../assets/js/common/timeline";

function AboutUs({ title, description, marquee, contact, _relativeURL, _ID }) {
  return (
    <PageWrapper
      title={title}
      description={description}
      marquee={marquee}
      contact={contact}
      _relativeURL={_relativeURL}
      _ID={_ID}
    >
      <div className="page-common-block">
        <div className="timeline-wrapper">
          <div className="timeline-vertical-block">
            <hr className="timeline-vertical-line" />
            <i className="fa-solid fa-arrow-down"></i>
          </div>

          <div className="timeline-block">
            {TIMELINE.length &&
              TIMELINE.map(({ title, description, year, color }, i) => {
                return (
                  <TimelineItem
                    key={title}
                    title={title}
                    description={description}
                    number={i + 1}
                    year={year}
                    color={color}
                    reverse={i % 2 === 0 ? "reverse" : ""}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default AboutUs;
