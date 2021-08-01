import React from "react";
import { images } from "../../../../assets/js/images";
import { handleUrl } from "../../../utils";
import Image from "../../img";

function Upload({
  label,
  placeholder,
  type,
  required,
  name,
  validation,
  error,
  _relativeURL,
  _ID,
}) {
  return (
    <div
      className="input-container upload-container"
      style={{ display: type === "hidden" ? "none" : "" }}
    >
      <div className="upload-container-flex">
        <label htmlFor={name}>
          {label}
          {required && <span>*</span>}
        </label>
        <div className="upload-container-file">
          <button type="button" className="upload-container-trigger">
            Attach Resume
          </button>

          <section className="upload-container-file-name flex">
            <p className="upload-container-file-name-text"></p>
            <button type="button" className="upload-container-file-clear">
              <Image src={handleUrl(images.common.close, _relativeURL, _ID)} />
            </button>
          </section>
        </div>
        <input
          data-required={true}
          data-input="false"
          type="file"
          name={name}
          data-buttonText={placeholder}
          data-validation={validation}
          className="input upload"
        ></input>
      </div>
      <p className={`${name}-error input-error`}>{error}</p>
    </div>
  );
}

export default Upload;
