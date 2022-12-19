import React from "react";

function Paragraphs({ paragraphs }) {
  return (
    <div className="color-block-paragraphs">
      {paragraphs.length &&
        paragraphs.map((par) => {
          return (
            <p key={par} className="color-block-description">
              {par}
            </p>
          );
        })}
    </div>
  );
}

export default Paragraphs;
