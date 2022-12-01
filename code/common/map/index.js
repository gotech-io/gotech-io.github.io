import React from "react";

function GoogleMap({ address }) {
  const { city, street, house } = address;

  const src = `https://www.google.com/maps?q=${house} ${street}, ${city}&output=embed`;
  return <iframe className="map" loading="lazy" src={src}></iframe>;
}

export default GoogleMap;
