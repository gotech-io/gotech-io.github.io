import Form from "../form/index.js";
import { init as InitApp } from "../index.js";
import emailJs from "../services/email-js/index.js";

window.onload = () => {
  InitApp();
  $("canvas").trigger("gameEnd");
  addResizeEventToCanvas();
  initForm();
};

const addResizeEventToCanvas = () => {
  handleCanvasSize();
  window.addEventListener("resize", () => {
    handleCanvasSize();
  });
};

const initForm = () => {
  const isFormAlreadyFilled = localStorage.getItem("contact-form-filled");
  const formContainer = document.querySelector(".flappy-contact");

  if (isFormAlreadyFilled) {
    init();
    formContainer.style.display = "none";
  } else {
    const form = new Form("flappy-form", () => {
      // emailJs.subscribe;
      const form = document.querySelector(".flappy-contact");
      form.style.display = "none";
      init();
      localStorage.setItem("contact-form-filled", 1);
    });
    form.init();
  }
};

const handleCanvasSize = () => {
  const absolute = 30;
  $(".canvas").outerHeight(
    $(window).height() -
      absolute -
      $(".canvas").offset().top -
      Math.abs($(".canvas").outerHeight(true) - $(".canvas").outerHeight())
  );
};
