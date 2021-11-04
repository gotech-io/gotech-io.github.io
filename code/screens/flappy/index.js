import React from "react";
import animations from "../../../assets/js/animations";
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
          <h3 className="flappy-contact-content-title">
            Please enter your email in order to play the game
          </h3>
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
