describe("countingBlinkyDancer", function() {

  var countingBlinkyDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    countingBlinkyDancer = new CountingBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(countingBlinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(countingBlinkyDancer.$node, 'toggle');
    countingBlinkyDancer.step();
    expect(countingBlinkyDancer.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(countingBlinkyDancer, "step");
      expect(countingBlinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(countingBlinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(countingBlinkyDancer.step.callCount).to.be.equal(2);
    });

    it("should increment its number value once with every step", function(){
      sinon.spy(countingBlinkyDancer, "step");
      expect(countingBlinkyDancer.number).to.be.equal(1);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(countingBlinkyDancer.number).to.be.equal(2);

      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps);
      expect(countingBlinkyDancer.number).to.be.equal(3);
    });
  });



  
});
