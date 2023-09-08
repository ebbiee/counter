function increaseByOne(num){
  return num += 1;
};

function decreaseByOne(num){
  return num -= 1;
};
function reset(){
  return 0;
};
function increaseByTwo(num){
  return num += 2;
}
function increaseByThree(num){
  return num += 3;
}
function increaseByFour(num){
  return num += 4;
}

$(document).ready(function(){
  $("#increaseByOne").click(function(){
    let number = $("#startNumber").html();
    let newNumber = increaseByOne(parseInt(number));
    $("#startNumber").html(newNumber);
  });

  $("#decreaseByOne").click(function(){
    let number = $("#startNumber").html();
    let newNumber = decreaseByOne(number);
    $("#startNumber").html(newNumber);
  });
  $("#reset").click(function(){
    let initialNumber = reset();
    $("#startNumber").html(initialNumber)
  });
  $("#increaseByTwo").click(function(){
    let number = $("#startNumber").html();
    let newNumber = increaseByTwo(parseInt(number));
    $("#startNumber").html(newNumber);
  });
  $("#increaseByThree").click(function(){
    let number = $("#startNumber").html();
    let newNumber = increaseByThree(parseInt(number));
    $("#startNumber").html(newNumber);
  });
  $("#increaseByFour").click(function(){
    let number = $("#startNumber").html();
    let newNumber = increaseByFour(parseInt(number));
    $("#startNumber").html(newNumber);
  });
});