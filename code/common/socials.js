import React from "react";
import { CONTACT } from "../../assets/js/common/contact";
import { ICONS } from "../../assets/js/common/icons";

const Socials = () => {
  return (
    <div className="socials">
      {CONTACT.SOCIAL_MEDIA.content.length &&
        CONTACT.SOCIAL_MEDIA.content.map(({ icon, link }) => {
          return (
            <a key={icon} href={link} target="_blank" className="socials-link">
              <i className={ICONS[icon]} />
            </a>
          );
        })}
    </div>
  );
};

export default Socials;
