import React from "react";

function Paragraphs({ paragraphs }) {
  return (
    <div className="title-section">
      {paragraphs.length &&
        paragraphs.map((par) => {
          return <p key={par}>{par}</p>;
        })}
    </div>
  );
}

export default Paragraphs;
