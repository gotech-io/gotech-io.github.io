import navbar from "./navbar/index.js";

export const init = () => {
  handleOnScroll();
  navbar.init();
  AOS.init({ once: true });
};




export const handleOnScroll = (className) => {
  setTimeout(() => {
    document.addEventListener(
      "scroll",
      () => {
        navbar.handleScroll(className);
      },
      { passive: true }
    );
  }, 1000);
};
