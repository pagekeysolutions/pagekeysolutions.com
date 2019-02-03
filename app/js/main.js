$(document).ready(function() {
  var controller = new ScrollMagic.Controller();
  // Slide 1
  var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: "75%", offset: "0"});
  var timeline = new TimelineMax();
  timeline.add(
    TweenMax.to("#scroll-prompt, #pen-key, #swoops", 1, {opacity: 0}), 0
  ).add(
    TweenMax.to("body", 1, {backgroundColor: "#18633F"}), 0
  ).add(
    TweenMax.to("#get-started", 1, {opacity: 1})
  ).add(
    TweenMax.from("#checks", 1, {top: "100%"})
  );
  scene.setTween(timeline);
  // scene.addIndicators({name: "Slide 1"})  // add indicators (requires plugin)
  scene.addTo(controller);
  // Slide 2
  // scene = new ScrollMagic.Scene({triggerElement: "#trigger2", duration: "50%", offset: "0"});
  // timeline = new TimelineMax();
  // tween1 = ;
  // tween2 = TweenMax.to("body", 1, {backgroundColor: "#18633F"});
  // timeline.add(tween1);
  // scene.setTween(timeline);
  // scene.addIndicators({name: "Scene 2"})  // add indicators (requires plugin)
  // scene.addTo(controller);
});
