import CategoryItem from "../category";
import React from "react";

const ListCategories = ({ categories }) => {
  return (
    <div className="page-common-block categories">
      {categories.length &&
        categories.map((category) => {
          const { title, color, icon, link } = category;
          return (
            <CategoryItem
              key={title}
              title={title}
              color={color}
              icon={icon}
              link={link}
            />
          );
        })}
    </div>
  );
};

export default ListCategories;
