DEBUG = true;
slideNum = 1;

$(document).ready(function() {
  var controller = new ScrollMagic.Controller();
  // Slide 1
  addSlide(controller, "#trigger1", "90%", "0", [
    TweenMax.to("#scroll-prompt, #pen-key, #swoops", 1, {opacity: 0}), 0,
    TweenMax.to("body", 1, {backgroundColor: "#18633F"}), 0,
    TweenMax.to("#get-started", 1, {opacity: 1}), 'default',
    TweenMax.to("#checks", 1, {left: "50%"}), 'default',
  ]);
  // Slide 2
  addSlide(controller, "#trigger2", "50%", "0", [
    TweenMax.to("#checks #line2", 1, {marginTop: "100%"}), 'default',
    TweenMax.to("#slide2-bubble1", 1, {opacity: 1}), 'default',
    TweenMax.to("#checks #line3", 1, {marginTop: "300%"}), 'default',
  ]);
  // Slide 3
  addSlide(controller, "#trigger3", "50%", "0", [
    TweenMax.to("#slide2-bubble1", 1, {opacity: 0}), 0,
    TweenMax.to("#checks #line1", 1, {opacity: 0, display: "none"}), 0,
    TweenMax.to("#checks #line2", 1, {marginTop: "0"}), 1,
    TweenMax.to("#slide2-bubble2", 1, {opacity: 1}), 2,
  ]);
  // Slide 4
  addSlide(controller, "#trigger4", "50%", "0", [
    TweenMax.to("#slide2-bubble2", 1, {opacity: 0}), 0,
    TweenMax.to("#checks #line2", 1, {opacity: 0, display: "none"}), 0,
    TweenMax.to("#checks #line3", 1, {marginTop: "0"}), 1,
    TweenMax.to("#slide2-bubble3", 1, {opacity: 1}), 2,
  ]);
});

function addSlide(a_controller, a_trigger, a_duration, a_offset, a_tweens) {
  scene = new ScrollMagic.Scene({triggerElement: a_trigger, duration: a_duration, offset: a_offset});
  timeline = new TimelineMax();
  // It is a staggered array. first element is the tween, second is its ordinal position in the timeline
  for (var i = 0; i < a_tweens.length; i += 2) {
    if (a_tweens[i+1] == 'default') {
      timeline.add(a_tweens[i]);
    } else {
      timeline.add(a_tweens[i], a_tweens[i+1]);
    }
  }
  scene.setTween(timeline);
  if (DEBUG) {
    scene.addIndicators({name: "Slide " + slideNum});
    slideNum++;
  }
  scene.addTo(a_controller);
}
