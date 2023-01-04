import CircleDiagram from "../../../common/circleDiagram";
import Clients from "./clients";
import ColorSection from "../../../common/ColorSection";
import React from "react";

const Sections = ({ sections }) => {
  return (
    <div>
      {sections.length &&
        sections.map(({ type, color, title, description, paragraphs }) => {
          return (
            <ColorSection
              key={type}
              color={color}
              title={title}
              description={description}
              paragraphs={paragraphs}
            >
              {type === "section-gamma" && <CircleDiagram />}
              {type === "section-epsilon" && <Clients />}
            </ColorSection>
          );
        })}
    </div>
  );
};

export default Sections;
