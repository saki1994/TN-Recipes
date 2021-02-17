

var closeBtn = document.querySelector('.close-btn');
var openBtn = document.querySelector('.open-btn');


closeBtn.addEventListener("click", function() {
  document.querySelector('.main-navbar').style.width = "0";
});

openBtn.addEventListener("click", function() {
  document.querySelector('.main-navbar').style.width = "180px";
});
