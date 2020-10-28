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

$(function () {
  $('#main-title-container .header-container').animate({
    top: '0px',
    opacity: 1
  }, 200);

  $('#header-nav a').animate({
    top: '0',
    opacity: 1
  }, 100);

  $('.navigation-container .brand-logo').animate({
    opacity: 1
  }, 200);
  $('#main-animation').animate({
    opacity: 1
  }, 300);

  setTimeout(function () {
    $("#green-blue-div").css("transform", "scale(1)");
  }, 200)

  setTimeout(function () {
    $("#red-yellow-div").css("transform", "scale(1)");
  }, 500)

  setTimeout(function () {
    $("#g-letter").css("transform", "scale(1)");
  }, 800)

});


var title_text = "GoTech";
var sub_title_text = "Providing tech as a service";
var speed = 50;
var i = 0;
var j = 0;

function typeWriter(){
  if ( i < title_text.length) {
    document.getElementById("main-title").innerHTML += title_text.charAt(i);
    i++;
    setTimeout(typeWriter, speed)
  }
}

function typeWriter_subtitle(){
  if ( j < sub_title_text.length) {
    document.getElementById("main-sub-title").innerHTML += sub_title_text.charAt(j);
    j++;
    setTimeout(typeWriter_subtitle, speed)
  }
}

$(document).ready(function(){
  setTimeout(typeWriter(), 2000)
  setTimeout(typeWriter_subtitle(), 2000)
});

