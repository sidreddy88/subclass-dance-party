describe("spinDancer", function() {

  var spinDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    spinDancer = new SpinDancer(10, 20, 400);

  });

  it("should have a jQuery $node object", function(){
    expect(spinDancer.$node).to.be.an.instanceof(jQuery);
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(spinDancer, "step");
      expect(spinDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(spinDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(spinDancer.step.callCount).to.be.equal(2);
    });

    it("should increment the angle value by 30 degrees ", function(){
      sinon.spy(spinDancer, "step");
      expect(spinDancer.angle).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      

      expect(spinDancer.angle).to.be.equal(30);

      clock.tick(timeBetweenSteps);
      expect(spinDancer.angle).to.be.equal(60);
    });
  });
});
