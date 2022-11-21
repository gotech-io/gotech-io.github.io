import React from "react";

function Map({city, street, house}) {
const src = `https://www.google.com/maps?q=${house} ${street}, ${city}&output=embed`
  return (
    <div style={{width: '500px', height: '200px'}}>
      <iframe
        width="100%"
        height="100%"
        style={{border:0}}
        loading="lazy"
        src={src}>
      </iframe>

    </div>
  );
}

export default Map;
