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