import "https://cdn.jsdelivr.net/npm/@splidejs/splide@latest/dist/js/splide.min.js";
import Form from "../form/index.js";
import emailJs from "../services/email-js/index.js";
import { init } from "../index.js";

const initSlider = () => {
  new Splide(".home-case-studies-slider", {
    type: "fade",
    rewind: true,
    autoplay: true,
  }).mount();
};

const createContactForm = () => {
  const form = new Form("contact-form", emailJs.subscribe);
  form.init();
};

window.onload = () => {
  init();
  // initSlider();
  createContactForm();
};
