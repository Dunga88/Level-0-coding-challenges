//Task 0.5
// Using Heron's Formula
var area = function(A,B,C) {
	var s = (A+B+C)/2;
	var a = Math.sqrt(s*(s-A)*(s-B)*(s-C));
  return a;
}
//fill in side lengths below
console.log(area(4,5,3));