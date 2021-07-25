import { init } from "../index.js";
import "https://cdn.jsdelivr.net/npm/@splidejs/splide@latest/dist/js/splide.min.js";

window.onload = () => {
  init();
  initSlider();
};

const initSlider = () => {
  new Splide(".home-case-studies-slider", {
    type: "fade",
    rewind: true,
    autoplay: true,
  }).mount();
};
