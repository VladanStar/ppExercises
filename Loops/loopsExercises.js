process.stdin.resume();
process.stdin.setEncoding('utf8');


// Feel free to solve the following exercises however you like. You can create a function or solve it without 
// the use of a function. Example inputs are given. Feel free to change it to different values.

// ********************** Exercise 1 STARTS HERE **********************
// Get the sum of two arrays...actually the sum of all their elements. 
// P.S. Each array includes only integer numbers. 
// Example input arrays:
var arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2]; // --> 276
var arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26]; // --> 351
// Example output: 
// 627

// *********** YOUR CODE HERE **********************
var sum = 0;
for (var i = 0; i < arr_1.length; i++) {
    sum += arr_1[i];
}
console.log(sum);
var sum2 = 0;
for (var i = 0; i < arr_2.length; i++) {
    sum2 += arr_2[i];
}
console.log(sum2);
var result = sum + sum2;
console.log(result);



// ********************** Exercise 2 STARTS HERE **********************
// Using a for loop print all even numbers up to and including n. Don’t include 0.  
let n1 = 22;
// Example output: 
// 2 4 6 8 10 12 14 16 18 20 22 OR each item on a new line

// *********** YOUR CODE HERE **********************

for (var i = 0; i <= n1; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}


// ********************** Exercise 3 STARTS HERE **********************
// Using a for loop output the elements in reverse order 
var arr = [43, "what", 9, true, "cannot", false, "be", 3, true];

// Example output: 
// true 3  be  false cannot  true 9 what 43 OR each item on a new line

// *********** YOUR CODE HERE **********************

for (var i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}


// ******* 
//*************** Exercise 4 STARTS HERE **********************
// Given two arrays of integers. Add up each element in the same position and create a new array containing the sum of each pair. Assume both arrays are of the same length. 
var arr_3 = [4, 6, 7];
var arr_4 = [8, 1, 9];
var arr_5 = [];
// Example output: 
// [12, 7, 16]

// *********** YOUR CODE HERE **********************
for (var i = 0; i < arr_3.length; i++) {
    arr_5[i] = arr_3[i] + arr_4[i];
}
console.log(arr_5);

// ********************** Exercise 5 STARTS HERE **********************
// Given a string change the every second letter to an uppercase  ‘Z’. Assume there are no space. 
var str1 = "javascript";
var a = "Z";
var str2 = [];
// Example output: 
// jZvZsZrZpZ OR each letter on a new line

// *********** YOUR CODE HERE **********************
for (var i = 0; i < str1.length; i++) {
    if (i % 2 !== 0 && i != 0) {
        console.log(str2[str2.length] = "Z");
    }
    else {
        console.log(str2[str2.length] = str1[i]);
    }
}

// ********************** Exercise 6 STARTS HERE **********************
// Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not. 
var str2 = "don’t know why";
var result = "";
// Example output: 
// “yes” 

// *********** YOUR CODE HERE **********************


for (var i = 0; i < str2.length; i++) {
    if (str2[i] == "y") {
        result = "yes";
    }
    else {
        result = "no";
    }
}
console.log(result);




// ********************** Exercise 7 STARTS HERE **********************
// Given a number n Calculate the factorial of the number 

// Example output:
// 24
let n2 = 4; //  4 * 3 * 2 * 1 = 24
var p = 1;
// *********** YOUR CODE HERE **********************

for (var i = 1; i <= n2; i++) {
    p *= i;
}
console.log(p);





// ********************** Exercise 8 STARTS HERE **********************
// Write a program that will allow someone to guess a four digit pin exactly 4 times. If the user guesses the number correctly. It prints  “That was correct!” Otherwise it will print “Sorry that was wrong.” Program stops after the 4th attempt of if they got it right. 
let pin = 0704;
// Example output:
//Sorry that was wrong.
// Please make your guess: 
// 4444
// Sorry that was wrong.
// Please make your guess: 
// 0704
// That was correct! Please make your guess: 
// 4544 
// So

// *********** YOUR CODE HERE **********************



// ********************** Exercise 9 STARTS HERE **********************
// Write a program that will check if two strings are palindromes. A palindrome is a word that spells the same forward and backward. 
// Palindrome: a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
let str3 = "racecar";
let str4 = "Java";
// Example output:
// string1 palindrome?: 
// Yes 
// string2 palindrome?: 
// No 

// *********** YOUR CODE HERE **********************

var length = str3.length;
var forward = 0;
var backward = length - 1;
while (backward > forward) {
    var forwardChar = str3.charAt(forward++);
    var backwardChar = str3.charAt(backward--);
    if (forwardChar != backwardChar)
        console.log(false);
}
console.log(true);


// ********************** Exercise 10 STARTS HERE **********************
// This is a code wars kata. click here to train on “Grasshopper – Summation” on code wars.
// Write a program that finds the summation of every number from 1 to num. 
// The number will always be a positive integer greater than 0.
let num1 = 8;
var sum = 0;
var my_sum = 0;
// Example output:
// 1 + 2 = 3
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 = 36 

// *********** YOUR CODE HERE **********************

for (var i = 0; i <= num1; i++) {
    my_sum = my_sum + i;
}
console.log(my_sum);


// ********************** Exercise 11 STARTS HERE **********************
// 11. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
//number is odd or even, and display a message to the screen.

// *********** YOUR CODE HERE **********************

for (var i = 0; i <= 15; i++) {
    if (i % 2 == 0) {
        console.log(i + " is even");
    }
    else {
        console.log(i + " is odd");
    }
}


// ********************** Exercise 12 STARTS HERE **********************
//Write a program to sum the multiples of 3 and 5 under 1000.

// *********** YOUR CODE HERE **********************
var sum = 0;
for (var i = 0; i < 1000; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        sum += i;
    }
}
console.log(sum);

// ********************** Exercise 13 STARTS HERE **********************
//Write a program to compute the sum and product of an array of integers.
// *********** YOUR CODE HERE **********************
var num1 = 10;
var sum = 0;
var product = 1;
for (var i = 1; i < num1; i++) {
    sum += i;
    product *= i;
}
console.log(sum);
console.log(product);


// ********************** Exercise 14 STARTS HERE **********************
/* 4. Write a program which prints the elements of the following array as a single string.
*/
var x = ["1", "A", "B", "c", "r", true, NaN, undefined];
var s = "";
// *********** YOUR CODE HERE **********************

for (var i = 0; i < x.length; i++) {
    s += x[i];
}
console.log(s);

// ********************** Exercise 15 STARTS HERE **********************
/* 
 Write a program that prints the elements of the following array.
var a = [
[1, 2, 1, 24],
[8, 11, 9, 4],
[7, 0, 7, 27]
];
*/
// *********** YOUR CODE HERE **********************
var a = [

    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27]
];
var b = [];
for (var i in a) {
    for (var j in a[i]) {
        b[b.length] = a[i][j];
    }
}
console.log(b);

// ********************** Exercise 16 STARTS HERE **********************
/* 
16. Write a program that outputs the sum of squares of the first 20 numbers.
*/
// *********** YOUR CODE HERE **********************

var sum = 0;
for (var i = 0; i <= 20; i++) {
    sum += (i * i);
}
console.log(sum);

// ********************** Exercise 17 STARTS HERE **********************
/* 
Write a program that computes average marks of the following students. Then use this
average to determine the corresponding grade.
*/
// *********** YOUR CODE HERE **********************
var students = [['David', 80], ['Marko', 77], ['Dany', 88], ['John', 95], ['Thomas', 68]];

var Avgmarks = 0;
var sum = 0;
for (var i = 0; i < students.length; i++) {
    sum += students[i][1];
}
Avgmarks = sum / students.length;
console.log(Avgmarks);
if (avg < 60) {
    console.log("Grade : F");
}
else if (avg <= 70) {
    console.log("Grade : D");
}
else if (avg <= 80) {
    console.log("Grade : C");
}
else if (avg <= 90) {
    console.log("Grade : B");
}
else if (avg <= 100) {
    console.log("Grade : A");
}
// ********************** Exercise 18 STARTS HERE **********************
/* 
18. Write a program that uses console.log to print all the numbers from 1 to 100, with two
exceptions. For numbers divisible by 3, print "Fizz"; instead of the number, and for numbers
divisible by 5 (and not 3), print "Buzz"; instead. When you have that working, modify your
program to print "FizzBuzz";, for numbers that are divisible by both 3 and 5 (and still print
"Fizz"; or "Buzz"; for numbers divisible by only one of those).
*/
// *********** YOUR CODE HERE **********************

for (var i = 0; i < 100; i++) {
    var divThree = i % 3;
    var divFive = i % 5;
    if (divThree == 0 && divFive == 0) {
        console.log("FizzBuzb");
    }
    else if (divThree == 0) {
        console.log("Fizz");
    }
    else if (divFive == 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}
