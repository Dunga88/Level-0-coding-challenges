// Task 0.1
var x = 0 
var y = 1
document.write(x)
document.write(y)
x = x + 3
y = y + x
document.write(x)
document.write(y)
console.log( " Lets focus and do work")
// Task 0.2
var x = 1
var y = 1 + 1*2
var z = 1 + (1*2)
var a = 1 + 1 *2/2
var b = (1 + 1*2) / 2
document.write(x,y,z,a,b)
//Task 0.3
function ShowMessage(firstName){
    document.write("Hellow" + firstName );
}
ShowMessage("Tshepo")
//Task 0.4
const number = prompt("Enter a number:  ");
if(number % 2 == 0) {
    console.log("even.");
    }


else {
    console.log("odd.");
}
//Task 0.5
// Using Heron's Formula
var area = function(A,B,C) {
	var s = (A+B+C)/2;
	var a = Math.sqrt(s*(s-A)*(s-B)*(s-C));
  return a;
}
//fill in side lengths below
document.write(area(4,5,3));
//Task 0.6

// logic
const e = parseFloat(prompt("Enter first number: "));
const f = parseFloat(prompt("Enter second number: "));
const g = parseFloat(prompt("Enter third number: "));
let largest;

// check the condition
if(e >= f && e >= g) {
    largest = e;
}
else if (f >= e && b >= g) {
    largest = f;
}
else {
    largest = g;
}

// display the result
console.log("The Maximum Number Is " + largest);
//Task 0.7
// Celsius to Fahrenhiet
function CF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp +' degrees celsius is '+ cToFahr + ' degrees fahrenhiet.';
    console.log(message);
}
CF(100);
// Fahrenhiet to Celsius
function FC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp +' degrees fahrenhiet is ' + fToCel +' degrees celsius.';
    console.log(message);
} 
FC(9);
