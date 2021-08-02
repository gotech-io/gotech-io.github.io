import React from "react";

function OtherWorks({ url, text = "Other works" }) {
  return (
    <button className="other-works-btn flex">
      <figure></figure>
      <a className="other-works-btn-link" href={url}>
        {text}
      </a>
      <aside className="other-works-btn-arrow"></aside>
    </button>
  );
}

export default OtherWorks;
