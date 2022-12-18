import React from "react";

const ListServices = ({ services }) => {
  return (
    <div className="services-content">
      {services.length &&
        services.map((service, i) => {
          return (
            <div key={i} className="services-content-item">
              {service}
            </div>
          );
        })}
    </div>
  );
};

export default ListServices;
