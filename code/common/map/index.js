import React from "react";

//https://www.google.com/maps/embed/v1/place?key=AIzaSyD4iE2xVSpkLLOXoyqT-RuPwURN3ddScAI&q=Space+Needle,Seattle+WA
const GOOGLE_MAP_KEY = 'AIzaSyARVkNqy0WFkz61fT8frPJBkEce944Usl0'

function Map({city, street, house}) {
const src = `https://www.google.com/maps?q=${house} ${street}, ${city}&output=embed`
//const src = `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAP_KEY}&q=${house} ${street}, ${city}&output=embed`
  return (
    <iframe
      width="100%"
      height="100%"
      loading="lazy"
      src={src}>
    </iframe>
  );
}

export default Map;