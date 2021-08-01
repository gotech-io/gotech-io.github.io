import React from "react";

function BackBtn({ url, text }) {
  return (
    <button className="back-btn">
      <a href={url}>{text}</a>
    </button>
  );
}

export default BackBtn;
