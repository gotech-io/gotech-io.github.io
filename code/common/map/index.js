import React from "react";

function Map({city, street, house}) {
const src = `https://www.google.com/maps?q=${house} ${street}, ${city}&output=embed`
  return (
    <iframe className="map"
      loading="lazy"
      src={src}>
    </iframe>
  );
}

export default Map;