import React from "react";

const Description = ({ details }) => {
  return (
    <div className="posts-description-blog">
      {details.map(({ type, text }) => {
        return (
          <div key={text}>
            {type === "title" && <h3>{text}</h3>}
            {type === "subTitle" && <h4>{text}</h4>}
            {type === "paragraph" && <p>{text}</p>}
            {type === "quotes" && (
              <div className="posts-description-blog-comment">
                <div className="posts-description-blog-comment-image">
                  <img src={"/assets/images/common/quotes.png"} />
                </div>
                <p>{text}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Description;
