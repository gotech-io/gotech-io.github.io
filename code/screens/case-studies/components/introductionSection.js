import ArrowButton from "../../../common/btns/arrow";
import ColorSection from "../../../common/ColorSection";
import IntroductionItem from "./introductionItem";
import React from "react";
import Tags from "../../../common/tag";

const isEmpty = "Right now we don't have a description!";
const textBtn = "see all";

function IntroductionSection({ introduction }) {
  return (
    <div className="project-page-block">
      {introduction.length ? (
        introduction.map((intro) => {
          return (
            <IntroductionItem
              key={intro.title}
              title={intro.title}
              description={intro.description || ""}
            >
              {intro.options && (
                <div>
                  <Tags
                    tags={intro.options}
                    count={intro.options.length || 0}
                  />
                  {intro.link && (
                    <ArrowButton link={intro.link} textBtn={textBtn} />
                  )}
                </div>
              )}
            </IntroductionItem>
          );
        })
      ) : (
        <ColorSection color={COLORS.GREEN} title={isEmpty} />
      )}
    </div>
  );
}

export default IntroductionSection;
