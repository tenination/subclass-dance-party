var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);
  this.timeBetweenSteps = timeBetweenSteps;
};

Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function() {
  //this.$node.addClass('lineUp');
  this.$node.animate({
    //opacity: 1.00,
    left: "+=50",
    top: "50vh"
  }, 500, function() {
    // Animation complete.
  });
  //setTimeout(this.step.bind(this), this.timeBetweenSteps);
};