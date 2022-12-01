import GoogleMap from "../../../../common/map";
import React from "react";
import animations from "../../../../../assets/js/animations";

const Info = ({ info }) => {
  const { phone, email, address, form } = info;
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
          <p>{phone}</p>
          <p>{email}</p>
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
