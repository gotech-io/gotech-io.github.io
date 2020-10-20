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


// (function () {
//   // Add event listener
//   document.addEventListener("mousemove", parallax);
//   // const elem = document.querySelector("#g-letter");
//   // var g_letter = $('#g-letter')
//   // var g_letter = $('#g-letter')
//   g_letter.css('left', '10px')
//   // Magic happens here
//   function parallax(e) {
//     let _w = window.innerWidth / 2;
//     let _h = window.innerHeight / 2;
//     let _mouseX = e.clientX;
//     let _mouseY = e.clientY;
//     let _depth1 = `${(_mouseX - _w) * 0.01}%, ${(_mouseY - _h) * 0.01}%`;
//     let x = `translate( ${_depth1} )`;
//     // console.log(x);
//     // elem.style.transform = x;
//     g_letter.css('transform', x)
//   }



// })();

// $('body').mousemove(function (e) {
//   var g_letter = $('#g-letter')
//   let _w = window.innerWidth / 2;
//   let _h = window.innerHeight / 2;
//   let _mouseX = e.clientX;
//   let _mouseY = e.clientY;
//   let _depth1 = `${(_mouseX - _w) * 0.01}%, ${(_mouseY - _h) * 0.01}%`;
//   let x = `translate( ${_depth1} )`;
//   // console.log(x);
//   // elem.style.transform = x;
//   g_letter.css('transform', x)
// });

// $(document).ready(function () {
//   var $one = $('#g-letter');
//   var $two = $('#red-yellow-div');
//   var $three = $('#green-blue-div'),
//     browserPrefix = "",
//     usrAg = navigator.userAgent;
//   if (usrAg.indexOf("Chrome") > -1 || usrAg.indexOf("Safari") > -1) {
//     browserPrefix = "-webkit-";
//   } else if (usrAg.indexOf("Opera") > -1) {
//     browserPrefix = "-o";
//   } else if (usrAg.indexOf("Firefox") > -1) {
//     browserPrefix = "-moz-";
//   } else if (usrAg.indexOf("MSIE") > -1) {
//     browserPrefix = "-ms-";
//   }

//   $(document).mousemove(function (event) {
//     var cx = Math.ceil(window.innerWidth / 2.0),
//       cy = Math.ceil(window.innerHeight / 2.0),
//       dx = event.pageX - cx,
//       dy = event.pageY - cy,
//       tiltx = (dy / cy),
//       tilty = - (dx / cx),
//       radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2)),
//       degree = (radius * 15);

//     shadx = degree * tiltx;   /*horizontal shadow*/
//     shady = degree * tilty;   /*vertical shadow*/

//     $one.css(browserPrefix + 'transform', 'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)');
//     $two.css(browserPrefix + 'transform', 'rotate3d(' + tiltx + ', ' + -tilty + ', 0, ' + degree + 'deg)');
//     $three.css(browserPrefix + 'transform', 'rotate3d(' + -tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)');

//     /*       if(dx>cx) without that horizontal values are reversed
//               $('#div1').css('box-shadow', + (-shady) + 'px ' + (-shadx) +'px 5px #3D352A');
//           else $('#div1').css('box-shadow', + shady + 'px ' + (-shadx) +'px 5px #3D352A'); */
//   });
// });