import React from "react";

function ArrowButton({ link, textBtn }) {
  return (
    <div className="button-arrow-wrapper">
      <a href={link}>
        {textBtn}
        <div className="button-arrow-wrapper-icon">
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </a>
    </div>
  );
}

export default ArrowButton;
