$(document).ready(function() {
  $(".hamburger").click(function() {
      elem = $("nav");
      $("nav ul").slideToggle("medium");
  });
});

window.onload = function() {
  document.getElementById("year").innerHTML = new Date().getFullYear();
};
