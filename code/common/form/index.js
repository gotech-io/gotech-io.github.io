import Loader from "../loader";
import React from "react";
import animations from "../../../assets/js/animations";

function Form({ name, submit, inputs, title, successText = "Thank you!" }) {
  return (
    <form
      className={`${name} form`}
      data-aos-anchor-placement="top-center"
      data-aos={animations.zoomIn}
    >
      {title && <h4 className="form-title">{title}</h4>}
      <div className="form-flex">{inputs}</div>
      <section className="form-submit">
        <input type="submit" value={submit} className="submit" />
        <Loader />
        <section className="success">{successText}</section>
      </section>
    </form>
  );
}

export default Form;
