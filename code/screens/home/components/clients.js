import React from "react";

const clients = [
  {
    src: "/assets/images/home/clients/google.png",
    alt: "orbs",
  },
  {
    src: "/assets/images/home/clients/walmart.png",
    alt: "orbs",
  },
  {
    src: "/assets/images/home/clients/qualcomm.png",
    alt: "orbs",
  },
  {
    src: "/assets/images/home/clients/mellanox.png",
    alt: "orbs",
  },
  {
    src: "/assets/images/home/clients/amdocs-logo.png",
    alt: "orbs",
  },
  {
    src: "/assets/images/home/clients/digibank.png",
    alt: "orbs",
  },
  {
    src: "/assets/images/home/clients/nsogroup.png",
    alt: "orbs",
  },
  {
    src: "/assets/images/home/clients/cisco.svg",
    alt: "orbs",
  },
  {
    src: "/assets/images/home/clients/salesforce.png",
    alt: "orbs",
  },
];

const Clients = () => {
  return (
    <div className={"clients-wrapper"}>
      {clients.length &&
        clients.map(({ src, alt }) => {
          return (
            <div className={"clients-item"} key={src}>
              <div className={"clients-item-image"} key={src}>
                <img src={src} alt={alt} />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Clients;
