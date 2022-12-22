import ColorSection from "../../common/ColorSection";
import PageWrapper from "../../common/pageWrapper";
import React from "react";
import StagesCycle from "../../common/stages-cycle";
import { COLORS } from "../../../assets/js/common/colors";

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
        <StagesCycle />
      </ColorSection>
    </PageWrapper>
  );
}

export default Clients;
