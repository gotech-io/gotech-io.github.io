import PageWrapper from "../../common/pageWrapper";
import React from "react";
import Comeet from "./comeet";
import { CAREERS_DETAILS } from "../../../assets/js/careers/details";
import { SECTIONS } from "../../../assets/js/common/sections";
import { handleUrl } from "../../utils";

function PageCareers({ marquee, contact, _relativeURL, _ID }) {
  const { title, description, sections } = CAREERS_DETAILS;

  const subjects = [
    {
      type: SECTIONS.ALPHA,
      content: <Comeet _ID={_ID} _relativeURL={_relativeURL} />,
    },
  ];

  return (
    <div className="careers">
      <PageWrapper
        title={title}
        description={description}
        // sections={sections}
        // subjects={subjects}
        marquee={marquee}
        contact={contact}
        _relativeURL={_relativeURL}
        _ID={_ID}
      />
      <script
        type="module"
        src={handleUrl(`/assets/js/careers/index.js`, _relativeURL, _ID)}
      />
      <script type="comeet-careers"></script>
    </div>
  );
}

export default PageCareers;
