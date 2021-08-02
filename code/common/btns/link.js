import React from "react";

function Link({ url, btnText }) {
  return (
    <button className="link">
      <a href={url}>{btnText}</a>
    </button>
  );
}

export default Link;
