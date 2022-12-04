import GoogleMap from "../../../../common/map";
import React from "react";
import animations from "../../../../../assets/js/animations";

const Info = ({ info }) => {
  const { contact, address, form } = info;
  const { phone, email } = contact;
  return (
    <div className="info flex-between">
      <div
        className="info-wrapper"
        data-aos-anchor-placement="top-center"
        data-aos={animations.fadeRight}
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <div className="info-wrapper-block">
          <h4>Have any questions?</h4>
          <div className="info-wrapper-contact">
            <img src={phone.src}></img>
            <p>{phone.content}</p>
          </div>
          <div className="info-wrapper-contact">
            <img src={email.src}></img>
            <p>{email.content}</p>
          </div>
        </div>

        <div className="info-wrapper-map">
          <h4>Find us:</h4>
          <div className="info-wrapper-map-block">
            <GoogleMap address={address} />
          </div>
        </div>
      </div>
      <div
        className="info-wrapper-form"
        data-aos-anchor-placement="top-center"
        data-aos={animations.fadeLeft}
        data-aos-mirror="true"
        data-aos-once="false"
      >
        {form}
      </div>
    </div>
  );
};

export default Info;
