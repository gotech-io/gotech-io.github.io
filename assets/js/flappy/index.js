import Form from "../form/index.js";
import { init as InitApp } from "../index.js";
import store from "../services/firebase.js";

const LOCAL_STORAGE_NAME = "flappy-duck-email";
window.onload = () => {
  initForm();
  InitApp();
};

const addResizeEventToCanvas = () => {
  handleCanvasSize();
  window.addEventListener("resize", () => {
    handleCanvasSize();
  });
};

const onGameLoaded = () => {
  const loader = document.querySelector(".flappy-loader");
  loader.style.display = "none";
};

const onGameEnded = (score) => {
  const email = localStorage.getItem(LOCAL_STORAGE_NAME);
  store.sendScore(email, score);
};

const loadGame = () => {
  const loader = document.querySelector(".flappy-loader");
  loader.style.display = "block";
  init(onGameLoaded, onGameEnded);
  $("canvas").trigger("gameEnd");
  addResizeEventToCanvas();
  window.scrollTo(0, 0);
};

const initForm = () => {
  const isFormAlreadyFilled = localStorage.getItem(LOCAL_STORAGE_NAME);
  const formContainer = document.querySelector(".flappy-contact");

  if (isFormAlreadyFilled) {
    loadGame();
    formContainer.style.display = "none";
  } else {
    formContainer.style.display = "flex";
    new Form("flappy-form", (event) => {
      onFormSubmit(formContainer);
    }).init();
  }
};

const onFormSubmit = (formContainer) => {
  formContainer.style.display = "none";
  const input = document.querySelector(".input-container input");
  const email = input.value;
  store.sendScore(email, 0);
  loadGame();
  localStorage.setItem(LOCAL_STORAGE_NAME, email);
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
