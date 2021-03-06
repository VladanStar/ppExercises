/* 1. Write a function to check whether the `input` is a string or not.
"My random string" -> true
12 -> false*/
function checkWheter(word) {
  if (typeof word === "string") {
    return true;
  } else {
    return false;
  }
}
var fun = checkWheter("David");
console.log(fun);
/* 2. Write a function to check whether a string is blank or not.
"My random string" -> false
" " -> true
12 -> false
false -> false*/

function stringBlank(word) {
  if (word === " ") {
    return true;
  } else {
    return false;
  }
}
var fun = stringBlank("earth");
console.log(fun);

/* 3. 
Write a function to count the number of letter occurrences in a string.
"My random string", "n" -> 2*/
function counter(word, n) {
  var count = 0;
  for (var i = 0; i < word.length; i++) {
    if (word[i] === n) {
      count++;
    }
  }
  return count;
}
var r = counter("vladan", "a");
console.log(r);
/* 4.
 Write a function to find the position of the first occurrence of a character in a string.
The result should be in human numeration form.If there are no occurrences of the character,
 the function should return -1.*/
function firstOcccurr(word, p) {
  var poss;
  for (var i = 0; i < word.length; i++) {
    if (word[i] === p) {
      poss = i + 1;
      return poss;
      break;
    }
  }
  return -1;
}
var word = "Green";
var p = "e";
var possition = firstOcccurr(word, p);
console.log(possition);
/* 5. 
Write a function to find the position of the last occurrence of a character in a string.
The result should be in human numeration form.
If there are no occurrences of the character, function should return -1.*/
function lastOcccurr(word, p) {
  var poss;
  for (var i = word.length; i >= 0; i--) {
    if (word[i] === p) {
      poss = i + 1;
      return poss;
      break;
    }
  }
  return -1;
}
var word = "Green";
var p = "e";
var possition = lastOcccurr(word, p);
console.log(possition);
/* 6. 
Write a function to convert string into an array.Space in a string should be represented as “null” in new array.
"My random string" -> ["M", "y", null, "r", "a"]
"Random" -> ["R", "a", "n", "d", "o", "m"]
*/
function convertString(word) {
  var arr = [];
  for (var i = 0; i < word.length; i++) {
    /* we have to separate a word and remember each word separately. So we can change it to null*/
    var element = word[i];
    if (word[i] === " ") {
      element = null;
    }
    arr[i] = element;
  }
  return arr;
}
console.log(convertString("My random string"));

/*
 7. 
 Write a function that accepts a number as a parameter and checks if the number is prime or not.
    Note: A prime number(or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
    */
function acceptsNumber(number) {
  if (number > 1) {
    for (var i = 1; i <= number; i++) {
      //must check of 1 because number / 0 = ...
      if (number % i === 0) {
        return false;
      }
      return true;
    }
  } else {
    return "Number is not valid for check!!!";
  }
}
console.log(acceptsNumber(9));

/* 8. 
Write a function that replaces spaces in a string with provided separator.
If separator is not provided, use “-” (dash) as the default separator.
    "My random string", "_" -> "My_random_string"
"My random string", "+" -> "My+random+string"
"My random string" -> "My-random-string"
*/
function replaceSpaces(word, separator) {
  var newWord = "";
  for (var i = 0; i < word.length; i++) {
    /* we have to separate a word and remember each word separately. So we can change it to null*/
    var element = word[i];
    if (element === " ") {
      element = separator;
    }
    newWord += element;
  }
  return newWord;
}
console.log(replaceSpaces("vladan is the best", "-"));
/* 9.
Write a function that replaces spaces in a string with provided separator.If separator is not provided, use “-” (dash) 
as the default separator.
    "My random string", "_" -> "My_random_string"
"My random string", "+" -> "My+random+string"
"My random string" -> "My-random-string"
*/
function replaceSpace(string, separator) {
  var separator = separator || "-";
  var newWord = "";
  for (var i = 0; i < string.length; i++) {
    var element = string[i];
    if (element === " ") {
      element = separator;
    }
    newWord += element;
  }
  return newWord;
}
console.log(replaceSpace("My random string", "$"));
/* 10.
Write a function to get the first n characters and add “...” at the end of newly created string.
*/
function firstChar(string, n) {
  var dots = "...";
  var newWord = "";
  var n;
  for (var i = 0; i <= n; i++) {
    var element = string[i];
    newWord += element;
  }
  return (newWord += dots);
}
console.log(firstChar("vladan", 4));

/* 11.
Write a function that converts an array of strings into an array of numbers.Filter out all non - numeric values.
["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]
*/
function conArrayString(array) {
  var arr1 = [];
  var poss = 0;
  for (var i = 0; i < array.length; i++) {
    var element = array[i];
    if (!isNaN(element) && isFinite(element)) {
      arr1[i - poss] = element;
      //when NaN or Infinite we delete the index
    } else {
      poss++;
    }
  }
  return arr1;
}
var arr = ["1", "21", undefined, "42", "1e+3", Infinity];
console.log(conArrayString(arr));
/* 12. 
Write a function to calculate how many years there are left until retirement based on the year of birth.
Retirement for men is at age of 65 and for women at age of 60. 
If someone is already retired, a proper message should be displayed.
*/
function retirement(years, sex) {
  var ret = 2021 - years;
  if (sex === "male") {
    if (ret >= 65) {
      return "Your are retirement";
    } else if (ret < 65) {
      return "Almost done. " + (65 - ret);
    } else {
      return "Wrong";
    }
  }
  if (sex === "female") {
    if (ret >= 60) {
      return "Your are retirement";
    } else if (ret < 60) {
      return "Almost done" + (60 - ret);
    } else {
      return "Wrong";
    }
  }
}
var n = 1973;
var sex = "male";
var retired = retirement(n, sex);
console.log(retired);
/*13. 
Write a function to humanize a number(formats a number to a human - readable string) 
with the correct suffix such as 1st, 2nd, 3rd or 4th.
1 -> 1st
11 -> 11th
Hint: num % 100 >= 11 && num % 100 <= 13
*/
function humanizeNumber(num) {
  if (typeof num == "undefined") {
    return;
  }
  if (num % 100 >= 11 && num % 100 <= 13) {
    return num + "th";
  }
  switch (num % 10) {
    case 1:
      return num + "st";
    case 2:
      return num + "nd";
    case 3:
      return num + "rd";
  }
  return num + "th";
}
// Output
console.log(humanizeNumber());
console.log(humanizeNumber(1));
console.log(humanizeNumber(8));
console.log(humanizeNumber(301));
console.log(humanizeNumber(402));

/* 14. 
Write a program that checks if a given element e is in the array a. 
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes
Input:  e = 3, a = [5, -4.2, 18, 7]
Output: no
*/
function checkElement(array, n) {
  var n;
  var result = "";
  for (var i = 0; i < array.length; i++) {
    var element = array[i];
    if (element === n) {
      result = "yes";
      break;
    }
    result = "no";
  }

  return result;
}
var array = [5, -4.2, 18, 7];
var n = 5;
var fc = checkElement(array, n);
console.log(fc);
/* 
15.
Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]
*/
function multiEveryPositiv(array) {
  newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      newArr[i] = array[i] * 2;
    } else {
      newArr[i] = array[i];
    }
  }
  return newArr;
}
var array = [-3, 11, 5, 3.4, -8];
console.log(multiEveryPositiv(array));
/* 16.
Write a program that finds the minimum of a given array and prints out its value and index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3
*/
function minIndex(array) {
  var min = array[0];
  var index = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
      index = i;
    }
  }
  return min + " " + index;
}
var array = [4, 2, 2, -1, 6];
var min = minIndex(array);
console.log(min);
/* 17. 
Write a program that finds the second largest number and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2 */
function secondLargest(arr1) {
  var pom;
  for (var i = 0; i < arr1.length; i++) {
    for (var j = i + 1; j < arr1.length; j++) {
      if (arr1[i] > arr1[j]) {
        pom = arr1[i];
        arr1[i] = arr1[j];
        arr1[j] = pom;
      }
    }
  }
  return arr1[1];
}
var array = [4, 2, 2, -1, 6];
var a = secondLargest(array);
console.log(a);

/* 18. 
Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16*/
function sumPositive(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    var element = array[i];
    if (element > 0) {
      sum += element;
    }
  }
  return sum;
}
var arr1 = [3, 11, -5, -3, 2];
var b = sumPositive(arr1);
console.log(b);
/* 19. 
Write a program that checks if a given array is symmetric.An array is symmetric if 
it can be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
Input array: [3, 4, 12, 8]
Output: The array isn’t symmetric.
*/
function hasSymmetry(nums) {
  var length = nums.length;
  var newLength = length / 2;
  var front = [];
  var back = [];

  for (var i = 0; i < newLength; i++) {
    front[i] = nums[i];
    back[i] = nums[length - 1 - i];
  }
  if (front[i] != back[i]) {
    return false;
  } else return true;
}
var array = [2, 4, -2, 7, -2, 4, 2];
var s = hasSymmetry(array);
console.log(s);
/* 20. 
Write a program that intertwines two arrays.You can assume the arrays are of the same length.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]
*/
function intertwines(arr1, arr2) {
  var a = [];
  for (var i = 0; i < arr1.length; i++) {
    a[a.length] = arr1[i];
    a[a.length] = arr2[i];
  }
  return a;
}
var firstArray = [4, 5, 6, 2];
var secondArray = [3, 8, 11, 9];
var array = intertwines(firstArray, secondArray);
console.log(array);
/* 21.
Write a program that concatenates two arrays.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]
*/
function concatArrays(arr1, arr2) {
  var arr3 = [];
  for (var i = 0; i < arr1.length; i++) {
    arr3[i] = arr1[i];
    for (var j = 0; j < arr2.length; j++) {
      arr3[arr1.length + j] = arr2[j];
    }
  }
  return arr3;
}
var firstArray = [4, 5, 6, 2];
var secondArray = [3, 8, 11, 9];
var a = concatArrays(firstArray, secondArray);
console.log(a);
/* 22.
Write a function that concatenates a given string n times (default is 1).
    "Ha" -> "Ha"
"Ha", 3 -> "HaHaHa"*/
function concatenates(word, n = 1) {
  var newWord = "";
  for (var i = 1; i <= n; i++) {
    newWord += word;
  }
  return newWord;
}
var n = 5;
var wordN = "Vladan";
var newS = concatenates(wordN, n);
console.log(newS);
/* 23. 
Write a program that deletes a given element e from the array a.
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]
*/
function delGivenElemnt(arr, n) {
  var b = [];
  for (var i = 0; i < arr.length; i++) {
    if (a[i] !== n) {
      b[b.length] = arr[i];
    }
  }
  return b;
}
var e = 2;
var a = [4, 6, 2, 8, 2, 2];
console.log(delGivenElemnt(a, e));
/* 24.
Write a program that inserts a given element e on the given position p in the array a.
If the value of the position is greater than the array length, print the error message.
   Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]
*/
function inserGivenElem(e, p, arr) {
  var arr2 = [];
  for (var i = 0; i < arr.length; i++) {
    if (i > p) {
      arr2[i] = arr[i - 1];
    } else if (p === i) {
      arr2[i] = e;
    } else {
      arr2[i] = a[i];
    }
  }
  return arr2;
}
var e = 78,
  p = 3,
  a = [2, -2, 33, 12, 5, 8];
console.log(inserGivenElem(e, p, a));
/* 25. 
Write a function that calculates the maximum of two given numbers. 
*/
function maxTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else if (a < b) {
    return b;
  } else {
    return "Equals";
  }
}
var a = 90;
var b = 9;
var ms = maxTwoNumbers(a, b);
console.log(ms);
/* 26. 
Write a function that checks if a given number is odd.
*/
function isOdd(a) {
  if (a % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
var a = 90;
var b = isOdd(a);
console.log(b);

/* 27. 
Write a function that checks if a given number is a three digit long number.
*/
function checkThreeDigit(a) {
  if (a > 99 && a < 1000) {
    return "Number is three digit";
  } else {
    return "Number is not three digit";
  }
}
var a = 909;
/* 28. 
Write a function that calculates an arithmetic mean of four numbers.
*/
function arithMean(a) {
  var st = "";
  var sum = 0;
  var st = a + st;
  for (var i = 0; i < st.length; i++) {
    sum += parseInt(st[i]);
  }
  return sum;
}
var a = 3456;
var b = arithMean(a);
console.log(b);

/* 29.  
Write a function that draws a square of a given size.For example,  if the size of square is 5 the function should draw: 
*****
*    *
*    *
*    *
*****
*/
function drawsSquare(a) {
  var firstAndLastRowa = "";
  var middleRowa = "";
  var starRow = "";
  for (var i = 0; i < a; i++) {
    firstAndLastRowa += " *";
  }
  firstAndLastRowa += "\n";
  for (var j = 0; j < a; j++) {
    if (j === 0 || j === a - 1) {
      middleRowa += " *";
    } else middleRowa += "  ";
  }
  middleRowa += "\n";

  for (var k = 0; k < a; k++) {
    if (k === 0 || k === a - 1) {
      starRow += firstAndLastRowa;
    } else {
      starRow += middleRowa;
    }
  }
  return starRow;
}
var output = drawsSquare(5);
console.log(output);
/* 30.
Write a function that draws a square of a given size.For example,  if the size of square is 5 the function should draw: 
*
**
***
****
*****
*/
function drawSquare(n) {
  var star = "";
  var star1 = "";
  for (var i = 0; i < n; i++) {
    star += " *";
    console.log(star);
  }
}
var output = drawSquare(5);
/* 31. 
Write a function that draws a horizontal chart representing three given values.For example, if values are 5, 3, and 7, the function should draw:
* * * * *
* * *
* * * * * * *
*/
function square(n1, n2, n3) {
  var starsRow1 = "";
  var starsRow2 = "";
  var starsRow3 = "";
  for (var i = 0; i < n1; i++) {
    starsRow1 += " *";
    if (i === n1) {
      starsRow1 += "\n";
    }
  }
  for (var j = 0; j < n2; j++) {
    starsRow2 += " *";
    if (j === n2) {
      starsRow2 += "\n";
    }
  }
  for (var k = 0; k < n3; k++) {
    starsRow3 += " *";
    if (k === n3) {
      starsRow3 += "\n";
    }
  }
  console.log(starsRow1);
  console.log(starsRow2);
  console.log(starsRow3);
}
var output = square(5, 3, 7);
console.log(output);

/* 32. 
Write a function that calculates a number of digits of a given number.
*/
function calcNumber(number) {
  var numberString = number + "";
  var count = 0;
  for (var i = 0; i < numberString.length; i++) {
    count++;
  }
  return count;
}
var number = 10000;
var output = calcNumber(number);
console.log(output);

/* 33. 
Write a function that calculates a number of appearances of a given number in a given array.
*/
function calcGiven(number, p) {
  var count = 0;
  var numString = number + "";
  var pString = p;
  for (var i = 0; i < numString.length; i++) {
    if (numString[i] == pString) {
      count++;
    }
  }
  return count;
}
var number = 3213324324;
var p = 3;
var output = calcGiven(number, p);
console.log(output);
/* 34. 
Write a function that calculates the sum of odd elements of a given array.
*/
function calcSum(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
      sum += array[i];
    }
  }
  return sum;
}
var array = [4, 5, 6, 7];
var output = calcSum(array);
console.log(output);
/* 35. 
Write a function that calculates the number of appearances of a letter a in a given string.
Modify the function so it calculates the number of both letters a and A.
*/

function calcString(string, letterUpperCase, letterLowerCase) {
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (letterUpperCase === string[i] || letterLowerCase === string[i]) {
      count++;
    }
  }
  return count;
}
var string = "blaBlabla";
var letterUpperCase = "B";
var letterLowerCase = "b";
var output = calcString(string, letterUpperCase, letterLowerCase);
console.log(output);
/* 36. 
Write a function that concatenates a given string given number of times.
For example, if “abc” and 4 are given values, the function prints out abcabcabcabc. 
*/
var string = "abc";
var n = 4;
function concatGivenString(string, n) {
  var newString = "";
  for (var i = 0; i < n; i++) {
    newString += string;
  }
  return newString;
}
var output = concatGivenString(string, n);
console.log(output);
/* 37.
Write a function to count vowels in a provided string. If you are  not aware of indexOf function, 
try to use switch statement.
*/
var string = "bananamen";
var wolf = "wolfs";
function calculateS(string, wolf) {
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    for (var j = 0; j < wolf.length; j++) {
      if (string[i] === wolf[j]) {
        count++;
      }
    }
  }
  return count;
}
var output = calculateS(string, wolf);
console.log(output);
/* 38.
Write a function that combines two arrays by alternatingly taking elements.
[‘a’, ’b’, ’c’], [1, 2, 3] -> [‘a’, 1, ’b’, 2, ’c’, 3]
*/
function combines(a, b) {
  var c = [];
  for (var i = 0; i < a.length; i++) {
    c[c.length] = a[i];
    c[c.length] = b[i];
  }
  return c;
}
var array1 = ["a", "b", "c"];
var array2 = [1, 2, 3];
var output = combines(array1, array2);
console.log(output);
/* 39. 
Write a function that rotates a list by k elements.
For example[1, 2, 3, 4, 5, 6] rotated by two becomes[3, 4, 5, 6, 1, 2]
*/
var array = [1, 2, 3, 4, 5, 6];
var parameter = 4;

function rotatingArray(array, parameter) {
  var firstArray = [];
  var newArrCount = 0;

  for (
    var i = 0, j = parameter;
    i < array.length && j < array.length;
    i++, j++
  ) {
    firstArray[i] = array[j];
    if (i === 0) {
      firstArray[array.length - parameter] = array[i];
    } else if (i === 1) {
      firstArray[array.length - 1] = array[i];
    }
  }
  return firstArray;
}
var output = rotatingArray(array, parameter);
console.log(output);
/* 40.  
Write a function that takes a number and returns array of its digits.
*/
var number = 1000;
function convert(number) {
  var numberInString = "" + number;
  newArray = [""];
  for (var i = 0; i < numberInString.length; i++) {
    var element = numberInString[i];
    newArray[i] = element;
  }
  return newArray;
}
var output = convert(number);
console.log(output);
/* 41.
 Write a program that prints a multiplication table for numbers up to 12.
*/
function multipTable(a) {
  var str = "";
  for (var i = 1; i <= a; i++) {
    for (var j = 1; j <= a; j++) {
      str += " " + i * j;
    }
    str = str + "\n";
  }
  return str;
}
console.log(multipTable(12));
/*42. 
Write a function to input temperature in Centigrade and convert to Fahrenheit.
*/

var centigrade = 10;

function convert(centigrade) {
  var fahrenheit = (centigrade * 9) / 5 + 32;
  return fahrenheit;
}
var output = convert(centigrade);
console.log(output);
/* 43.
Write a function to find the maximum element in array of numbers.Filter out all non - number elements.
*/
function filterHighestNumber(array) {
  var max = array[0];

  for (var i = 0; i < array.length; i++) {
    var element = array[i];
    if (typeof element === "number") {
      if (array[i] > max) {
        max = array[i];
      }
    }
  }
  return max;
}
var array = [
  false,
  5,
  54,
  56,
  876,
  678,
  "e,",
  "blab",
  "45345",
  NaN,
  undefined,
  455445,
  544554,
];
var output = filterHighestNumber(array);
console.log(output);

/* 44. 
Write a function to find the maximum and minimum elements.Function returns an array.
*/
function minAdnMax(array) {
  var max = [];
  var min = [];
  var minAdnMax = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== false || array[i] !== undefined || array[i] !== NaN) {
      max = array[i];
      min = array[i];
      break;
    }
  }
  for (var i = 0; i < array.length; i++) {
    if (array[i] > max && typeof array[i] === "number") {
      max = array[i];
    }
    if (array[i] < min && typeof array[i] === "number") {
      min = array[i];
    }
  }
  minAdnMax = [min, max];
  return minAdnMax;
}
var array = [
  false,
  5,
  54,
  56,
  876,
  678,
  "e,",
  "blab",
  "45345",
  NaN,
  undefined,
  455445544554,
];
var output = minAdnMax(array);
console.log(output);
/*45. 
Write a function to find the median element of array.
*/
function medina(array) {
  var middleElement = (array.length - 1) / 2;
  if (array.length % 2 === 1) {
    for (var i = 0; i < array.length; i++) {
      var element = array[i];
      if (i === middleElement) {
        return element;
      }
    }
  }
  console.log("no middle element");
  return array;
}
var array = [false, 5, 54, 54, 56546];
var output = medina(array);
console.log(output);
/*46.
Write a function to find the element that occurs most frequently.
*/
function mostFrequent(array) {
  if (array.length === 0) {
    return null;
  }
  var newArray = [];
  var maxElement = array[0],
    maxCount = 1;
  for (var i = 0; i < array.length; i++) {
    var element = array[i];
    if (newArray[element] == null) {
      newArray[element] = 1;
    } else newArray[element]++;
    //        newArray[element] = newArray[element] + 1;
    if (newArray[element] > maxCount) {
      maxElement = element;
      maxCount = newArray[element];
    }
  }
  return maxElement;
}
var array = ["pear", "apple", "orange", "apple"];
var output = mostFrequent(array);
console.log(output);

/*47. 
Write a function to find and return the first, middle and last element of an array if the array has odd number of elements.
If number of elements is even, return just the first and the last.In other cases(empty array), input array should be returned.
*/
function returnElementsOfArray(array) {
  var result = [];
  var firstElement = array[0];
  var lastElement = array[array.length - 1];

  var middleValue = (array.length - 1) / 2;
  if (array.length % 2 === 0) {
    return (result = [firstElement, lastElement]);
  }
  for (var i = 0; i < array.length; i++) {
    var element = array[i];
    if (array.length % 2 === 1) {
      if (i === middleElement) {
        var middleElement = element;
        return (result = [firstElement, middleElement, lastElement]);
      }
    }
  }
}
var array = [1, 2, 3, 4, 5, 6];
var output = returnElementsOfArray(array);
console.log(output);
/*48. 
Write a function to find the average of N elements.Make the function flexible to receive dynamic number or parameters.
*/
function average(array) {
  var count = 0;
  var averageSum = 0;
  var result = 0;
  for (var i = 0; i < array.length; i++) {
    count++;
    averageSum += array[i];
  }
  var resultOfAverageSum = averageSum / count;
  return resultOfAverageSum;
}
var array = [1, 2, 3, 4, 5, 6, 7];
var output = average(array);
console.log(output);
/*48. 
Write a function to find all the numbers greater than the average.
*/
function greaterThanAverage(array) {
  var count = 0;
  var averageSum = 0;
  var resultOfAverageSum = 0;
  var listOfElementsGreaterThanAverageSum = [];
  for (var i = 0; i < array.length; i++) {
    count++;
    averageSum += array[i];
    resultOfAverageSum = averageSum / count;
  }
  for (var i = 0; i < array.length; i++) {
    var element = array[i];
    if (element > resultOfAverageSum) {
      listOfElementsGreaterThanAverageSum += element;
    }
  }
  return listOfElementsGreaterThanAverageSum;
}
var array = [1, 2, 3, 4, 5, 6];
var output = greaterThanAverage(array);
console.log(output);
/*49. 
The body mass index(BMI) is the ratio of the weight of a person(in kilograms) to the square of the height(in meters).Write a function that 
takes two parameters, weight and height, computes the BMI, and prints the corresponding BMI category:
Starvation: less than 15
Anorexic: less than 17.5
Underweight: less than 18.5
Ideal: greater than or equal to 18.5 but less than 25
Overweight: greater than or equal to 25 but less than 30
Obese: greater than or equal to 30 but less than 40
Morbidly obese: greater than or equal to 40
*/

function bmi(weight, height) {
  var bmi = weight / (height * height);
  console.log(bmi);
  switch (true) {
    case bmi < 15:
      console.log("Anorexic");
      break;
    case bmi < 17.5 && bmi > 15:
      console.log("Starvation");
      break;
    case bmi > 18.5 && bmi < 25:
      console.log("Ideal");
      break;
    case bmi > 25 && bmi < 30:
      console.log("Overweight");
      break;
    case bmi > 30 && bmi < 40:
      console.log("Obese");
      break;
    case bmi > 40:
      console.log("Morbidly");
      break;
    default:
      console.log("bmi not in scope");
  }
}
var weight = 80;
var height = 1.8;
/* 50.
Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:
For example the list["Hello", "World", "in", "a", "frame"] gets printed as:
*********
* Hello *
* World *
* in    *
* a     *
* frame *
*********
*/

function printHelloWorld(array) {
  var largest = [];
  var counter = 0;
  var firsAndLastRows = [];
  var middleRows = [];
  var square = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i].length > counter) {
      counter = array[i].length;
      largest = array[i];
    }
  }

  for (var i = 0; i < largest.length; i++) {
    if (i === 0 || i === counter - 1) {
      firsAndLastRows += "**";
    }
    firsAndLastRows += "*";
  }
  firsAndLastRows += "\n";

  for (var i = 0; i < array.length; i++) {
    var emptyStringArray = "";
    if (array[i].length < counter) {
      var empty = counter - array[i].length;
      for (var j = 0; j < empty; j++) {
        emptyStringArray += " ";
      }
    }
    middleRows += "* " + array[i] + emptyStringArray + " *";
    middleRows += "\n";
  }

  square = firsAndLastRows;
  square += middleRows;
  square += firsAndLastRows;

  return square;
}
var array = ["Hello", "World", "in", "a", "frame"];
var output = printHelloWorld(array);
console.log(output);
/* 51. 
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. 
At each position of the grid there is either a space or a "#" character. The characters should form a chess board.
Passing this string to console.log should show something like this:
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
*/

function chessBoard(parameter) {
  var chessBoardRow = "";
  var element = "";
  var counter = 0;
  for (var i = 0; i < parameter * parameter; i++) {
    if (counter % 2 === 0) {
      i % 2 === 0 ? (element = " ") : (element = "#");
      chessBoardRow += element;
    }
    if (counter % 2 === 1) {
      i % 2 === 1 ? (element = "#") : (element = " ");
      chessBoardRow += element;
    }
    if (i % parameter === 0) {
      chessBoardRow += "\n";
    }
    counter++;
  }
  // for (var i = 0; i < parameter; i++) {
  //     (i % 2 === 0) ? element = ' ' : element = "#";
  //     chessBoardRowEven += element;
  // }
  // chessBoardRowEven += '\n'

  // for (var i = 0; i < parameter; i++) {
  //     (i % 2 === 0) ? element = '#' : element = " ";
  //     chessBoardRowOdd += element;
  // }
  // chessBoardRowOdd += '\n'

  // for (var i = 0; i < parameter; i++) {
  //     (i % 2 === 0) ? chessBoard += chessBoardRowEven : chessBoard += chessBoardRowOdd;
  // }
  return chessBoardRow;
}
function Person(name, surname, dateOfBirth) {
    this.name = name;
    this.surname = surname;
    this.age = (function () {
        var currentDate = new Date();
        var currentYear = currentDate.getFullYear();
 
        var birthDate = new Date(dateOfBirth);
        var yearOfBirth = birthDate.getFullYear();
 
        return currentYear - yearOfBirth;;
    })();
 
    this.getData = function () {
        return this.name + " is " + this.age + " years old";
    }
 }