import React from "react";

const Blobs = ({ orange, green }) => {
  return (
    <div className="home-header-background">
      <div className="orange-blobs">
        <lottie-player
          src="https://assets3.lottiefiles.com/packages/lf20_5gdcuanx.json"
          background="transparent"
          style={{ width: `${orange}px`, height: `${orange}px` }}
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>

      <div className="green-blobs">
        <lottie-player
          src="https://lottie.host/2a4cd7fd-ef68-4865-b56c-8fe21f2c9170/7RneaIKFUy.json"
          background="transparent"
          style={{ width: `${green}px`, height: `${green}px` }}
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
  );
};

export default Blobs;
