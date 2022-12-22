import ColorSection from "../../common/ColorSection";
import PageWrapper from "../../common/pageWrapper";
import React from "react";
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
      <ColorSection color={COLORS.GREEN} title="Clients" />
    </PageWrapper>
  );
}

export default Clients;
