import React from "react";

function Input({
  label,
  placeholder,
  type,
  required,
  name,
  validation,
  error,
}) {
  return (
    <div
      className="input-container"
      style={{ display: type === "hidden" ? "none" : "" }}
    >
      <label htmlFor={name}>
        {label}
        {required && <span>*</span>}
      </label>
      <input
        data-required={required}
        type={type}
        name={name}
        placeholder={placeholder}
        data-validation={validation}
        className="input"
      ></input>
      <p className={`${name}-error input-error`}>{error}</p>
    </div>
  );
}

export default Input;
