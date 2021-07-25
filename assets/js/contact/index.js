import {
  addEvent,
  getElement,
  getElementAttribute,
  getElements,
} from "../heplers.js";
import emailJs from "../services/email-js/index.js";
const addEventsToForm = () => {
  const form = getElement(".contact-form");
  addEvent(form, "submit", handleSubmit);
  const inputs = getInputs();
  inputs.forEach((input) => {
    addEvent(input, "focus", () => handleFocus(input));
    addEvent(input, "blur", () => handleBlur(input));
  });
};

const getInputs = () => {
  return getElements(".contact-form-section-input");
};

const handleBlur = (input) => {
  const isValid = validateInput(input.name, input.value);
  if (!isValid) {
    showError(input);
  }
};

const showError = (input) => {
  const name = getElementAttribute(input, "name");
  const error = getElement(`.${name}-error`);
  error.classList.add("contact-form-section-error-active");
};

const hideError = (input) => {
  const name = getElementAttribute(input, "name");
  const error = getElement(`.${name}-error`);
  error.classList.remove("contact-form-section-error-active");
};

const handleFocus = (input) => {
  hideError(input);
};

export const validateEmail = (value) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isValidEmail = re.test(String(value).toLowerCase());
  return isValidEmail;
};

const validateInput = (name, value) => {
  switch (name) {
    case "email":
      return validateEmail(value);
    default:
      return !!value;
  }
};

const handleSubmit = async (e) => {
  e.preventDefault();
  const { isValid, body } = varifyInputsData();

  if (isValid) {
    handleLoading(true);
    await emailJs.subscribe(body);
    handleLoading(false);
    handleSubmitted();
  }
};

const handleSubmitted = () => {
  const inputs = getInputs();
  inputs.forEach((input) => {
    input.value = "";
  });
};

const handleLoading = (show) => {
  const loader = getElement(".contact-loader");
  const submitBtn = getElement(".submit");
  if (show) {
    loader.style.display = "block";
    submitBtn.style.display = "none";
  } else {
    loader.style.display = "none";
    submitBtn.style.display = "block";
  }
};

const varifyInputsData = () => {
  const errors = [];
  const body = {};
  const inputs = getInputs();
  inputs.forEach((input) => {
    const name = getElementAttribute(input, "name");
    const value = input.value;
    body[name] = value;
    const isValid = validateInput(name, value);
    if (!isValid) {
      showError(input);
      errors.push(true);
    }
  });
  return { isValid: errors.length === 0, body };
};

const init = () => {
  addEventsToForm();
};

export default {
  init,
};
