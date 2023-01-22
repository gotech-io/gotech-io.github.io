import IconBlob from "../iconBlob";
import React from "react";
import animations from "../../../assets/js/animations";

const CategoryItem = ({ title, link, icon }) => {
  return (
    <div data-aos-anchor-placement="top" data-aos={animations.zoomIn}>
      <div className="category-item">
        <a href={link}>
          <div className="categories-item-wrapper">
            <IconBlob icon={icon} />
          </div>
        </a>

        <p>{title}</p>
      </div>
    </div>
  );
};

export default CategoryItem;
