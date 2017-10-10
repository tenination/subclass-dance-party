describe('orbitDancer', function() {

  var orbitDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    orbitDancer = new OrbitDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(orbitDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have class of "orbitClass"', function() {
    sinon.spy(orbitDancer.$node, 'toggle');
    orbitDancer.step();
    expect(orbitDancer.$node.hasClass('orbitDancer')).to.be.equal(true);
  });
  

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(orbitDancer, 'step');
      expect(orbitDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necesssary...
      
    
      

      expect(orbitDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(orbitDancer.step.callCount).to.be.equal(2);
    });
  });
});
