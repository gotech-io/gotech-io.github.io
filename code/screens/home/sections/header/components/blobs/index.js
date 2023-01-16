import React from "react";

const blobs = [
  {
    type: "orange",
    className: "orange-blobs",
    src: "https://assets3.lottiefiles.com/packages/lf20_5gdcuanx.json",
  },
  {
    type: "green",
    className: "green-blobs",
    src: "https://lottie.host/2a4cd7fd-ef68-4865-b56c-8fe21f2c9170/7RneaIKFUy.json",
  },
];

const Blobs = () => {
  return (
    <div className="home-header-background">
      {blobs.map((blob) => {
        const { type, className, src } = blob;
        return (
          <div key={type} className={className}>
            <lottie-player
              src={src}
              background="transparent"
              style={{ width: "100%", height: "100%" }}
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
        );
      })}
    </div>
  );
};

export default Blobs;
