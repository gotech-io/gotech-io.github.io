import ArrowButton from "../../../common/btns/arrow";
import React from "react";
import Tags from "../../../common/tags";
import { COLORS } from "../../../../assets/js/common/colors";

const textBtn = "see all";

function IntroductionTagsItem({ link, tags }) {
  return (
    <div>
      <Tags tags={tags} count={tags.length || 0} />
      {link && (
        <ArrowButton link={link} textBtn={textBtn} color={COLORS.GREEN} />
      )}
    </div>
  );
}

export default IntroductionTagsItem;
