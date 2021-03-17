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
var result= "";
for( var i =0; i<a.length;i++){
    if(a[i] = e){
        result="yes";
    }
    else{
        result ="no";
    }
}
console.log(result);
// ********************** Exercise 2 STARTS HERE **********************
/* 
Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]
*/
// *********** YOUR CODE HERE **********************
a = [-3, 11, 5, 3.4, -8];