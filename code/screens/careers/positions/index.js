import Link from "../../../common/btns/link";
import React from "react";
import animations from "../../../../assets/js/animations";

const Positions = ({ positions }) => {
  const { title, teams } = positions;
  return (
    <div className="positions">
      <h4>{title}</h4>
      <div className="positions-content page-common-block">
        {teams.map((team, j) => {
          const { title, options } = team;
          return (
            <div key={j} className="positions-content-team">
              <h5>{title}</h5>

              {options.map((option, i) => {
                const { title, src, location, description } = option;
                return (
                  <div
                    key={i}
                    className="positions-item"
                    data-aos-anchor-placement="top-center"
                    data-aos={animations.zoomUp}
                  >
                    <div key={i} className="positions-item-content">
                      <lottie-player
                        src={src}
                        background="transparent"
                        style={{
                          width: "50px",
                          height: "50px",
                          margin: "0 auto",
                        }}
                        speed="0.5"
                        loop
                        autoplay
                      ></lottie-player>
                      <h6 className="positions-item-description">{title}</h6>
                    </div>
                    <div key={i} className="positions-item-content">
                      <p className="positions-item-description">{location}</p>
                      <Link btnText="apply" />
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Positions;
