// ********************** Exercise 1 STARTS HERE **********************
/* 
Write a program that checks if a given element e is in the array a.
Input: e = 3, a = [5, -4.2, 3, 7]
Output: yes
Input: e = 3, a = [5, -4.2, 18, 7]
Output: no
*/
// *********** YOUR CODE HERE **********************
e = 3, a = [5, -4.2, 3, 7]
var result = "";
for (var i = 0; i < a.length; i++) {
    if (a[i] = e) {
        result = "yes";
    }
    else {
        result = "no";
    }
}
console.log(result);
// ********************** Exercise 2 STARTS HERE **********************
/* 
Write a program that will allow someone to guess a four digit pin exactly 4
times. If the user guesses the number correctly. It prints “That was
correct!” Otherwise it will print “Sorry that was wrong.” Program stops after the 4th attempt of if they got it right. */

// *********** YOUR CODE HERE **********************

var pin = 1234;
var quess = [1325, 1728, 1244, 3363];

for (var i = 0; i <= 4; i++) {
    console.log('Input your PIN: ' + quess[i]);
    if (quess[i] === pin) {
        console.log('That was correct!');
        break;                                              // break out of loop if true
    }
    else {
        console.log('That was wrong');
    }
}

// ********************** Exercise 3 STARTS HERE **********************

/*Get the sum of two arrays…actually the sum of all their elements.
P.S. Each array includes only integer numbers. Output is a number too.
let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351
// Example output: 
// 276 + 351 = 627
*/

// *********** YOUR CODE HERE **********************
var arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2]; // --> 276
var arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26]; // --> 351
var sum1 = 0;
var sum2 = 0;
for (var i = 0; i < arr_1.length; i++) {
    sum1 += arr_1[i];
}
console.log(sum1);
for (var i = 0; i < arr_2.length; i++) {
    sum2 += arr_2[i];
}
console.log(sum2);
var sum = sum1 + sum2;
console.log(sum);

// ********************** Exercise 4 STARTS HERE **********************

/*
Using a for loop print all even numbers up to and including n. Don’t include 0.

let n1 = 22; 
// Example output: 
// 2 4 6 8 10 12 14 16 18 20 22 OR each item on a new line
*/

// *********** YOUR CODE HERE **********************
var n1 = 33;
for (var i = 1; i < n1; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
// ********************** Exercise 4 STARTS HERE **********************

/*
Using a for loop output the elements in reverse order

let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
// Example output: 
// true 3.5  be  false cannot  true 9 what 43 OR each item on a new line
*/

// *********** YOUR CODE HERE **********************
var arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
for (var i = arr.length -1; i >= 0; i--) {
    console.log(arr[i]); // only print
    arr[arr.length-i -1] = arr[i]; // new arr array with reverse elements

}
console.log(arr);

// ********************** Exercise 4 STARTS HERE **********************

/*
Given two arrays of integers. Add up each element in the same position and
create a new array containing the sum of each pair. Assume both arrays are of the same length.

let arr_3   = [4, 6, 7];
let arr_4    = [8, 1, 9];
// Example output: 
// [12, 7, 16]
*/

// *********** YOUR CODE HERE **********************
var arr_3   = [4, 6, 7];
var arr_4    = [8, 1, 9];
var n = arr_3.length;
var arr_sum =[];
for(var i =0; i<arr_3.length;i++){
   arr_sum[i] = arr_3[i]  + arr_4[i];
}
console.log(arr_sum);

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



