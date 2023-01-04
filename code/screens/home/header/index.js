import Blobs from "./components/blobs";
import React from "react";
import Title from "./components/title";

const BLOBS_SIZE = {
  ORANGE: 1300,
  GREEN: 1100,
};

const HomeHeader = ({ title, sub_title, description, url, btnText }) => {
  return (
    <div className="home-header">
      <Blobs orangeSize={BLOBS_SIZE.ORANGE} greenSize={BLOBS_SIZE.GREEN} />

      <Title
        title={title}
        sub_title={sub_title}
        description={description}
        url={url}
        btnText={btnText}
      />
    </div>
  );
};

export default HomeHeader;
