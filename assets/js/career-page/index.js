import { init } from "../index.js";
import Form from "../form/index.js";
import { getElement, getElementAttribute, getElements } from "../heplers.js";
import emailJs from "../services/email-js/index.js";
let title;
window.onload = () => {
  init();
  createForm();
  title = getElement(".career-page-title").innerText;
  const inputs = getElements(".career-form .input");
  inputs.forEach((input) => {
    const name = getElementAttribute(input, "name");
    if (name === "position") {
      input.value = title;
    }
  });
};

const formSubmit = async (form) => {
  await emailJs.apply(form);
};

const createForm = () => {
  const form = new Form("career-form", formSubmit);
  form.init();
};
