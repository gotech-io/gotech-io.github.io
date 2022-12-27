import PageWrapper from "../../common/pageWrapper";
import React from "react";
import Timeline from "./components/timeline";

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
      <Timeline />
    </PageWrapper>
  );
}

export default AboutUs;
