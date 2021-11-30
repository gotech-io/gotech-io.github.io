import { images } from "../images/index.js";
import { handleOnScroll } from "../index.js";

window.onload = () => {
  AOS.init({ once: true });
  changeNavbarLogo()
  initCareers()
  handleOnScroll('careers-active-navbar')
};


const initCareers = () => {
  window.comeetInit = function() {
    COMEET.init({
       "token":       "7432B9215C9244FE86E8632D5244FE863A18",
       "company-uid": "47.003",
       "company-name":"GoTech",
       "candidate-source-storage": false
       //add more parameters here
    });

 };
 (function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) {return; } js = d.createElement(s); js.id = id;
 js.src = "//www.comeet.co/careers-api/api.js"; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'comeet-jsapi'));
 (function(){var a=function(){window.COMEET.set("candidate-source-storage",!0)};window.COMEET?a():window.comeetUpdate=a})();
}


const changeNavbarLogo = () => {
  const logo = document.querySelector('.navbar-logo img')
  logo.src = images.common.whiteLogo
}