import {
  addEvent,
  getElement,
  getElements,
  toggleBodyOverflow,
} from "../heplers.js";
let leaveTimeout;
let scrollPos = 0;
const handleBackground = () => {
  const navbar = getElement(".navbar");

  const offsetTop = window.pageYOffset;
  if (offsetTop >= 120) {
    navbar.classList.add("navbar-active");
  } else {
    navbar.classList.remove("navbar-active");
  }
};

const handleTransform = () => {
  const navbar = getElement(".navbar");

  if (document.body.getBoundingClientRect().top > scrollPos) {
    navbar.classList.remove("navbar-hidden");
  } else {
    if (document.body.getBoundingClientRect().top < -80) {
      navbar.classList.add("navbar-hidden");
    }
  }
  scrollPos = document.body.getBoundingClientRect().top;
};

const handleScroll = () => {
  handleBackground();
  handleTransform();
};

const addEventToMobileToggle = () => {
  const toggle = getElement(".navbar-mobile-toggle");
  addEvent(toggle, "click", toggleMobileMenu);
};

const addEventToMobileOverlay = () => {
  const overlay = getElement(".navbar-mobile-overlay");
  addEvent(overlay, "click", hideMenu);
};

const addEventToMobileNavigationLink = () => {
  const links = getElements(".navbar-navigation-link");
  links.forEach((link) => {
    addEvent(link, "click", hideMenu);
  });
};

const addLinkHoverEvent = () => {
  const links = getElements(".navbar-navigation-link");
  links.forEach((link) => {
    addEvent(link, "mouseenter", handleIndicator.bind(null, link));
    addEvent(link, "mouseleave", hideIndicator);
  });
};

const hideIndicator = () => {
  leaveTimeout = setTimeout(() => {
    const indicator = getElement(".navbar-navigation-indicator");
    indicator.style.opacity = 0;
  }, 500);
};

const handleIndicator = (elem) => {
  window.clearTimeout(leaveTimeout);
  const { left, width } = elem.getBoundingClientRect();
  const indicator = getElement(".navbar-navigation-indicator");
  indicator.style.left = `${left}px`;
  indicator.style.width = `${width}px`;
  setTimeout(() => {
    indicator.style.opacity = 1;
  }, 100);
};

const hideMenu = () => {
  const active = "navbar-mobile-active";
  const menu = getElement(".navbar");
  toggleBodyOverflow(false);
  menu.classList.remove(active);
};

const toggleMobileMenu = () => {
  const active = "navbar-mobile-active";
  const menu = getElement(".navbar");
  if (menu.classList.contains(active)) {
    toggleBodyOverflow(false);
    menu.classList.remove(active);
  } else {
    toggleBodyOverflow(true);
    menu.classList.add(active);
  }
};

const init = () => {
  addEventToMobileToggle();
  handleBackground();
  addEventToMobileNavigationLink();
  addEventToMobileOverlay();
  addLinkHoverEvent();
};

export default {
  handleScroll,
  handleBackground,
  init,
};
