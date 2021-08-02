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
    this.addEventsToUploadInput();
  }

  addEventsToUploadInput() {
    const uploadTrigger = getElement(
      `form.${this.formName} .upload-container-trigger`
    );
    if (!uploadTrigger) return;
    const uploadInput = getElement(`form.${this.formName} .upload`);
    uploadTrigger.addEventListener("click", () => {
      uploadInput.click();
    });
    uploadInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      let name;
      if (file) {
        name = file.name;
      }
      this.handleFileUploaded(name, uploadTrigger);
    });

    const clearBtn = getElement(
      `form.${this.formName} .upload-container-file-clear`
    );
    addEvent(clearBtn, "click", () => {
      this.handleFileUploaded("", uploadTrigger);
    });
  }

  handleFileUploaded(name, uploadBtn) {
    const input = getElement(`form.${this.formName} .upload`);
    this.handleFocus(input);
    const nameContainer = getElement(
      `form.${this.formName} .upload-container-file-name`
    );
    const text = nameContainer.querySelector(
      ".upload-container-file-name-text"
    );
    if (!name) {
      input.value = "";
      uploadBtn.style.display = "flex";
      text.innerText = " ";
      nameContainer.style.display = "none";
    } else {
      uploadBtn.style.display = "none";
      text.innerText = name;
      nameContainer.style.display = "flex";
    }
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
        return validateEmail(value, isRequired);
      case "phone":
        return validatePhone(value, isRequired);
      case "url":
        return validateUrl(value, isRequired);
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
    return errors.length === 0;
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

    const isValid = this.handleInputValues();
    if (isValid) {
      this.handleLoading(true);

      await this.submitFunc(e.target);
      this.handleLoading(false);
      this.handleSubmitted();
    }
  }

  handleLoading(show) {
    const loader = getElement(`form.${this.formName} .loader`);
    const submitBtn = getElement(`form.${this.formName} .submit`);
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

    const uploadTrigger = getElement(
      `form.${this.formName} .upload-container-trigger`
    );

    const submitBtn = getElement(`form.${this.formName} .submit`);
    submitBtn.style.display = "none";
    const successText = getElement(`form.${this.formName} .success`);
    successText.classList.add("success-active");
    if (!uploadTrigger) return;
    this.handleFileUploaded("", uploadTrigger);
  }

  init() {
    this.addEventToInputs();
    this.addSubmitEventToForm();
  }
}

export default Form;
