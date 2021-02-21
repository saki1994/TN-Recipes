var closeBtn = document.querySelector('.close-btn');
var openBtn = document.querySelector('.open-btn');


var screenWidth = window.innerWidth;

closeBtn.addEventListener("click", function() {

  document.querySelector('.main-navbar').style.width = "0";

});

openBtn.addEventListener("click", function() {

  if (screenWidth <= 600) {
    document.querySelector('.main-navbar').style.width = "26%";
  } else if (screenWidth <= 900 && screenWidth >= 600) {
    document.querySelector('.main-navbar').style.width = "16%";

  } else {

    document.querySelector('.main-navbar').style.width = "180px";
  }

});
