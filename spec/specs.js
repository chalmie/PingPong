describe('pingPong', function() {

  it("is true for a number divisible by three", function() {
    expect(pingPong(6)).to.equal(true);
  });
  it("is false for a number not divisible by three", function() {
    expect(pingPong(7)).to.equal(false);
  });


});
