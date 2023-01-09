import React from "react";
import { ICONS } from "../../../../assets/js/common/icons";

function Profile({ clientName, image }) {
  return (
    <div className="reviews-content-clients">
      <p>{`"${clientName}"`}</p>

      <div className="reviews-content-clients-image">
        {image ? (
          <img src={image} alt="client profile" />
        ) : (
          <i className={ICONS.USER}></i>
        )}
      </div>
    </div>
  );
}

export default Profile;
