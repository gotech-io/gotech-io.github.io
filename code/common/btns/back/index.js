import React from "react";

function BackBtn({ url, text }) {
  return (
    <button className="back-btn">
      <aside className="back-btn-arrow"></aside>
      <a href={url}>{text}</a>
    </button>
  );
}

export default BackBtn;
