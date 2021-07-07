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
