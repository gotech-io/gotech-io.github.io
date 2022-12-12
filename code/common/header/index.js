import React from "react";

const Header = ({ title, description }) => {
  return (
    <div className="page-common-header">
      <div className="home-header-background">
        <div className="orange-blobs">
          <lottie-player
            src="https://assets3.lottiefiles.com/packages/lf20_5gdcuanx.json"
            background="transparent"
            style={{ width: "600px", height: "600px" }}
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>

        <div className="green-blobs">
          <lottie-player
            src="https://lottie.host/2a4cd7fd-ef68-4865-b56c-8fe21f2c9170/7RneaIKFUy.json"
            background="transparent"
            style={{
              width: "600px",
              height: "600px",
              position: "absolute",
            }}
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>

      <div className="page-common-block">
        <h2 className="page-common-title">{title}</h2>
        <p className="page-common-description text-description">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Header;
