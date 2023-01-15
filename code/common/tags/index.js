import React from "react";
import Tag from "../tag";

const Tags = ({ tags, count }) => {
  return (
    <div className="tags">
      {tags.length &&
        tags.map((item, i) => {
          if (i < count) {
            return <Tag key={item} item={item}></Tag>;
          }
        })}
    </div>
  );
};

export default Tags;
