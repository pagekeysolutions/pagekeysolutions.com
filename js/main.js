window.onload = function() {
  document.getElementById("year").innerHTML = new Date().getFullYear();
};

// analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-53512121-3', 'auto');
ga('send', 'pageview');


/* --------- Slider Code ---------- */
var currentSlide = 0;
var slides = document.getElementsByClassName("slide");
// Assign button listeners
for (var i = 0; i < slides.length; i++) {
  slides[i].querySelector(".slide-left").addEventListener("click", showPrev);
  slides[i].querySelector(".slide-right").addEventListener("click", showNext);
}
slides[currentSlide].style.display = "block";

function showNext() {
  slides[currentSlide].style.display = "none";
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = "block";
}
function showPrev() {
  console.log(currentSlide);
  slides[currentSlide].style.display = "none";
  currentSlide = (currentSlide - 1 + slides.length) % slides.length
  slides[currentSlide].style.display = "block";
}