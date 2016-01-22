describe('pingPong', function() {

  it("is true for a number divisible by three", function() {
    expect(pingPong(6)).to.equal(true);
  });
  it("is false for a number not divisible by three", function() {
    expect(pingPong(7)).to.equal(false);
  });

  it("is true for a number divisible by five", function() {
    expect(pingPong(10)).to.equal(true);
  });
  it("is false for a number not divisible by five", function() {
    expect(pingPong(7)).to.equal(false);
  });

  it("is true for a number divisible by five and three", function() {
    expect(pingPong(15)).to.equal(true);
  });
  it("is false for a number not divisible by five or three", function() {
    expect(pingPong(7)).to.equal(false);
  });

});
