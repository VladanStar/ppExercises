/*
Number.isFinite()
The Number.isFinite() method determines whether the passed value is a finite number — that is, it checks that the type of a given value is Number, and the number is neither positive Infinity, negative Infinity, nor NaN.
Syntax
Number.isFinite(value)
*/
console.log(Number.isFinite(23));
console.log(Number.isFinite(10 / 5));
console.log(Number.isFinite(0 / 0));

/*
Number.isInteger()
The Number.isInteger() method determines whether the passed value is an integer.
*/
function fits(x, y) {
  if (Number.isInteger(y / x)) {
    return "Fits!";
  }
  return "Does NOT fit!";
}

console.log(fits(5, 10));
// expected output: "Fits!"

console.log(fits("five", 11));
// expected output: "Does NOT fit!"

/*
Number.isNaN()
The Number.isNaN() method determines whether the passed value is NaN and its type is Number. It is a more robust version of the original, global isNaN()
*/
function typeOfNaN(x) {
  if (Number.isNaN(x)) {
    return "Number NaN";
  }
  if (isNaN(x)) {
    return "NaN";
  }
}
console.log(typeOfNaN("100F"));
// expected output: "NaN"
console.log(typeOfNaN(NaN));
// expected output: "Number NaN"
/*
Number.parseFloat()
The Number.parseFloat() method parses an argument and returns a floating point number. If a number cannot be parsed from the argument, it returns NaN.

Number.parseInt()
The Number.parseInt() method parses a string argument and returns an integer of the specified radix or base.
*/
/*

Math.floor()
The Math.floor() function returns the largest integer less than or equal to a given number.
Syntax
Math.floor(x)
*/
console.log(Math.floor(5.95));
// expected output: 5

console.log(Math.floor(5.05));
// expected output: 5

console.log(Math.floor(5));
// expected output: 5

console.log(Math.floor(-5.01));
// expected output: -6
/* 
Math.max()
The Math.max() function returns the largest of the zero or more numbers given as input parameters, or NaN if any parameter isn't a number and can't be converted into one.
Syntax
Math.max()
Math.max(value0)
Math.max(value0, value1)
Math.max(value0, value1, ... , valueN)
*/
console.log(Math.max(1, 3, 2));
// expected output: 3

console.log(Math.max(-1, -3, -2));
// expected output: -1

const array1 = [1, 3, 2];

console.log(Math.max(...array1));
// expected output: 3
/* 
Math.min()
The static function Math.min() returns the lowest-valued number passed into it, or NaN if any parameter isn't a number and can't be converted into one.
Syntax
Math.min()
Math.min(value0)
Math.min(value0, value1)
Math.min(value0, value1, ... , valueN)
*/
console.log(Math.min(2, 3, 1));
// expected output: 1

console.log(Math.min(-2, -3, -1));
// expected output: -3

const array1 = [2, 3, 1];

console.log(Math.min(...array1));
/*
Math.pow()
The Math.pow() function returns the base to the exponent power, as in baseexponent.
Math.round()
The Math.round() function returns the value of a number rounded to the nearest integer.

Math.sqrt()
The Math.sqrt() function returns the square root of a number, that is

\forall x \geq 0, \mathtt{Math.sqrt(x)} = \sqrt{x} = \text{the unique} \; y \geq 0 \; \text{such that} \; y^2 = x
Syntax
Math.sqrt(x)
*/
function calcHypotenuse(a, b) {
  return (Math.sqrt((a * a) + (b * b)));
}

console.log(calcHypotenuse(3, 4));
// expected output: 5

console.log(calcHypotenuse(5, 12));
// expected output: 13

console.log(calcHypotenuse(0, 0));
// expected output: 0
