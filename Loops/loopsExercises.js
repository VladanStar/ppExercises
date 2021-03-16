process.stdin.resume();
process.stdin.setEncoding('utf8');


// Feel free to solve the following exercises however you like. You can create a function or solve it without 
// the use of a function. Example inputs are given. Feel free to change it to different values.

// ********************** Exercise 1 STARTS HERE **********************
// Get the sum of two arrays...actually the sum of all their elements. 
// P.S. Each array includes only integer numbers. 
// Example input arrays:
var arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
var arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351
// Example output: 
// 627

// *********** YOUR CODE HERE **********************
var sum=0;
for(var i =0; i<arr_1.length;i++){
    sum +=arr_1[i];
}
 console.log(sum);
 var sum2 =0;
for(var i =0;i<arr_2.length;i++){
    sum2+=arr_2[i];
}
console.log(sum2);
var result = sum+sum2;
console.log(result);



// ********************** Exercise 2 STARTS HERE **********************
// Using a for loop print all even numbers up to and including n. Don’t include 0.  
let n1 = 22; 
// Example output: 
// 2 4 6 8 10 12 14 16 18 20 22 OR each item on a new line

// *********** YOUR CODE HERE **********************

for (var i =0; i<=n1;i++){
    if(i %2 ==0){
        console.log(i);
    }
}


// ********************** Exercise 3 STARTS HERE **********************
// Using a for loop output the elements in reverse order 
var arr = [43, "what", 9, true, "cannot", false, "be", 3, true];

// Example output: 
// true 3  be  false cannot  true 9 what 43 OR each item on a new line

// *********** YOUR CODE HERE **********************

for (var i = arr.length-1; i >= 0; i--) {  
  console.log(arr[i]);  
}  


// ******* 
//*************** Exercise 4 STARTS HERE **********************
// Given two arrays of integers. Add up each element in the same position and create a new array containing the sum of each pair. Assume both arrays are of the same length. 
var arr_3   = [4, 6, 7];
var arr_4	= [8, 1, 9];
var arr_5 =[];
// Example output: 
// [12, 7, 16]

// *********** YOUR CODE HERE **********************
for(var i =0; i<arr_3.length;i++){
    arr_5[i]=  arr_3[i] + arr_4[i];
}
console.log(arr_5);

// ********************** Exercise 5 STARTS HERE **********************
// Given a string change the every second letter to an uppercase  ‘Z’. Assume there are no space. 
let str1 = "javascript";  
// Example output: 
// jZvZsZrZpZ OR each letter on a new line

// *********** YOUR CODE HERE **********************








// ********************** Exercise 6 STARTS HERE **********************
// Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not. 
let str2 = "don’t know why";
// Example output: 
// “yes” 

// *********** YOUR CODE HERE **********************








// ********************** Exercise 7 STARTS HERE **********************
// Given a number n Calculate the factorial of the number 
let n2 = 4; //  4 * 3 * 2 * 1 = 24
// Example output:
// 24

// *********** YOUR CODE HERE **********************








// ********************** Exercise 8 STARTS HERE **********************
// Write a program that will allow someone to guess a four digit pin exactly 4 times. If the user guesses the number correctly. It prints  “That was correct!” Otherwise it will print “Sorry that was wrong.” Program stops after the 4th attempt of if they got it right. 
let pin = 0704;
// Example output:
// Please make your guess: 
// 4544 
// Sorry that was wrong.
// Please make your guess: 
// 4444
// Sorry that was wrong.
// Please make your guess: 
// 0704
// That was correct!

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









// ********************** Exercise 10 STARTS HERE **********************
// This is a code wars kata. click here to train on “Grasshopper – Summation” on code wars.
// Write a program that finds the summation of every number from 1 to num. 
// The number will always be a positive integer greater than 0.
let num1 = 2; 
let num2 = 8; 
// Example output: 
// 1 + 2 = 3
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 = 36 

// *********** YOUR CODE HERE **********************