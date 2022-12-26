import React from "react";
import animations from "../../../assets/js/animations";

const Categories = ({ categories }) => {
  return (
    <div className="page-common-block ">
      <div className="categories">
        {categories.length &&
          categories.map((category) => {
            const { title, color, icon, link } = category;
            return (
              <div
                key={performance.now()}
                className="stages-item"
                data-aos-anchor-placement="top-center"
                data-aos={animations.zoomIn}
              >
                <a href={link} className="categories-item-wrapper">
                  <div
                    className={`categories-item-wrapper-dot category-${color}`}
                  >
                    <i className={icon}></i>
                  </div>
                </a>
                <p>{title}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Categories;
