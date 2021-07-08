/*1. *Write a function to check whether the `input` is a string or not.
"My random string" -> true
12 -> false*/

let result = (string) => {
  return typeof string === "string" ? true : false;
};
console.log(result("My random string"));

/*2. Write a function to check whether a string is blank or not.
"My random string" -> false
" " -> true
12 -> false
false -> false*/

let isBlankString = (string) => {
  return string === " " ? true : false;
};
console.log(isBlankString(" "));

/*3. Write a function that concatenates a given string n times (default is 1).
    "Ha" -> "Ha"
"Ha", 3 -> "HaHaHa"*/

let concatString = (string, p = 1) => {
  let stringN = "";
  for (let i = 0; i < p; i++) {
    stringN += string;
  }
  return stringN;
};
console.log(concatString("Ha ha", "3"));

/*4. Write a function to count the number of letter occurrences in a string.
"My random string", "n" -> 2*/

let countString = (string, p) => {
  return string.split(p).length - 1;
};
console.log(countString("My random string", "n"));

/*5. Write a function to find the position of the first occurrence of a character in a string.
The result should be in human numeration form.If there are no occurrences of the character, the function should return -1.*/
let firstOcc = (string, p) => {
  let index = string.indexOf(p);
  return index >= 0 ? index + 1 : -1;
};
console.log(firstOcc("My random string", "f"));

/* 6. Write a function to find the position of the last occurrence of a character in a string.
The result should be in human numeration form.If there are no occurrences of the character, function should return -1.*/
let lastOcc = (string, n) => {
  let index = string.lastIndexOf(n);
  return index >= 0 ? index + 1 : -1;
};
console.log(lastOcc("My random string", "n"));

/* 7. Write a function to convert string into an array.Space in a string should be represented as “null” in new array.
"My random string" -> ["M", "y", null, "r", "a"]
"Random" -> ["R", "a", "n", "d", "o", "m"]
*/
let convert = (string) => {
  return Array.from(string);
};
console.log(convert("My random string"));

/*8. Write a function that accepts a number as a parameter and checks if the number is prime or not.
    Note: A prime number(or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.*/

let primeNumber = (number) => {
  if (number === 1) {
    return false;
  } else if (number === 2) {
    return true;
  } else {
    for (let i = 0; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
};
console.log(primeNumber(6));

/* 9. Write a function that replaces spaces in a string with provided separator.If separator is not provided, use “-” (dash) as the default separator.
    "My random string", "_" -> "My_random_string"
"My random string", "+" -> "My+random+string"
"My random string" -> "My-random-string"
*/
let separator = (str, s = "-") => {
  return (str = str.replace(/\s+/g, s));
};
console.log(separator("My random string"));

/*10. Write a function to get the first n characters and add “...” 
at the end of newly created string.*/

let replaceDots = (string, d) => {
  return string.substring(0, d) + "...";
};
console.log(replaceDots("My random string", 9));

/*11. Write a function that converts an array of strings into an array of numbers.Filter out all non - numeric values.
["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]
*/

let array = ["1", "21", undefined, "42", "1e+3", Infinity, 23];
let convertsArray = array.filter(function (element) {
  return !isNaN(element) && isFinite(element);
});
let niz = convertsArray.map(function (element) {
  return parseFloat(element);
});
console.log(niz);
/*Write a function to calculate how many years there are left until retirement based on the year of birth.
Retirement for men is at age of 65 and for women at age of 60. If someone is already retired, a proper message should be displayed.*/
