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
  }, 700)

});


(function () {
  // Add event listener
  document.addEventListener("mousemove", parallax);
  // const elem = document.querySelector("#g-letter");
  var g_letter = $('#g-letter')
  // var g_letter = $('#g-letter')
  // var g_letter = $('#g-letter')
  g_letter.css('left', '10px')
  // Magic happens here
  function parallax(e) {
    let _w = window.innerWidth / 2;
    let _h = window.innerHeight / 2;
    let _mouseX = e.clientX;
    let _mouseY = e.clientY;
    let _depth1 = `${(_mouseX - _w) * 0.01}%, ${(_mouseY - _h) * 0.01}%`;
    let x = `translate( ${_depth1} )`;
    console.log(x);
    // elem.style.transform = x;
    g_letter.css('transform', x )
  }

})();

// var object1=$('#green-blue-div');
// var object2=$('#red-yellow-div');
// var object3=$('#g-letter');

// var layer=$('body');

// layer.mousemove(function(e){
//    var valueX=(e.pageX * -1 / 12); 
//    var valueY=(e.pageY * -1 / 12); 

//     object1.css({
//         'transform':'translate3d('+valueX+'px,'+valueY+'px,0) rotate(20deg)'
//     });
// });

// layer.mousemove(function(e){
//    var valueX=(e.pageX * -1 / 15); 
//    var valueY=(e.pageY * -1 / 20); 

//     object2.css({
//         'transform':'translate3d('+valueX+'px,'+valueY+'px,0)'
//     });
// });

// layer.mousemove(function(e){
//    var valueX=(e.pageX * -1 / 15); 
//    var valueY=(e.pageY * -1 / 15); 

//     object3.css({
//         'transform':'translate3d('+valueX+'px,'+valueY+'px,0) rotate(-20deg)'
//     });
// });