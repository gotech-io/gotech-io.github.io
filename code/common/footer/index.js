import React from "react";
import { images } from "../../../assets/js/images";
import { handleUrl } from "../../utils";
import Image from "../img";

const Footer = ({
  socials,
  _relativeURL,
  _ID,
  copyright,
  privacy_policy_text,
  privacy_policy_url,
  terms_of_use_text,
  terms_of_use_url,
}) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="/#" className="footer-logo">
          <Image src={handleUrl(images.common.logo, _relativeURL, _ID)} />
        </a>
        {socials}
        <div className="footer-bottom">
          <p>{copyright}</p>
          <section className="flex-start footer-bottom-policy">
            <a href={privacy_policy_url}>{privacy_policy_text}</a>
            <a href={terms_of_use_url}>{terms_of_use_text}</a>
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
