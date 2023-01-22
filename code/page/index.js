import MetaTags from "./components/meta";
import React from "react";
import { handleUrl } from "../utils";

const Page = ({ title, navbar, footer, _relativeURL, _ID, main }) => {
  return (
    <html>
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-16SZPX0CE1"
        ></script>
        <script>
          window.dataLayer = window.dataLayer || []; function gtag()
          {typeof window !== "undefined" && window.dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-16SZPX0CE1');
        </script>

        <title>{title}</title>
        <MetaTags _relativeURL={_relativeURL} _ID={_ID} />
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        <script
          src="https://kit.fontawesome.com/db2c82a605.js"
          crossOrigin="anonymous"
        ></script>
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

        {/* Accessibility for the disabled */}
        <script src="https://cdn.enable.co.il/licenses/enable-L17164fx15o8hkpg-0123-40528/init.js"></script>
      </body>
    </html>
  );
};

export default Page;
