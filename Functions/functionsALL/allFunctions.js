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
  }
  else if (a < b) {
    return b;
  }
  else {
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
  }
  else {
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
    return "Number is three digit"
  }
  else {
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
  for (var i = 0; i < st.length; i++){
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
  var middleRowa = ""
  var starRow = ""
  for (var i = 0; i < a; i++){
    firstAndLastRowa += " *";

  }
  firstAndLastRowa += "\n";
  for (var j = 0; j < a; j++){
    if (j === 0 || j === (a - 1)) {
      middleRowa += " *";
    }
    else middleRowa += "  ";
  }
  middleRowa += "\n";

  for (var k = 0; k < a; k++){
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
  for (var i = 0; i < n; i++){
    star += " *"
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
  for (var i = 0; i < n1; i++){
    starsRow1 += " *";
    if (i === n1) {
      starsRow1 += "\n";
    }
  }
    for (var j = 0; j < n2; j++) {
        starsRow2 += ' *'
        if (j === n2) {
            starsRow2 += '\n'
        }

    }
    for (var k = 0; k < n3; k++) {
        starsRow3 += ' *'
        if (k === n3) {
            starsRow3 += '\n'
        }

    }
    console.log(starsRow1)
    console.log(starsRow2)
    console.log(starsRow3)

}
var output = square(5, 3, 7)
console.log(output)

/* 32. 
Write a function that calculates a number of digits of a given number.
*/
function calcNumber(number) {
  var numberString = number + "";
  var count = 0;
  for (var i = 0; i < numberString.length; i++){
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
  var pString = p 
  for (var i = 0; i < numString.length; i++){
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