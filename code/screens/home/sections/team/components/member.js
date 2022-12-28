import Image from "../../../../../common/img";
import React from "react";
import animations from "../../../../../../assets/js/animations";
import { handleUrl } from "../../../../../utils";

const Member = ({ image, _relativeURL, _ID, _body }) => {
  return (
    <div
      className="home-team-member"
      data-aos={animations.up}
      data-aos-duration="1000"
    >
      <Image src={handleUrl(image, _relativeURL, _ID)} />
      <div
        className="home-team-member-content"
        data-aos={animations.up}
        data-aos-delay="150"
      >
        {_body}
      </div>
    </div>
  );
};

export default Member;
