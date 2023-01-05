import ColorSection from "../../common/colorSection";
import ListMembers from "./components/listMembers";
import PageWrapper from "../../common/pageWrapper";
import React from "react";
import Timeline from "./components/timeline";
import Video from "../../common/video";
import { ABOUT_US_DETAILS } from "../../../assets/js/common/about-us";
import { TEAMS } from "../../../assets/js/common/about-us/teams";

function AboutUs({ marquee, contact, _relativeURL, _ID }) {
  const { title, description, sections, video } = ABOUT_US_DETAILS;

  return (
    <PageWrapper
      title={title}
      description={description}
      sections={sections}
      alpha={<Timeline />}
      beta={<Video src={video.src} type={video.title} />}
      delta={<ListMembers teams={TEAMS} />}
      marquee={marquee}
      contact={contact}
      _relativeURL={_relativeURL}
      _ID={_ID}
    />
  );
}

export default AboutUs;
