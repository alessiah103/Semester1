//write your code below this line
var myArray = ["red", "blue", "green", "black", "white"];
var tempStr = "";
for (let i = 0; i < myArray.length; i++) {
  tempStr += "<br>" + myArray[i];
}
var textField = document.getElementById("textField");
textField.innerHTML += tempStr;

var random = Math.floor(Math.random() * myArray.length); //math.floor, cause we want only between 0 and 4
var textField = document.getElementById("random");
textField.innerHTML += myArray[random];

//var myDate = new Date(); -- variable with new date object

//to create a specific name
// var MyDate = new Date(1996,11,26,15,45,55); +time, min, sec
// var MyDate = new Date(1996,11,26) // 11 is equal to 12, since it starts from 0, so 0 is January

var firstDate = new Date(2024, 10, 14);
var secondDate = new Date(2018, 0, 1);
var dateDifference = firstDate - secondDate;
var days = Math.floor(dateDifference / (1000 * 60 * 60 * 24));

var date = document.getElementById("date");
date.innerHTML += " Days: " + days;

var parity = document.getElementById("parity");
parity.innerHTML +=
  "The number of days is " + (days % 2 == 0 ? "even." : "odd.");

//var myTimeVar = setTimeout(function() {alert("Hello")}, 3000);

function incrementCounter(timeInterval, incrementValue, elementReference, limit) {
  var myCounter = 0;

  function timedCount() {
    if (myCounter == limit) {
        return;
    }

      myCounter += incrementValue;
      document.getElementById(elementReference).innerHTML = myCounter;
      setTimeout(function () {
        timedCount();
      }, timeInterval);
  }

  timedCount();
}

incrementCounter(1000, 2, "timeCount", 10);
