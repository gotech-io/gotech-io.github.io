import ColorSection from "../../common/ColorSection";
import Header from "../../common/header";
import React from "react";
import { COLORS } from "../../../assets/js/common/colors/colors";
import { handleUrl } from "../../utils";

const isEmpty = "Right now we don't have a new examples for you!";

function CaseStudies({
  title,
  description,
  projects,
  contact,
  _relativeURL,
  _ID,
}) {
  return (
    <div>
      <Header title={title} description={description} />

      <div>
        {projects.length ? (
          projects.map((project, i) => {
            return <div key={i}>{project}</div>;
          })
        ) : (
          <ColorSection color={COLORS.GREEN} title={isEmpty} />
        )}
      </div>

      <div className="grey-section">{contact}</div>

      <script
        type="module"
        src={handleUrl(`/assets/js/screens/about/index.js`, _relativeURL, _ID)}
      />
    </div>
  );
}

export default CaseStudies;
