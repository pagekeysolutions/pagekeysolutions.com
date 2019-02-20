DEBUG = false;
slideNum = 1;

$(document).ready(function() {
  var controller = new ScrollMagic.Controller();
  // Slide 1 - Show all lines on services
  addSlide(controller, "#trigger1", "90%", "0", [
    TweenMax.to("#scroll-prompt, #pen-key, #swoops", 1, {opacity: 0}), 0,
    TweenMax.to("body", 1, {backgroundColor: "#18633F"}), 0,
    TweenMax.to("#get-started", 1, {opacity: 1}), 'default',
    TweenMax.to("#checks", 1, {left: "50%", ease: Power2.easeInOut}), 'default',
  ]);
  // Slide 2 - Show line 1 on services
  addSlide(controller, "#trigger2", "50%", "0", [
    TweenMax.to("#checks #line2", 1, {marginTop: "200%", ease: Power2.easeInOut}), 'default',
    TweenMax.to("#slide2-bubble1", 1, {opacity: 1}), 'default',
    TweenMax.to("#checks #line3", 1, {marginTop: "300%", ease: Power2.easeInOut}), 'default',
  ]);
  // Slide 3 - Show line 2 on services
  addSlide(controller, "#trigger3", "50%", "0", [
    TweenMax.to("#slide2-bubble1", 1, {opacity: 0}), 0,
    TweenMax.to("#checks #line1", 1, {opacity: 0, display: "none"}), 0,
    TweenMax.to("#checks #line2", 1, {marginTop: "0", ease: Power2.easeInOut}), 1,
    TweenMax.to("#slide2-bubble2", 1, {opacity: 1, ease: Power2.easeInOut}), 2,
  ]);
  // Slide 4 - Show line 3 on services
  addSlide(controller, "#trigger4", "50%", "0", [
    TweenMax.to("#slide2-bubble2", 1, {opacity: 0}), 0,
    TweenMax.to("#checks #line2", 1, {opacity: 0, display: "none"}), 0,
    TweenMax.to("#checks #line3", 1, {marginTop: "0", ease: Power2.easeInOut}), 1,
    TweenMax.to("#slide2-bubble3", 1, {opacity: 1, ease: Power2.easeInOut}), 2,
  ]);
  // Slide 5 - Show first work on portfolio
  addSlide(controller, "#trigger5", "50%", "0", [
    TweenMax.to("#slide2-bubble3", 1, {opacity: 0}), 0,
    TweenMax.to("#checks #line3", 1, {opacity: 0, display: "none"}), 0,
    TweenMax.to("body", 1, {backgroundColor: "#E76104"}), 1,
    TweenMax.to("#work1", 1, {css:{className:'+=selected'}}, .01), 'default',
    TweenMax.to("#portfolio-bubble1, #portfolio-feature1, .slide3 h2, #works", 1, {opacity: 1}), 2,
    TweenMax.to("#works", 1, {display: 'flex'}), 2,
  ]);
  // Slide 6 - Portfolio work 2
  addSlide(controller, "#trigger6", "50%", "0", [
    TweenMax.to("#work1", 1, {css:{className:'-=selected'}}, .01), 'default',
    TweenMax.to("#work2", 1, {css:{className:'+=selected'}}, .01), 'default',
    TweenMax.to("#portfolio-bubble1, #portfolio-feature1", 1, {opacity: 0}), 'default',
    TweenMax.to("#portfolio-bubble2, #portfolio-feature2", 1, {opacity: 1}), 'default',
  ]);
  // Slide 7 - Portfolio work 3
  addSlide(controller, "#trigger7", "50%", "0", [
    TweenMax.to("#work2", 1, {css:{className:'-=selected'}}, .01), 'default',
    TweenMax.to("#work3", 1, {css:{className:'+=selected'}}, .01), 'default',
    TweenMax.to("#portfolio-bubble2, #portfolio-feature2", 1, {opacity: 0}), 'default',
    TweenMax.to("#portfolio-bubble3, #portfolio-feature3", 1, {opacity: 1}), 'default',
  ]);
  // Slide 8 - Contact
  addSlide(controller, "#trigger8", "50%", "0", [
    TweenMax.to("body", 1, {backgroundColor: "white"}), 1,
    TweenMax.to("#portfolio-bubble3, #portfolio-feature3, .slide3 h2, #works", 1, {opacity: 0}), 'default',
    TweenMax.to("#get-started", 1, {right: "-100%"}), 'default',
    TweenMax.to(".logo", 1, {opacity: 0}), 'default',
    TweenMax.to(".logo, nav.nav-orig", 1, {display:'none'}), 'default',
    TweenMax.to(".logo-final, nav.nav-final, .contact-info", 1, {opacity: 1}), 'default',
    TweenMax.to(".logo-final, nav.nav-final", 1, {display: 'inherit'}), 'default',
    TweenMax.to(".contact-info", 1, {display: 'flex'}), 'default',
    TweenMax.to("footer", 1, {bottom: 0, ease: Power2.easeInOut}), 'default',
  ]);
  // Slide 9 - Contact w/ blog circled
  addSlide(controller, "#trigger9", "50%", "0", [
    TweenMax.to(".circled", 1, {opacity: 1}), 1,
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
