import { addEvent, getElements } from "../heplers.js";
import { init } from "../index.js";

export const addEventToJobs = () => {
  const jobs = getElements(".careers-job");
  jobs.forEach((job) => {
    const title = job.querySelector(".careers-job-title");
    const body = job.querySelector(".careers-job-body");
    addEvent(title, "click", toggleBody.bind(null, body));
  });
};

const toggleBody = (body) => {
  const height = body.scrollHeight;

  const activeClassname = "careers-job-body-active";
  if (body.classList.contains(activeClassname)) {
    body.style.maxHeight = 0;
    body.classList.remove(activeClassname);
  } else {
    body.style.maxHeight = `${height}px`;
    body.classList.add(activeClassname);
  }
};

window.onload = () => {
  addEventToJobs();
  init();
};
