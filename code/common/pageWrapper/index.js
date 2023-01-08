import Header from "../header";
import React from "react";
import Sections from "../listSection";
import { handleUrl } from "../../utils";

function PageWrapper({
  title,
  description,
  sections,
  subjects,
  color,
  marquee,
  contact,
  _relativeURL,
  _ID,
}) {
  return (
    <div>
      <Header title={title} description={description} />

      {sections && subjects && (
        <Sections sections={sections} subjects={subjects} mainColor={color} />
      )}

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
