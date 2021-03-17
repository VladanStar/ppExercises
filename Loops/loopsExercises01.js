// Feel free to solve the following exercises however you like. You can create a function or solve it without 
// the use of a function. Example inputs are given. Feel free to change it to different values.

// ********************** Exercise 1 STARTS HERE **********************
/*1. Write a program that checks if a given element e is in the array a.
Input: e = 3, a = [5, -4.2, 3, 7]
Output: yes
Input: e = 3, a = [5, -4.2, 18, 7]
Output: no */

// *********** YOUR CODE HERE **********************

var e = 3;
var result = "";
var a = [5, -4.2, 8, 7];

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
/*Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8] */

// *********** YOUR CODE HERE **********************
var a = [-3, 11, 5, 3.4, -8];
for (var i = 0; i < a.length; i++) {
    if (a[i] > 0) {
        a[i] = a[i] * 2;
    }
    else {
        a[i] = a[i];
    }
}
console.log(a);

// ********************** Exercise 3 STARTS HERE **********************
/* Write a program that finds the minimum of a given array and prints out its value and
index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3 */

// *********** YOUR CODE HERE **********************
var b = [4, 2, 2, -1, 6];
var min = 0;
var index = 0;
for (var i = 0; i < b.length; i++) {
    if (min > b[i]) {
        min = b[i];
        index = i;
    }

}
console.log(min);
console.log(index);
// ********************** Exercise 4 STARTS HERE **********************
/* Write a program that finds the first element larger than minimum and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2*/

// *********** YOUR CODE HERE **********************
var c = [4, 2, 2, -1, 6];
var n = c.length;
var pom;
for (var i = 0; i < c.length; i++) {
    for (var j = i + 1; j < c.length; j++) {
        if (c[i] > c[j]) {
            pom = c[i];
            c[i] = c[j];
            c[j] = pom;

        }
    }
}
console.log(c);
console.log(c[1]);

// ********************** Exercise 5 STARTS HERE **********************
/* Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16 */

// *********** YOUR CODE HERE **********************
var c = [3, 11, -5, -3, 2];
var sum = 0;
for (var i = 0; i < c.length; i++) {
    if (c[i] > 0) {
        sum += c[i];
    }

}
console.log(sum);

// ********************** Exercise 6 STARTS HERE **********************
/* Write a program that checks if a given array is symmetric. 
An array is symmetric if it can
be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
Input array: [3, 4, 12, 8]
Output: The array isn’t symmetric. */

// *********** YOUR CODE HERE **********************
var nums = [2, 4, -2, 7, 7, -2, 4, 2];

var back = [];

var result = "";
for (var i = 0; i < nums.length; i++) {

    back[i] = nums[(nums.length - 1) - i];
}
for (var i = 0; i < nums.length; i++) {
    if (nums[i] == back[i]) {
        result = "yess";
    }
    else {
        result = "no";
    }
}
console.log(result);
// ********************** Exercise 7 STARTS HERE **********************
/* 7. Write a program that intertwines two arrays. You can assume the arrays are of the same
length.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9] */

// *********** YOUR CODE HERE **********************
var a = [4, 5, 6, 2], b = [3, 8, 11, 9];
var c = [];
for (var i = 0; i < a.length; i++) {

    c[c.length] = a[i];
    c[c.length] = b[i];
}

console.log(c);
// ********************** Exercise 8 STARTS HERE **********************
/* 8. Write a program that concatenates two arrays.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9] */

// *********** YOUR CODE HERE **********************
c1 = [4, 5, 6, 2];
c2 = [3, 8, 11, 9];
c3 = [];

for (var i = 0; i < c1.length; i++) {
    c3[i] = c1[i];
}

for (var j = 0; j < c2.length; j++) {
    c3[c1.length + j] = c2[j];
}

console.log(c3);

// ********************** Exercise 9 STARTS HERE **********************
/* 9.Write a program that deletes a given element e from the array a.
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8] */

// *********** YOUR CODE HERE **********************
var e = 2, a = [4, 6, 2, 8, 2, 2];
var b = [];
for (var i = 0; i < a.length; i++) {
    if (a[i] !== e) {
        b[b.length] = a[i];

    }
}
console.log(b);
// ********************** Exercise 10 STARTS HERE **********************
/* Write a program that inserts a given element e on the given position p in the array a. If
the value of the position is greater than the array length, print the error message.
Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]*/

// *********** YOUR CODE HERE **********************
var e = 78, p = 3, a = [2, -2, 33, 12, 5, 8];
var b= [];
for( var i=0;i<a.length; i++){
    if(i ===p){
        b[i] = e;
    }
    else if(i>p){
        b[i] = a[i-1];
    }
    else{
        b[i] = a[i];
    }
}
console.log(b);