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
  $("#menu-item-text .letters").html(getWord($(this).html()));
  var textWrapper = document.querySelector('.ml1 .letters');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  $(".letter").css('opacity', '0')
  anime.timeline({loop: false})
    .add({
      targets: '.ml1 .letter',
      scaleX: [0,1],
      opacity: [0,1],
      translateZ: [0,1],
      easing: "easeOutExpo",
      duration: 100,
      delay: (el, i) => 50 * (i+1)
    });

  $('#menu-item-text').css('top', '0');
}).on("mouseout", function () {
  $('#menu-item-text').css('top', '-100%');
}).on("click", function () {
  $('#menu-item-text').css('top', '-100%');
});

function getWord(word) {
  return word;
}
// var textWrapper = document.querySelector('.ml1 .letters');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: true})
//   .add({
//     targets: '.ml1 .letter',
//     scale: [0.3,1],
//     opacity: [0,1],
//     translateZ: 0,
//     easing: "easeOutExpo",
//     duration: 600,
//     delay: (el, i) => 70 * (i+1)
//   }).add({
//     targets: '.ml1 .line',
//     scaleX: [0,1],
//     opacity: [0.5,1],
//     easing: "easeOutExpo",
//     duration: 700,
//     offset: '-=875',
//     delay: (el, i, l) => 80 * (l - i)
//   }).add({
//     targets: '.ml1',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });
// particlesJS.load('particles-js', './particles.json')
