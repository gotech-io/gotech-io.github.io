import CircleDiagram from "../../common/circleDiagram";
import Clients from "./components/clients";
import HomeHeader from "./header";
import LottiePlayer from "../../common/lottie-player";
import React from "react";
import Sections from "../../common/listSection";
import animations from "../../../assets/js/animations";
import { MAIN_PAGE_DETAILS } from "../../../assets/js/common/main-page";
import { SECTIONS } from "../../../assets/js/common/sections";
import { handleUrl } from "../../utils";

const subjects = [
  {
    type: SECTIONS.GAMMA,
    content: <CircleDiagram />,
  },
  {
    type: SECTIONS.EPSILON,
    content: <Clients />,
  },
];

const Home = ({ navbar, contact, _relativeURL, _ID }) => {
  const { title, sub_title, description, url, btnText, lottie, sections } =
    MAIN_PAGE_DETAILS;

  return (
    <div className="home" data-aos={animations.up}>
      {navbar}

      <HomeHeader
        title={title}
        sub_title={sub_title}
        description={description}
        url={url}
        btnText={btnText}
      />

      <div className="page-common-block home-screens">
        <LottiePlayer
          src={lottie.src}
          width={lottie.width}
          height={lottie.height}
        />
      </div>

      <Sections sections={sections} subjects={subjects} />

      <div className="page-common-sub-section">{contact}</div>

      <script
        type="module"
        src={handleUrl(`/assets/js/home/index.js`, _relativeURL, _ID)}
      />
    </div>
  );
};

export default Home;
