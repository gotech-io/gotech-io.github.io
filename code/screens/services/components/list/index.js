import Link from "../../../../common/btns/link";
import React from "react";

const ListServices = ({ services }) => {
  return (
    <div className="services-content">
      {services.length &&
        services.map((service, i) => {
          const { title, details, description, src } = service;
          return (
            <div key={i} className="services-content-item">
              <div className="services-content-item-info">
                <div className="services-content-item-info-img">
                  <img src={src} alt="services" />
                </div>
                <h6>{title}</h6>
                <p>{details}</p>
                <div className="services-content-item-info-btn">
                  <Link url={"/"} btnText={"read more"} />
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ListServices;
