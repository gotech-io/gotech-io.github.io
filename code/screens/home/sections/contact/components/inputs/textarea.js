import React from "react";

const Textarea = ({ label, name, placeholder, error }) => {
  return (
    <div className="contact-form-section form-textarea">
      <label htmlFor={name}>{label}</label>
      <textarea
        name={name}
        placeholder={placeholder}
        className="contact-form-section-input"
      />
      <p className={`${name}-error contact-form-section-error`}>{error}</p>
    </div>
  );
};

export default Textarea;
