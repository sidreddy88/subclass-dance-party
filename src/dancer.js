// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){

  this.timeBetweenSteps = timeBetweenSteps;
  this.goingUp = true;
  
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  var colors = ["green", "blue", "yellow", "orange", "purple", "red", "white"];
  this.color = colors[Math.floor (Math.random () * colors.length)];
  this.$node.css ("border-color", this.color);

  this.$node.on ("hitTop", function () {
     
     this.$node.animate({top: this.minPosition}, 1000, "swing", function () {
        this.$node.trigger("hitBottom");
       }.bind(this));
  }.bind (this));

  this.$node.on ("hitBottom", function () {
      
     this.$node.animate({top: this.maxPosition}, 1000, "swing", function () {
        this.$node.trigger("hitTop");
       }.bind(this));
  }.bind(this));


  this.$node.mouseover (function () { 
     
       this.$node.animate({top: this.maxPosition}, 500, "swing", function () {
        this.$node.trigger("hitTop");
       }.bind(this));
      

      this.$node.css ("border-color", "aqua");
  }.bind (this));

  this.step();

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);

  this.startingPosition = +(this.$node.css("top").replace ("px", ""));
  this.maxMove = 100;
  this.minPosition = (this.startingPosition + this.maxMove).toString() + "px";
  var differenceinPosition = this.startingPosition - this.maxMove;
  var maxPosition = Math.max ((differenceinPosition),0);
  this.maxPosition = maxPosition.toString() + "px";


};

Dancer.prototype.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };
  
Dancer.prototype.lineUp = function(){
  this.$node.animate({top: "0"}, 2000);
};

Dancer.prototype.matchNearest = function(){
  var closestDistance = Infinity;
  var closestDancer = null;
  var closestDancerIndex = -1;
  for (var i = 0; i < window.dancers.length; i++) {
    var x_distance = Math.abs(this.$node.position().left - window.dancers[i].$node.position().left);
    var y_distance = Math.abs(this.$node.position().top - window.dancers[i].$node.position().top);
    var distance = Math.sqrt((x_distance*x_distance) + (y_distance*y_distance));
    if (distance !== 0 && distance < closestDistance) {
      closestDistance = distance;
      closestDancer = window.dancers[i];
      closestDancerIndex = i;
    }
  }
  if (closestDancer) {
    var thisIndex = window.dancers.indexOf(this);
    thisIndex > closestDancerIndex && this.$node.css("border-color", closestDancer.$node.css("border-color"));
  }
}

