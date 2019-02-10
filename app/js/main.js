$(document).ready(function() {
  var controller = new ScrollMagic.Controller();
  // Slide 1
  var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: "90%", offset: "0"});
  var timeline = new TimelineMax();
  timeline.add(
    TweenMax.to("#scroll-prompt, #pen-key, #swoops", 1, {opacity: 0}), 0
  ).add(
    TweenMax.to("body", 1, {backgroundColor: "#18633F"}), 0
  ).add(
    TweenMax.to("#get-started", 1, {opacity: 1})
  ).add(
    TweenMax.to("#checks", 1, {left: "50%"})
  );
  scene.setTween(timeline);
  scene.addIndicators({name: "Slide 1"})  // add indicators (requires plugin)
  scene.addTo(controller);
  // Slide 2
  scene = new ScrollMagic.Scene({triggerElement: "#trigger2", duration: "50%", offset: "0"});
  timeline = new TimelineMax();
  // tween1 = ;
  // tween2 = TweenMax.to("body", 1, {backgroundColor: "#18633F"});
  timeline.add(
    TweenMax.to("#checks #line2", 1, {marginTop: "100%"})
  ).add(
    TweenMax.to("#slide2-bubble", 1, {opacity: 1})
  );
  scene.setTween(timeline);
  scene.addIndicators({name: "Slide 2"})  // add indicators (requires plugin)
  scene.addTo(controller);
});
