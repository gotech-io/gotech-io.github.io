import ColorSection from "../ColorSection";
import React from "react";

function Sections({
  sections,
  color,
  alpha,
  beta,
  delta,
  gamma,
  epsilon,
  zeta,
}) {
  const mainColor = color;

  return (
    <div>
      {sections.length &&
        sections.map(({ type, color, title, description, paragraphs }) => {
          return (
            <div key={type} className={type}>
              <ColorSection
                color={color || mainColor}
                title={title}
                description={description}
                paragraphs={paragraphs}
              >
                {type === "section-alpha" && alpha}
                {type === "section-beta" && beta}
                {type === "section-gamma" && gamma}
                {type === "section-delta" && delta}
                {type === "section-epsilon" && epsilon}
                {type === "section-zeta" && zeta}
              </ColorSection>
            </div>
          );
        })}
    </div>
  );
}

export default Sections;
