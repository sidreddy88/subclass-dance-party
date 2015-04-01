var CountingBlinkyDancer = function(top, left, timeBetweenSteps){
  this.number = 0.5;
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node.html(this.number);
};

CountingBlinkyDancer.prototype = Object.create(BlinkyDancer.prototype);
CountingBlinkyDancer.prototype.constructor = CountingBlinkyDancer;
CountingBlinkyDancer.prototype.blinkyStep = BlinkyDancer.prototype.step;
CountingBlinkyDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    this.blinkyStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    // this.$node.toggle();
    this.number += 0.5;
    this.$node.html(this.number);
};