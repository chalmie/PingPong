describe('pingPong', function() {

  it("pushes numbers from one to the user number into numberArray", function() {
    expect(pingPong(2)).to.eql([1,2])
  })

  it("returns 'ping' for a number divisible by three in numberArray", function() {
    expect(pingPong(3)).to.eql([1,2,"ping"]);
  });


  it("return 'pong' for a number divisible by five in numberArray", function() {
    expect(pingPong(5)).to.eql([1,2,"ping",4,"pong"]);
  });

  it("return 'pingpong' for a number divisible by five and three in numberArray", function() {
    expect(pingPong(15)).to.eql([1,2,"ping",4,"pong","ping",7,8,"ping","pong",11,"ping",13,14,"pingpong"]);
  });

  it("return numbers for a number not divisible by five or three in numberArray", function() {
    expect(pingPong(1)).to.eql([1]);
  });

});
