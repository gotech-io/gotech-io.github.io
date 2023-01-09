import ColorSection from "../ColorSection";
import React from "react";

function Sections({ sections, subjects, mainColor }) {
  return (
    <div>
      {sections.length &&
        sections.map(({ type, color, title, description, paragraphs }) => {
          const contentData = subjects.find((sub) => sub.type === type);

          return (
            <div key={type} className={type}>
              <ColorSection
                color={color || mainColor}
                title={title}
                description={description}
                paragraphs={paragraphs}
              >
                {contentData && contentData.content}
              </ColorSection>
            </div>
          );
        })}
    </div>
  );
}

export default Sections;
