var OrbitDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("orbitDancer");
};
OrbitDancer.prototype = Object.create(Dancer.prototype);
OrbitDancer.prototype.constructor = OrbitDancer;


OrbitDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  //this.$node.toggle();
};