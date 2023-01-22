import ArrowButton from "../../../common/btns/arrow";
import ColorSection from "../../../common/ColorSection";
import IntroductionItem from "./introductionItem";
import IntroductionTagsItem from "./introductionTagsItem";
import React from "react";
import Tags from "../../../common/tags";
import { COLORS } from "../../../../assets/js/common/colors";

const isEmpty = "Right now we don't have a description!";
const textBtn = "see all";

function IntroductionSection({ introduction, tags }) {
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
              {intro.options ? (
                <IntroductionTagsItem link={intro.link} tags={intro.options} />
              ) : (
                tags.length && (
                  <IntroductionTagsItem link={intro.link} tags={tags} />
                )
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
