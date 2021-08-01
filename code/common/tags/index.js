import React from "react";

function Tags({ tags }) {
  return (
    <div className="tags">
      {tags.map((tag, i) => {
        return (
          <figure className="tags-tag" key={i}>
            {tag}
          </figure>
        );
      })}
    </div>
  );
}

export default Tags;
