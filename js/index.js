window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("nav-bar").style.background = "#fff";
    document.getElementById("nav-bar").style.boxShadow = "0 4px 20px -5px rgba(0, 0, 0, 0.4)";
  } else {
    document.getElementById("nav-bar").style.background = "rgba(255, 255, 255, 0)";
    document.getElementById("nav-bar").style.boxShadow = "0 -4px 0px -5px rgba(0, 0, 0, 0.4)";
  }
}

$(function() {
  $('#main-title-container .header-container').animate({
    top: '0px',
    opacity : 1
  }, 200);

  $('#header-nav a').animate({
    top: '0',
    opacity : 1
  }, 100);

  $('.navigation-container .brand-logo').animate({
    opacity : 1
  }, 200);
  $('#main-animation').animate({
    opacity : 1
  }, 300);

});

