import React from "react";
import animations from "../../../assets/js/animations";
import { images } from "../../../assets/js/images";
import Loader from "../../common/loader";
import { handleUrl } from "../../utils";

function Flappy({ _relativeURL, _ID, form }) {
  return (
    <div className="flappy">
      <Loader customClassName="flappy-loader" />
      <div style={{ fontFamily: "PressStart" }}></div>
      <div className="flappy-contact">
        <section className="flappy-contact-overlay"></section>
        <div data-aos={animations.down} className="flappy-contact-content">
          <div className="flappy-contact-main">
            <img
              src={handleUrl(images.common.logo, _relativeURL, _ID)}
              className="flappy-contact-main-logo"
            />
            <section>
              <p>
                <strong>1. </strong>Follow us
              </p>

              <img
                className="flappy-contact-main-instagram"
                src={handleUrl(images.common.instagram, _relativeURL, _ID)}
              />
            </section>
            <p>
              <strong>2. </strong>Take a selfie with our duck and upload it to
              your story
            </p>
            <p>
              <strong>3. </strong> Tag us
              <strong>
                <a
                  href="https://www.instagram.com/gotech.group/"
                  target="_blank"
                >
                  {" "}
                  @gotech.group
                </a>{" "}
              </strong>
            </p>
            <p>
              And one of you will win <strong>Bose 700 Headphones!!!</strong>
            </p>
            <div className="flappy-contact-main-bottom">
              <img
                src={handleUrl(images.flappyDuck.duck, _relativeURL, _ID)}
                alt="duck"
                className="flappy-duck-img"
              />

              <img
                src={handleUrl(images.flappyDuck.bose, _relativeURL, _ID)}
                alt="bose"
                className="flappy-bose-img"
              />
            </div>
          </div>
          {form}
        </div>
      </div>
      <div class="canvas-container" id="game">
        <canvas
          id="testCanvas"
          width="768"
          height="1024"
          className="canvas"
        ></canvas>
      </div>

      <script
        src={handleUrl("/assets/js/flappy/app.js", _relativeURL, _ID)}
      ></script>
      <script
        type="module"
        src={handleUrl("/assets/js/flappy/index.js", _relativeURL, _ID)}
      ></script>
    </div>
  );
}
export default Flappy;
