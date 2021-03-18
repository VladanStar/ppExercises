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
Write a program that will allow someone to guess a four digit pin exactly 4
times. If the user guesses the number correctly. It prints “That was
correct!” Otherwise it will print “Sorry that was wrong.” Program stops after the 4th attempt of if they got it right. */

// *********** YOUR CODE HERE **********************

var pin = 1234;
var quess = [1325, 1728, 1244, 3363];

for (var i = 0; i <= 4; i++ ) {
    console.log('Input your PIN: ' + quess[i]);
    if (quess[i] === pin) {
        console.log('That was correct!');
        break;                                              // break out of loop if true
    }
    else {
        console.log('That was wrong');
    }
}