import LottiePlayer from "../../common/lottie-player";
import React from "react";
import Sections from "./components/sections";
import animations from "../../../assets/js/animations";
import { MAIN_PAGE_DETAILS } from "../../../assets/js/common/main-page";
import { handleUrl } from "../../utils";

const Home = ({ header, navbar, contact, _relativeURL, _ID }) => {
  const { lottie, sections } = MAIN_PAGE_DETAILS;

  return (
    <div className="home" data-aos={animations.up}>
      {navbar}
      {header}

      <div className="home-screens">
        <LottiePlayer
          src={lottie.src}
          width={lottie.width}
          height={lottie.height}
        />
      </div>

      <Sections sections={sections} />

      <div className="page-common-sub-section">{contact}</div>

      <script
        type="module"
        src={handleUrl(`/assets/js/home/index.js`, _relativeURL, _ID)}
      />
    </div>
  );
};

export default Home;
