import ColorSection from "../../common/colorSection";
import PageWrapper from "../../common/pageWrapper";
import React from "react";
import Timeline from "./components/timeline";
import { COLORS } from "../../../assets/js/common/colors";

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
      <ColorSection
        color={COLORS.DEFAULT}
        title={"our history"}
        description={
          "GoTech is a one-stop shop for infrastructures and development services. Our team consists of the best and most professional mobile and web developers, QA automation developers, DevOps, data engineers, and DBAs. We provide our clients with high-quality, reliable services that are tailored to their specific business needs."
        }
      >
        <Timeline />
      </ColorSection>
    </PageWrapper>
  );
}

export default AboutUs;
