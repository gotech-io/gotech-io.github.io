import React from "react";
import animations from "../../../assets/js/animations";
import { handleUrl } from "../../utils";

function Flappy({ _relativeURL, _ID, form }) {
  return (
    <div className="flappy">
      <div style={{ fontFamily: "PressStart" }}></div>
      <div className="flappy-contact">
        <section className="flappy-contact-overlay"></section>
        <div data-aos={animations.down}>{form}</div>
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
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      ></script>
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
