var pingPong = function(number) {

  var numberArray = [];

  for (number; number > 0; number--) {
    if (number % 3 === 0 && number % 5 === 0) {
      numberArray.unshift("pingpong");
    } else if (number % 5 === 0) {
      numberArray.unshift("pong");
    } else if (number % 3 === 0) {
      numberArray.unshift("ping");
    } else {
      numberArray.unshift(number);
    }
  }
  return numberArray;
};
