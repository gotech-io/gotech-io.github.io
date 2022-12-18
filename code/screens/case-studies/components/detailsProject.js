import ColorSection from "../../../common/ColorSection";
import DetailsSection from "./detailsSection";
import React from "react";
import Steps from "../../../common/steps";

function DetailsProject({ details, introduction, main }) {
  return (
    <div>
      {details.length &&
        details.map(({ type, content, color }) => {
          return (
            <div key={type}>
              <ColorSection
                color={color}
                title={content.title}
                description={content.description}
                paragraphs={content.paragraphs}
              >
                {type === "challenge" && <Steps steps={content.steps} />}
              </ColorSection>

              {type === "client" && (
                <DetailsSection main={main} introduction={introduction} />
              )}
            </div>
          );
        })}
    </div>
  );
}

export default DetailsProject;
