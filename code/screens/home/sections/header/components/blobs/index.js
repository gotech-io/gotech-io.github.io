import React from "react";

const blobs = [
  {
    className: "orange-blobs",
    src: "https://assets3.lottiefiles.com/packages/lf20_5gdcuanx.json",
    size: 1300,
  },
  {
    className: "green-blobs",
    src: "https://lottie.host/2a4cd7fd-ef68-4865-b56c-8fe21f2c9170/7RneaIKFUy.json",
    size: 1100,
  },
];

const Blobs = () => {
  return (
    <div className="home-header-background">
      {blobs.map((blob) => {
        const { className, src, size } = blob;
        return (
          <div key={className} className={className}>
            <lottie-player
              src={src}
              background="transparent"
              style={{ width: `${size}px`, height: `${size}px` }}
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
