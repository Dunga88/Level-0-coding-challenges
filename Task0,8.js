//Task 0.8
function timer(num) {
 
     // The Math. floor() function returns the largest integer less than or equal to a given number
   var H = Math. floor(num / 60);
   var M = num % 60;
   console.log( H + 'hour(s) ' + ", " + M + 'minute(s)');
}
(timer(200));
