import React from "react";
import { images } from "../../../assets/js/images";
import { handleUrl } from "../../utils";

const MetaTags = ({ _relativeURL, _ID }) => {
  return (
    <React.Fragment>
      <meta
        content="GoTech is a one-stop shop for infrastructures and development services."
        name="description"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link
        href={handleUrl(images.common.favicon, _relativeURL, _ID)}
        rel="shortcut icon"
        type="image/x-icon"
      />
      <meta content="GoTech" property="og:title" />
      <meta
        content="GoTech is a one-stop shop for infrastructures and development services."
        property="og:description"
      />
      <meta content="" property="og:image" />
      <meta content="GoTech" property="twitter:title" />
      <meta
        content="GoTech is a one-stop shop for infrastructures and development services."
        property="twitter:description"
      />
      <meta
        content={handleUrl(images.common.twitterCard, _relativeURL, _ID)}
        property="twitter:image"
      />
      <meta property="og:type" content="website" />
      <meta content="summary_large_image" name="twitter:card" />
    </React.Fragment>
  );
};

export default MetaTags;
