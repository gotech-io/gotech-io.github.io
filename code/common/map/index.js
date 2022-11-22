import React from "react";

const GOOGLE_MAP_KEY = process.env.GOOGLE_MAP_SECRET_KEY

function Map({city, street, house}) {
const src = `https://www.google.com/maps?q=${house} ${street}, ${city}&output=embed`
//const src = `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAP_KEY}&q=${house} ${street}, ${city}&output=embed`
  return (
    <iframe className="map"
      loading="lazy"
      src={src}>
    </iframe>
  );
}

export default Map;