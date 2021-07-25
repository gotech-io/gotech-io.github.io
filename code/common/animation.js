import React from "react";

const Animation = ({
  animation,
  customClassName = "",
  loop = true,
  speed = 1,
  _relativeURL,
  _ID,
}) => {
  const createRelativeURL = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  const className = `${customClassName} animation`;
  return (
    <lottie-player
      src={createRelativeURL(animation)}
      background="transparent"
      speed={speed}
      loop={loop}
      class={className}
      autoplay
    ></lottie-player>
  );
};

export default Animation;
