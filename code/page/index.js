import React from "react";
import animations from "../../assets/js/animations";
import { handleUrl } from "../utils";
import MetaTags from "./components/meta";

const Page = ({ title, navbar, footer, script, _relativeURL, _ID, main }) => {
  return (
    <html>
      <head>
        <title>{title}</title>
        <MetaTags _relativeURL={_relativeURL} _ID={_ID} />
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        <script
          src={handleUrl(
            `/assets/js/services/InstagramFeed.js`,
            _relativeURL,
            _ID
          )}
        ></script>

        <link
          rel="stylesheet"
          href={handleUrl(`/assets/css/index.css`, _relativeURL, _ID)}
        />
      </head>
      <body>
        {navbar}
        <div className="app-wrapper">
          {main}

          {script != undefined ? (
            <script
              type="module"
              src={handleUrl(`/assets/js/${script}.js`, _relativeURL, _ID)}
            />
          ) : null}
        </div>
        {footer}
      </body>
    </html>
  );
};

export default Page;
