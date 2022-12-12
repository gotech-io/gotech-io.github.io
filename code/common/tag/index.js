import React from "react";

const Tags = ({ tags, count }) => {
  return (
    <div className="case-studies-content-wrapper-tags">
      {tags.length &&
        tags.map((tag, i) => {
          if (i < count) {
            return (
              <div key={i} className="case-studies-content-wrapper-tags-item">
                {tag}
              </div>
            );
          }
        })}
    </div>
  );
};

export default Tags;
