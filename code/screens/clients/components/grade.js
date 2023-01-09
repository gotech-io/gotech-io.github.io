import Profile from "./profile";
import Range from "../../../common/range";
import React from "react";

function Grade({ color, range, clientName, image }) {
  return (
    <div className="reviews-content-grade">
      <Range color={color} range={range} />
      <Profile clientName={clientName} image={image} />
    </div>
  );
}

export default Grade;
