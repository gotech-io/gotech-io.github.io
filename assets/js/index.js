import navbar from "./navbar/index.js";

export const init = () => {
  handleOnScroll();
  navbar.init();

  AOS.init({ once: true });
};

export const handleOnScroll = () => {
  setTimeout(() => {
    document.addEventListener(
      "scroll",
      () => {
        navbar.handleScroll();
      },
      { passive: true }
    );
  }, 1000);
};
