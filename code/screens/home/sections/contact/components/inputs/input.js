import React from "react";

const Input = ({ type, name, label, placeholder, error }) => {
  return (
    <div className="contact-form-section">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="contact-form-section-input"
      ></input>
      <p className={`${name}-error contact-form-section-error`}>{error}</p>
    </div>
  );
};

export default Input;
