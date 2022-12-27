import React from "react";
import TimelineItem from "./timelineItem";
import VerticalLine from "./verticalLine";
import { TIMELINE } from "../../../../assets/js/common/timeline";

const Timeline = () => {
  return (
    <div className="page-common-block">
      <div className="timeline-wrapper">
        <VerticalLine />

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
  );
};

export default Timeline;
