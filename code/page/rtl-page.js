import React from "react";
import MetaTags from "./components/meta";

const Page = ({
  title,
  navbar,
  footer,
  script,
  _relativeURL,
  _ID,
  main,
  meta_description,
}) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <html>
      <head>
        <title>{title}</title>
        <MetaTags
          meta_description={meta_description}
          generateUrl={generateUrl}
          title={title}
        />
        <link rel="stylesheet" href={generateUrl(`/assets/css/index.css`)} />
      </head>
      <body style={{ direction: "rtl" }}>
        {navbar}
        <div className="app-wrapper">
          {main}

          {script != undefined ? (
            <script
              type="module"
              src={generateUrl(`/assets/js/${script}.js`)}
            />
          ) : null}
        </div>
        {footer}
      </body>
    </html>
  );
};

export default Page;
