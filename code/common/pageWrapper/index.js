import Header from "../header";
import React from "react";
import { handleUrl } from "../../utils";

function PageWrapper({
  title,
  description,
  children,
  marquee,
  contact,
  _relativeURL,
  _ID,
}) {
  return (
    <div>
      <Header title={title} description={description} />

      {children}

      <div>{marquee}</div>
      <div className="page-common-sub-section">{contact}</div>

      <script
        type="module"
        src={handleUrl(`/assets/js/about/index.js`, _relativeURL, _ID)}
      />
    </div>
  );
}

export default PageWrapper;
