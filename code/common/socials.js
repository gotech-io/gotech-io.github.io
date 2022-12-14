import Image from "./img";
import React from "react";

const Socials = ({
  _relativeURL,
  _ID,
  facebook_link,
  facebook_image,
  linkedin_link,
  linkedin_image,
  instagram_link,
  instagram_image,
}) => {
  const createRelativeURL = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <section className="socials">
      <a href={facebook_link} target="_blank">
        <Image src={createRelativeURL(facebook_image)} />
      </a>
      <a href={linkedin_link} target="_blank">
        <Image src={createRelativeURL(linkedin_image)} />
      </a>
      <a href={instagram_link} target="_blank">
        <Image src={createRelativeURL(instagram_image)} />
      </a>
    </section>
  );
};

export default Socials;
