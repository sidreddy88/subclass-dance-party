var SpinDancer = function(top, left, timeBetweenSteps){
  timeBetweenSteps = timeBetweenSteps / 4;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.angle = 0;
  this.$node.addClass("mario");
  this.$node.removeClass("dancer");
};

SpinDancer.prototype = Object.create(Dancer.prototype);
SpinDancer.prototype.constructor = SpinDancer;
SpinDancer.prototype.oldStep = Dancer.prototype.step;
SpinDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    this.oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    
    this.angle += 30;
    this.$node.css ("transform", "rotate(" + this.angle + "deg)");

   // this.$node.toggle();
};