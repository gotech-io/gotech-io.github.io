import React from "react";

function LottiePlayer({ src, width, height }) {
  return (
    <lottie-player
      src={src}
      background="transparent"
      speed="1"
      style={{ width: { width }, height: { height } }}
      loop
      autoplay
    ></lottie-player>
  );
}

export default LottiePlayer;
