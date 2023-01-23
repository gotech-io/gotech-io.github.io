import ColorSection from "../../../common/ColorSection";
import IntroductionItem from "./introduction-item";
import IntroductionTagsItem from "./introduction-tags-item";
import React from "react";
import { COLORS } from "../../../../assets/js/common/colors";

const isEmpty = "Right now we don't have a description!";

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
