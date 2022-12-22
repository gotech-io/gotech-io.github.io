import ColorSection from "../../common/ColorSection";
import PageWrapper from "../../common/pageWrapper";
import React from "react";
import StagesCycle from "../../common/stages-cycle";
import { categories } from "../../../assets/js/common/categories";
import { COLORS } from "../../../assets/js/common/colors";

const stages = [categories.medicine, categories.education, categories.shopping];

function Clients({
  title,
  description,
  projects,
  marquee,
  contact,
  _relativeURL,
  _ID,
}) {
  return (
    <PageWrapper
      title={title}
      description={description}
      marquee={marquee}
      contact={contact}
      _relativeURL={_relativeURL}
      _ID={_ID}
    >
      <ColorSection color={COLORS.DEFAULT} title="Clients">
        <StagesCycle stages={stages} />
      </ColorSection>
    </PageWrapper>
  );
}

export default Clients;
