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
    <div className="input-container">
      <label htmlFor={name}>{label}</label>
      <textarea
        data-required={required}
        type={type}
        name={name}
        placeholder={placeholder}
        data-validation={validation}
        className="input textarea"
      ></textarea>
      <p className={`${name}-error input-error`}>{error}</p>
    </div>
  );
}

export default Input;
