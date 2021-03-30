// ********************** Exercise 1 STARTS HERE **********************
/*
Write a JavaScript function that reverse a number. 
Example x = 32243;
Expected Output : 34223 */
// *********** YOUR CODE HERE **********************

var reverse = function reverseNumber(x) {
  temp = (x < 0) ? -1 : 1;
  x = x * temp;
  var res = x % 10;
  while (x > 9) {
    x = (x - x % 10) / 10;
    res = 10 * res + x % 10;
  };

  return res * temp;
};

console.log(reverse(-321));
console.log(reverse(1539));

// ********************** Exercise 2 STARTS HERE **********************
/*
Write a JavaScript function that checks whether a passed string is palindrome or not? Go to the editor
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
*/
// *********** YOUR CODE HERE **********************
function is_Palindrome(str) {
  array1 = str + "";

  const len = array1.length;
  var isMatch = true;

  for (var i = 0; i < len / 2; i++) {
    if (array1[i] !== array1[len - 1 - i]) {
      isMatch = false;
    }
  }
  return isMatch;
}

console.log("desk - ", is_Palindrome("desk"));
console.log("racecar - ", is_Palindrome("racecar"));
// second way

function isPalindrome(s) {
  var len = s.length;
  if (len < 2) {
    return true;
  }
  var i = 0;
  var j = len - 1;
  while (i < j) {
    if (s[i] != s[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}
console.log(isPalindrome("reer"));

// ********************** Exercise 3 STARTS HERE **********************
/*
Write a JavaScript function that generates all combinations of a string. 
Example string : 'dog'
Expected Output : d,do,dog,o,og,g
*/
// *********** YOUR CODE HERE **********************

function printSubsequences(str) {
  let len = str.length, result = [];
  for (let i = 1; i < (1 << len); i++) {
    let temp = "";
    for (let j = 0; j < len; j++) {
      if ((i & (1 << j))) {
        temp = temp + str.charAt(j);
      }
    }
    result.push(temp);
  }
  console.log(result);
}
printSubsequences('dog');

// ********************** Exercise 4 STARTS HERE **********************
/*
Write a JavaScript function that returns a passed string with letters in alphabetical order. Go to the editor
Example string : 'webmaster'
Expected Output : 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string
*/
// *********** YOUR CODE HERE **********************
function alphabet_order(str) {
  return str.split('').sort().join('');
}
console.log(alphabet_order("webmaster"));

// ********************** Exercise 5 STARTS HERE **********************
/*
Max two numbers
*/
// *********** YOUR CODE HERE **********************
var num1 = 90;
var num2 = 9;

function findMaxNumber(num1, num2) {
  // 1. long syntax
  /* if(num1 > num2){
    return num1
  } else {
    return num2
  } */

  // 2. short syntax
  /* if(num1 > num2) return num1;
  else return num2; */

  // 3. ternary short syntax
  return (num1 > num2) ? num1 : num2;
}
var max = findMaxNumber(num1, num2);
console.log(max);

// ********************** Exercise 6 STARTS HERE **********************
/*
Write a function which checks number till given input/parameter is odd or even
*/
// *********** YOUR CODE HERE **********************

function isOddEvenNumber(curLimit) {
  for (var i = 0; i <= curLimit; i++) {
    /* if (i % 2 === 0) {
      console.log(i , 'EVEN');
    } else {
      console.log(i , 'ODD');
    } */

    var alertMessage = (i % 2 === 0) ? 'EVEN' : 'ODD';
    console.log(i, alertMessage);
  }
}

console.log(isOddEvenNumber(10));

// ********************** Exercise 7 STARTS HERE **********************
/*
Write a function which checks and count the truthy values from an array
 Falsy values in JavaScript are:
  
    false
    0 (zero)
    undefined
    null
    ''
    NaN

*/
// *********** YOUR CODE HERE **********************
var valuesArray = [0, 1, '', undefined, false, true];

function checkCountTruthyFalsy(curArray) {
  var truthyCount = 0;

  for (var value of curArray) {
    // no need to check if(value !== false || value !== 0 || value !== '' or ...)
    if (value) {
      truthyCount++;
    }
  }
  return truthyCount;
}

console.log(checkCountTruthyFalsy(valuesArray));

// ********************** Exercise 7 STARTS HERE **********************
// Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then be multiplied by 12.5 and displayed in console.
// Output: 2350000
// *********** YOUR CODE HERE **********************

function calculation() {
  var sum = 0;
  var sumOdd = 0;
  var result = 0;

  for (var i = 1; i <= 1000; i++) {
    if (i % 2 === 0) {
      sum += i;
    } else if (i % 2 !== 0 && i <= 500)
      sumOdd += i;
  }

  result = (sum - sumOdd) * 12.5;
  return result;
}

console.log(calculation());

// ********************** Exercise 8 STARTS HERE **********************
// /* Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) in the array and create a new string ////from them. Print it out in the console.
//Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]

// *********** YOUR CODE HERE **********************

function firstTwoLetters(a) {
  var newString = "";

  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < a[i].length; j++) {
      if (a[i].length >= 2 && j < 2) {
        newString += a[i][j];
      }
    }
  }

  return newString;
}

console.log(firstTwoLetters(["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"]));

// ********************** Exercise 9 STARTS HERE **********************

//Reverse string
// *********** YOUR CODE HERE **********************

function reverseOrder(someString) {
  var newString = "";

  for (var i = someString.length - 1; i >= 0; i--) {
    newString += someString[i];
  }
  return newString;
}

console.log(reverseOrder("Belgrade Institute of Technology"));

// ********************** Exercise 9 STARTS HERE **********************

//From To non duplicate 
// *********** YOUR CODE HERE **********************
function combineNonDuplicatePairs(intervalFrom, inetervalTo) {
  var combinations = [];
  var numberOfPairs = 0;

  for (var i = intervalFrom; i <= inetervalTo; i++) {
    for (var j = 1; j <= inetervalTo; j++) {
      if (i !== j) {
        combinations[numberOfPairs] = [i, j];
        numberOfPairs++;
       
      }
    }
  }

  return combinations;
}

console.log(combineNonDuplicatePairs(1, 7));

// ********************** Exercise 10 STARTS HERE **********************

//is a prime number
// *********** YOUR CODE HERE **********************

function isAPrimeNumber(number) {
  if(number <= 0) {
      return false;
  }

  for (var i = 2; i < number; i++) {
      if (number % i === 0) {
          return false;
      }
  }

  return true;
}

console.log(isAPrimeNumber(4))

// ********************** Exercise 11 STARTS HERE **********************

//is a palindrome
// *********** YOUR CODE HERE **********************
function isAPalindrome(someStr) {
  someString = "";

  for (var i = 0; i < someStr.length; i++) {
      if (someStr[i] !== " ") {
          someString += someStr[i];
      }
  }
  console.log(someString);
  for (var i = 0; i < someString.length / 2; i++) {

      if (someString[i] !== someString[someString.length - i - 1]) {
          return false;
      }
      return true;
  }
}

console.log(isAPalindrome("a nut for a jar of tuna"));

// ********************** Exercise 12 STARTS HERE **********************

// divisor
// *********** YOUR CODE HERE **********************

function greatestCommonDivisor(a, b) {
  var divisor = 0;
  for (var i = 1; i <= a && i <= b; i++) {
      if (a % i === 0 && b % i === 0) {
          divisor = i;
      }
  }

  return divisor;
}

console.log(greatestCommonDivisor(81, 9));