$(document).ready(function() {
  console.log('ready');
  var scene = new ScrollMagic.Scene({triggerElement: ".main", duration: 300})
  							 // animate color and top border in relation to scroll position
  							scene.setTween(".main", {backgroundColor: 'green'})  // the tween durtion can be omitted and defaults to 1
  							scene.addIndicators({name: "2 (duration: 300)"})  // add indicators (requires plugin)
  							scene.addTo(controller);
});
