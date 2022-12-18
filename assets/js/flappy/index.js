import Form from "../form/index.js";
import { init as InitApp } from "../index.js";
import store from "../services/firebase.js";

const LOCAL_STORAGE_EMAIL = "flappy-duck-email";
const LOCAL_STORAGE_NAME = "flappy-duck-name";

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
  const email = localStorage.getItem(LOCAL_STORAGE_EMAIL);
  const name = localStorage.getItem(LOCAL_STORAGE_NAME);
  store.sendScore(email, name, score);
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
  const isFormAlreadyFilled = localStorage.getItem(LOCAL_STORAGE_EMAIL);
  const formContainer = document.querySelector(".flappy-contact");

  if (isFormAlreadyFilled) {
    loadGame();
    formContainer.style.display = "none";
  } else {
    formContainer.style.display = "flex";
    new Form("flappy-form", (event) => {
      onFormSubmit(formContainer, event);
    }).init();
  }
};

const onFormSubmit = (formContainer, event) => {
  formContainer.style.display = "none";
  var elements = event.elements;
  var obj = {};
  for (var i = 0; i < elements.length; i++) {
    var item = elements.item(i);
    obj[item.name] = item.value;
  }
  store.sendScore(obj.email, obj.name, 0);
  loadGame();
  localStorage.setItem(LOCAL_STORAGE_EMAIL, obj.email);
  if (obj.name) {
    localStorage.setItem(LOCAL_STORAGE_NAME, obj.name);
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
