import React from "react";
import animations from "../../../assets/js/animations";

const CategoryItem = ({ title, link, color, icon }) => {
  return (
    <div
      key={title}
      className="stages-item"
      data-aos-anchor-placement="top"
      data-aos={animations.zoomIn}
    >
      <a href={link} className="categories-item-wrapper">
        <div className={`categories-item-wrapper-dot category-${color}`}>
          <i className={icon}></i>
        </div>
      </a>

      <p>{title}</p>
    </div>
  );
};

export default CategoryItem;
