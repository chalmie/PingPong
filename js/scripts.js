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


$(document).ready(function() {
  $("form#user-number").submit(function(event) {
    // create variables for user input,output,and list items
    var number = parseInt($("input#number").val(),10);
    var returnedArray = pingPong(number);
    var numberList = document.getElementById("ping-pong");

    // Make sure pingpong list is empty
    $("ul").empty();

    // loop through output array and append to list
    for (index = 0; index < returnedArray.length; index++) {
      var listItem = document.createElement("li");
      listItem.innerHTML = returnedArray[index];
      numberList.appendChild(listItem);
    }


    $("#result").show();
    event.preventDefault();
  });
});
