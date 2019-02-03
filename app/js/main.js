$(document).ready(function() {
  var controller = new ScrollMagic.Controller();
  // Slide 1
  var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: "50%", offset: "0"});
  var timeline = new TimelineMax();
  var tween1 = TweenMax.to(".scroll-prompt, .pen-key, .swoops", 1, {opacity: 0});
  var tween2 = TweenMax.to("body", 1, {backgroundColor: "#18633F"});
  timeline.add(tween1).add(tween2);
  scene.setTween(timeline);
  scene.addIndicators({name: "Slide 1"})  // add indicators (requires plugin)
  scene.addTo(controller);
  // Slide 2
  scene = new ScrollMagic.Scene({triggerElement: "#trigger2", duration: "50%", offset: "0"});
  timeline = new TimelineMax();
  // tween1 = TweenMax.to(".scroll-prompt, .pen-key, .swoops", 1, {opacity: 0});
  // tween2 = TweenMax.to("body", 1, {backgroundColor: "#18633F"});
  // timeline.add(tween1).add(tween2);
  scene.setTween(timeline);
  scene.addIndicators({name: "Scene 2"})  // add indicators (requires plugin)
  scene.addTo(controller);
});
