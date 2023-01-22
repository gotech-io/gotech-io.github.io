import PageWrapper from "../../common/pageWrapper";
import React from "react";
import SectionTeams from "./components/teams";
import Timeline from "./components/timeline";
import Video from "../../common/video";
import { ABOUT_US_DETAILS } from "../../../assets/js/common/about-us";
import { SECTIONS } from "../../../assets/js/common/sections";

function AboutUs({ teams, marquee, contact, _relativeURL, _ID }) {
  const { title, description, sections, video } = ABOUT_US_DETAILS;

  const subjects = [
    {
      type: SECTIONS.ALPHA,
      content: <Timeline />,
    },
    {
      type: SECTIONS.BETA,
      content: <Video src={video.src} type={video.title} />,
    },
    {
      type: SECTIONS.DELTA,
      content: <SectionTeams teams={teams} />,
    },
  ];

  return (
    <PageWrapper
      title={title}
      description={description}
      sections={sections}
      subjects={subjects}
      marquee={marquee}
      contact={contact}
      _relativeURL={_relativeURL}
      _ID={_ID}
    />
  );
}

export default AboutUs;
