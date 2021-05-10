console.log(" TASK 0");
var result = true;

function subtract(first, second) {
  return first - second;
}

result = subtract(12, -10);

result = subtract(22, 2);

console.log(result);
//----------------------------------------- 1
console.log(" TASK 1");
'use strict';

myVar = "random";

function addOne(num) {
   return num + 1;
}

var result = addOne(4);
console.log(result);
//-----------------------------------2 
console.log(" TASK 2");
var global = 123;

var resetGlobal = function () {
   global = -1;
};

console.log(global);
//-----------------3-----------------
console.log(" TASK 3");
var global = 123;

var resetGlobal = function () {
   global = -1;
};

resetGlobal;
console.log(global);
//---------------------------4---------------------
console.log(" TASK 4");
var global = 123;

var resetGlobal = function () {
   global = arguments[0] || -1;
};

resetGlobal(10);
console.log(global);

resetGlobal(0);
console.log(global);
//-----------------5-------------------
console.log(" TASK 5");
'use strict';

var result = square(10);
console.log(result);

function square(num) {
   num *= num;
}
//---------------------6-----------------
console.log(" TASK 6");
'use strict';

var result = square(10);
console.log(result);

function square(num) {
  return num *= num;
}
//------------------7---------------
console.log(" TASK 7");
function toString(num) {
   result = num + '';
   return result;
}

console.log(result);
//-----------------------8-----------------
console.log(" TASK 8");
function toString(num) {
'use strict';
   result = num + '';
   return result;
}

toString(num);
console.log(result);

//----------------------9--------------------
console.log(" TASK 9");
var output = toString(0.15);
console.log(output);

var toString = function (num) {
   var result = num + '';
   return result;
}
//------------------------10--------------------
console.log(" TASK 10");
var toString = function (num) {
   var result = num + '';
   return result;
}

var output = toString(0.15);
console.log(output);
//-------------------11----------------
console.log(" TASK 11");
var toString = function (num) {
   num = num || '';
   var result = num + '';
   return result;
}

var output = toString;
console.log(output);
//---------------------12-----------------
console.log(" TASK 12");
 'use strict';

var global = parseInt("1e2");

incrementGlobal = function () {
   global++;
};

incrementGlobal();

console.log(global);
console.log(typeof global);
//-------------------13======----
console.log(" TASK 13");
function sum(num1, num2) {
   num1 = num1 || 0;
   num2 = num2 || 0;

   if (!num1 && !num2) {
       return -1;
   }

   return num1 + num2;
}

var sumNumbers = sum;
var result = sumNumbers();

console.log(result);
//--------------------------14---------------
console.log(" TASK 14");
// Example 14

var x = 21;
var girl = function () {
   console.log(x);
   var x = 20;
};
girl();
//------------------------15---------------
console.log(" TASK 15");
// Example 15

   function test() {
       console.log(a);
       console.log(foo());

       var a = 1;
       function foo() {
           return 2;
       }
   }

   test();
//-------------------16--------------
function sqr(n){
   var n;
   n*=n;
   return n;
}

function arraySqr (a, f){
    for (i=0; i<a.length; i++) a[i]=f(a[i]);
    return a;
}

console.log (arraySqr([1,2,3,4,5,6,7,8,9],sqr));

//------------------------
function sumOfDigits(n) {
    var sum = 0;
    var lastDigit;
    if (typeof n != "number") {
        return -1;
    }
    while (n > 0) {
        lastDigit = n % 10;
        n = (n - lastDigit) / 10;
        sum = sum + lastDigit;

    }
    return sum;
}
console.log(sumOfDigits(481));
typeof console.log;

(function () {
    return console.log;
})()('boo');


function test() {
    return function () {
        console.log('vladan')
    }
}
var result = test();
result();
function m(a, b) {
    var mR = a + b;
    return function (a, b) {
        return mR + a + b;
    }
}

var ary = ['three', 'seven', 'eleven'];

// Remove item 'seven' from array
var filteredAry = ary.filter(function (e) { return e !== 'seven' })
//=> ["three", "eleven"]

// In ECMA6 (arrow function syntax):
var filteredAry = ary.filter(e => e !== 'seven');
console.log(filteredAry);