import React from "react";

const Tags = ({ tags, count }) => {
  return (
    <div className="tags">
      {tags.length &&
        tags.map((item, i) => {
          const { title, icon, image } = item;
          if (i < count) {
            return (
              <div key={item}>
                {icon || image ? (
                  <div key={title} className="tags-item">
                    {icon ? (
                      <i className={icon} />
                    ) : (
                      <div className="tags-item-image">
                        <img src={image} />
                      </div>
                    )}
                    <p> {title}</p>
                  </div>
                ) : (
                  <div key={item} className="tags-item">
                    <p> {item}</p>
                  </div>
                )}
              </div>
            );
          }
        })}
    </div>
  );
};

export default Tags;
