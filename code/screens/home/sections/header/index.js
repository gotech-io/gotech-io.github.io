import Image from "../../../../common/img";
import React from "react";
import animations from "../../../../../assets/js/animations";
import { handleUrl } from "../../../../utils";

const HomeHeader = ({ title, sub_title, description, button }) => {
  return (
    <div className="home-header">
      <div className="home-header-background">
        <div className="orange-blobs">
          <lottie-player
            src="https://assets3.lottiefiles.com/packages/lf20_5gdcuanx.json"
            background="transparent"
            style={{ width: "1300px", height: "1300px" }}
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>

        <div className="green-blobs">
          <lottie-player
            src="https://lottie.host/2a4cd7fd-ef68-4865-b56c-8fe21f2c9170/7RneaIKFUy.json"
            background="transparent"
            style={{ width: "1100px", height: "1100px" }}
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>

      <div className="home-header-main">
        <div className="page-common-block">
          <di className="home-header-main-content">
            <h1 data-aos={animations.up} data-aos-delay="100">
              {title}
            </h1>

            <h2 data-aos={animations.up} data-aos-delay="250">
              {sub_title}
            </h2>

            <p data-aos={animations.up} data-aos-delay="250">
              {description}
            </p>
          </di>
          {button}
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;

//return (
// <div className="home-header">
//   <Image
//     src={handleUrl(background, _relativeURL, _ID)}
//     customClassName="home-header-background"
//   />
//   <div className="home-header-main flex-between">
//     <section className="home-header-main-content">
//       <h1 data-aos={animations.up} data-aos-delay="100">
//         {title}
//       </h1>
//       <h2 data-aos={animations.up} data-aos-delay="250">
//         {sub_title}
//       </h2>
//       <div data-aos={animations.up} data-aos-delay="400">
//         {_body}
//       </div>
//       <span data-aos={animations.zoomIn} data-aos-delay="800">
//         {button}
//       </span>
//     </section>
//   </div>
//   <a href="/#services">{toggle_animation}</a>
// </div>
//);
