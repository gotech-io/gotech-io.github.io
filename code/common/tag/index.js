import IconTag from "./iconTag";
import React from "react";
import SimpleTag from "./simpleTag";

const Tag = ({ item }) => {
  return (
    <div>
      {item.icon || item.image ? (
        <IconTag title={item.title} icon={item.icon} image={item.image} />
      ) : (
        <SimpleTag item={item} />
      )}
    </div>
  );
};

export default Tag;
