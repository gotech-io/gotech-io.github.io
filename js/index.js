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


$('.navigation-links a').on("mouseover", function () {
  $("#menu-item-text span").html(getWord($(this).html()));
  $('#menu-item-text').css('top', '0');
}).on("mouseout", function () {
  $('#menu-item-text').css('top', '-100%');
}).on("click", function () {
  $('#menu-item-text').css('top', '-100%');
});

function getWord(word) {
  return word;
}

particlesJS.load('particles-js', './particles.json')
