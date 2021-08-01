import {
  addEvent,
  getElement,
  getElementAttribute,
  getElements,
} from "../heplers.js";
import { validateEmail, validatePhone, validateUrl } from "./utils.js";

class Form {
  formName;
  submitFunc;
  constructor(name, func) {
    this.formName = name;
    this.submitFunc = func;
  }

  getInputs() {
    return getElements(`form.${this.formName} .input`);
  }

  addEventToInputs() {
    const inputs = this.getInputs();
    inputs.forEach((input) => {
      addEvent(input, "focus", this.handleFocus.bind(this, input));
      addEvent(input, "blur", this.handleBlur.bind(this, input));
    });
  }

  handleBlur(input) {
    const isValid = this.validateInput(input);
    if (!isValid) {
      this.showError(input);
    }
  }

  handleFocus(input) {
    this.hideError(input);
  }

  validateInput(input) {
    const isRequired = getElementAttribute(input, "data-required");
    const validation = getElementAttribute(input, "data-validation");
    const value = input.value;
    switch (validation) {
      case "email":
        return validateEmail(value);
      case "phone":
        return validatePhone(value);
      case "url":
        return validateUrl(value);
      default:
        return isRequired ? !!value : true;
    }
  }

  handleInputValues() {
    const errors = [];
    const inputs = this.getInputs();
    inputs.forEach((input) => {
      const isValid = this.validateInput(input);
      if (!isValid) {
        this.showError(input);
        errors.push(true);
      }
    });
    return { isValid: errors.length === 0 };
  }

  showError(input) {
    const name = getElementAttribute(input, "name");
    const error = getElement(`.${this.formName} .${name}-error`);
    error.classList.add("input-error-active");
  }

  hideError(input) {
    const name = getElementAttribute(input, "name");
    const error = getElement(`.${this.formName} .${name}-error`);
    error.classList.remove("input-error-active");
  }

  addSubmitEventToForm() {
    const form = getElement(`.${this.formName}`);
    form.addEventListener("submit", this.handleSubmit.bind(this));
  }

  async handleSubmit(e) {
    e.preventDefault();

    const { isValid } = this.handleInputValues();
    if (isValid) {
      this.handleLoading(true);

      await this.submitFunc(e.target);
      this.handleLoading(false);
      this.handleSubmitted();
    }
  }

  handleLoading(show) {
    const loader = getElement(`.${this.formName} .loader`);
    const submitBtn = getElement(`.${this.formName} .submit`);
    if (show) {
      loader.style.display = "block";
      submitBtn.style.display = "none";
    } else {
      loader.style.display = "none";
      submitBtn.style.display = "block";
    }
  }

  handleSubmitted() {
    const inputs = this.getInputs();
    inputs.forEach((input) => {
      input.value = "";
    });
  }

  init() {
    this.addEventToInputs();
    this.addSubmitEventToForm();
  }
}

export default Form;
