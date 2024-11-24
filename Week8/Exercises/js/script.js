var exampleLine = document.getElementById("exampleLineId");
exampleLine.innerHTML = "This is just an <u>example line</u> of how innerHTML works.";

//this is an example of how to write a function
var exampleFunction = document.getElementById("exampleFunction");
exampleFunction.innerHTML = exampleFunction.innerHTML + " " + add_two_numbers(5, 7);

//Write your function declarations below this line
function add_two_numbers(n1, n2) {
    return n1 + n2;
}
exampleLine.innerHTML
var task2and3 = document.getElementsByTagName("li");
task2and3[1].innerHTML = task2and3[1].innerHTML + "15";
task2and3[2].innerHTML = task2and3[2].innerHTML + "18";

var animals = ["Cat", "Dog", "Parrot"];
task2and3[5].innerHTML = animals;

var classname = document.getElementsByClassName("fruitClass")
classname[0].innerHTML = "<li>" + "Apple" + "</li>";
classname[1].innerHTML = "<li>" + "Banana" + "</li>";

for (let i = 0; i < task2and3.length; i++) {
    console.log(task2and3[i]);
}

task2and3[11].innerHTML = "<u>" + task2and3[11].innerHTML + "</u>";

var line10 = document.getElementById("fourthLineId");
line10.innerHTML ="<ul> <li>"+animals[0]+ "</li> " + "<li>"+animals[1]+ "</li> " + " <li>"+animals[2]+ "</li> </ul>";

//this is an example of how to write a function
var exampleFunction = document.getElementById("exampleFunction");
exampleFunction.innerHTML = exampleFunction.innerHTML + " " + add_two_numbers(5, 7);

//Write your function declarations below this line
function add_two_numbers(n1, n2) {
    return n1 + n2;
}

var function12 = document.getElementById("fifthLineId");
function12.innerHTML = function12.innerHTML + " " + product(3,6,7);
function product(j1,j2,j3) {
    return j1 * j2 * j3;
}
var area = document.getElementById("sixthLineId")
area.innerHTML = area.innerHTML + area2(2);

function area2(radius) {
    return radius * radius * Math.PI;
}