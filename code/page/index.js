import MetaTags from "./components/meta";
import React from "react";
import { handleUrl } from "../utils";

const Page = ({ title, navbar, footer, _relativeURL, _ID, main }) => {
  return (
    <html>
      <head>
        <title>{title}</title>
        <MetaTags _relativeURL={_relativeURL} _ID={_ID} />
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        <script
          src="https://kit.fontawesome.com/db2c82a605.js"
          crossOrigin="anonymous"
        ></script>
        {/* <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link> */}
        <link
          rel="stylesheet"
          href={handleUrl(`/assets/css/index.css`, _relativeURL, _ID)}
        />
        <link
          href="https://cdn.jsdelivr.net/npm/jarallax@2/dist/jarallax.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <script src="https://cdn.jsdelivr.net/npm/jarallax@2/dist/jarallax.min.js"></script>
        {navbar}
        <div className="app-wrapper">{main}</div>
        {footer}
      </body>
    </html>
  );
};

export default Page;
