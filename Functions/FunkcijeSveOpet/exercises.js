// 1. Write a program that calculates the maximum of two given numbers.
function maxTwoNumber(a, b) {
  if (a > b) {
    console.log("Max is a = " + a);
  } else if (a < b) {
    console.log("Max is b = " + b);
  } else {
    console.log("Numbers is eguals");
  }
}
var a = 9;
var b = 9;
maxTwoNumber(a, b);
//2. Write a program that checks if a given number is odd.
function evenOrOdd(a) {
  if (typeof a === "number") {
    if (a === 0) {
      return "Zero. Please enter  valid input. Number";
    } else if (a % 2 === 0) {
      return "Even";
    } else {
      return "Number is Odd";
    }
  } else {
    return "This is not a number. Check input";
  }
}
var number = "8";
var output = evenOrOdd(number);
console.log(output);
//3. Write a program that checks if a given number is a three digit long number.
function threeDigit(a) {
  if (a > 99 && a < 1000) {
    return "Yess";
  } else {
    return "No";
  }
}
var c = 234;
var output = threeDigit(c);
console.log(output);
//4  Write a program that calculates an arithmetic mean of four numbers.
function arithmeticMean(a, b, c, d) {
  var sum = a + b + c + d;
  var mean = sum / 4;
  return mean;
}
var a = 3,
  b = 5,
  c = 7,
  d = 6;
var output = arithmeticMean(a, b, c, d);
console.log(output);
//7. Write a program that calculates a number of digits of a given number.
var m = 345;
var count = 0;
function numberDigit(m) {
  var res = "";
  var string = m + res;
  return string.length;
}
var output = numberDigit(m);
console.log(output);
// 8. Write a program that calculates a number of appearances of a given number in a given
//array.
//Inputs:
var a = [2, 4, 7, 8, 7, 7, 1];
var e = 7;
var count = 0;
function apperancesNumber(t, array) {
  for (var i = 0; i < array.length; i++) {
    if (a[i] === e) {
      count++;
    }
  }
  return count;
}
var output = apperancesNumber(e, a);
console.log(output);
//9. Write a program that calculates the sum of odd elements of a given array.
var array = [21, 2, 5, 8];
var sum = 0;
function calcSum(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
    } else {
      sum += array[i];
    }
  }
  return sum;
}
var output = calcSum(array);
console.log(output);
/* 
10. Write a program that calculates the number of appearances of a letter a in a given string.
Modify the program so it calculates the number of both letters a and A.
*/
var array = "Apperancesaaa";
var count = 0;
function countA(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === "A" || array[i] === "a") {
      count++;
    }
  }
  return count;
}
var output = countA(array);
console.log(output);
/*
11. Write a program that concatenates a given string given number of times. For example, if
“abc” and 4 are given values, the program prints out abcabcabcabc.
*/
var string = "abc";
var num = 4;
function concString(num, string) {
  var conc = "";
  for (var i = 0; i < num; i++) {
    conc += string;
  }
  return conc;
}
var output = concString(num, string);
console.log(output);
/* 
Write a program that draws a square of a given size. For example, if the size of square
is 5 the program should draw:
*****
*   *
*   *
*   *
*****
*/
function drawSquare(size) {
  var star = "*";
  var space = " ";
  for (var i = 1; i <= size; i++) {
    if (i === 1 || i === size) {
      var warStar = "";
      for (var j = 1; j <= size; j++) {
        warStar += star;
      }
      console.log(warStar);
    } else {
      var space2 = "";
      for (var k = 1; k <= size - 2; k++) {
        space2 += space;
      }
      star2 = star + space2 + star;
      console.log(star2);
    }
  }
}
var number = 5;
drawSquare(number);
/*6. Write a program that draws a horizontal chart representing three given values. For
example, if values are 5, 3, and 7, the program should draw:
* * * * *
* * *
* * * * * * *
*/
var val1 = 5;
var val2 = 3;
var val3 = 7;
function drawStars(a, b, c) {
  var line1 = "";
  var line2 = "";
  var line3 = "";
  var asteriks = "* ";
  var star = "*";
  var star1 = "";
  var star2 = "";
  var star3 = "";
  for (var i = 0; i < a - 1; i++) {
    star1 += asteriks;
  }
  line1 = star1 + star;
  console.log(line1);

  for (var j = 1; j <= b - 1; j++) {
    star2 += asteriks;
  }
  line2 = star2 + star;
  console.log(line2);

  for (var k = 1; k <= c - 1; k++) {
    star += asteriks;
  }
  line3 = star3 + star;
  console.log(line3);
}
drawStars(val1, val2, val3);

//----------------------------------
//Write a program that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the program should draw:
function makeChart() {
  var result = "";
  for (var i = 0; i < arguments.length; i++) {
    for (var j = 0; j < arguments[i]; j++) {
      result += "*";
    }
    result += "\n";
  }
  return result;
}
console.log(makeChart(6, 7, 8, 9));
/* 
1. Write a function to check whether the `input` is a string or not.
"My random string" -> true
12 -> false
*/
function isString(a) {
  return typeof a === "string";
}
var b = 3;
console.log(isString(b));
/* 
2. Write a function to check whether a string is blank or not.
"My random string" -> false
" " -> true
12 -> false
false -> false
*/
function isBlank(a) {
  if (a === " ") {
    return true;
  } else {
    return false;
  }
}
var c = " ";
console.log(isBlank(c));
/* 
3. Write a function that concatenates a given string n times (default is 1).
"Ha" -> "Ha"
"Ha", 3 -> "HaHaHa"
*/
function writeWord(n, word) {
  var conWord = "";
  if (typeof word !== "string" || n < 1) {
    console.log("Error");
  } else {
    for (var i = 0; i <= n; i++) {
      conWord += word;
    }
  }
  return conWord;
}
var word = "false";
var n = 6;
console.log(writeWord(n, word));
/*
4. Write a function to count the number of letter occurrences in a string.
"My random string", "n" -> 2
*/
function charOccurence(word, char) {
  if (typeof word !== "string") {
    return false;
  }
    var res = 0;
    for (var i = 0; i< word.length; i++) {
      //checking character in string
      if (word[i] == char) {
        res++;
      }
    }
    return res;
  
}
console.log(charOccurence("hello", "l"));
/*
5. Write a function to find the position of the first occurrence of a character in a string. The
result should be the position of character. If there are no occurrences of the character, the
function should return -1. 
*/
function charFirstOccurance(word, char) {
  if (typeof word !== "string") {
    return false;
  }
  var place = "";
  for (var i = 0; i < word.length; i++){
    if (word[i] === char) {
      place = i;
      return place;
      break;
    }

  }
  retur -1;
}
console.log(charFirstOccurance("hello", "l"));
/* 
6. Write a function to find the position of the last occurrence of a character in a string. The
result should be in human numeration form. If there are no occurrences of the character,
function should return -1.
*/
function lastOccurance(word, char) {
  if (typeof word !== "string") {
    return false;
  }
  for (var i = 0; i < word.length; i++){
    if (word[i] === char) {
      place = i + 1;
      return place;
    } 
  }
  return -1;
}
console.log(lastOccurance("hello", "u"));/* 
7. Write a function to convert string into an array. Space in a string should be represented as
“null” in new array.
""My random string" -> ["M", "y", null, "r", "a"]
"Random" -&gt; ["R", "a", "n", "d", "o", "m"]
*/
function stringToArray(string) {
  var newArray = [];
  for (var i = 0; i < string.length; i++){
    if (string[i] === " ") {
      newArray[i] = null;
    }
    else {
      newArray[i] = string[i];
    }
  }
  return newArray;
}
var s = "My random string";
console.log(stringToArray(s));
/* 
8. Write a function that accepts a number as a parameter and checks if the number is prime or
not.
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
divisors other than 1 and itself.
*/
function isPrimeNumber(number) {
  if (number <= 0) {
    return false;
  }
  for (var i = 0; i < number; i++){
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrimeNumber(99));
/* 
9. Write a function that replaces spaces in a string with provided separator. If separator is not
provided, use “-” (dash) as the default separator.
"My random string", "_" -> "My_random_string"
"My random string", "+" -> "My+random+string"
"My random string"  -> "My-random-string"
*/
function wordSeparator(string, separator) {
  var newString = "";
  if (typeof separator === "undefined") {
    separator = "-";
  }
  for (var i = 0; i < string.length; i++){
    if (string[i] === " ") {
      newString += separator;
    }
    else {
      newString += string[i];
    }
  }
  return newString;
}
console.log(wordSeparator("My randome string", "+"));
/* 
10. Write a function to get the first n characters and add “...” at the end of newly created string.
*/
function firstFewChar(n, word) {
  var newWord = "";
  var dots = "...";
  for (var i = 0; i < n; i++){
    newWord += word[i];
  }
  newWord += dots;
  return newWord;
}
console.log(firstFewChar(5, "vladan cupric"));
/* 
11. Write a function that converts an array of strings into an array of numbers. Filter out all
non-numeric values.
["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]
*/

