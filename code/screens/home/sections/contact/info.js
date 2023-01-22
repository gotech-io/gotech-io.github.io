import React from "react";

const Info = ({ title, subTitle1, subTitle2, email, address }) => {
  return (
    <div className="contact-info">
      <h3>{title}</h3>
      <div className="contact-info-block">
        <h4>{subTitle1}</h4>
        <p>{email}</p>
      </div>

      <div className="contact-info-block">
        <h4>{subTitle2}</h4>
        <p>{address}</p>
      </div>
    </div>
  );
};

export default Info;
