var countVowels = function (str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        switch (str[i]) {
            case "a":
                count++;
                break;
            case "e":
                count++;
                break;
            case "i":
                count++;
                break;
            case "o":
                count++;
                break;
            case "u":
                count++;
                break;
        }
    }
    return count;
}

console.log(countVowels("kako je lepo programirati"));
//----------------------------------------------------------------------------

function combineArrays(arrA, arrB) {
    var newArray = [];
    var longerArr;

    if (arrA > arrB) {
        longerArr = arrA;
    } else {
        longerArr = arrB;
    }

    for (var i = 0; i < longerArr.length; i++) {
        // if (i < arrA.length) {
        newArray[newArray.length] = arrA[i];
        // }
        // if (i < arrB.length) {
        newArray[newArray.length] = arrB[i];
        // }

    }

    return newArray;
}

console.log(combineArrays(["a", "b", "c"], [1, 2, 3, 4, 5]));
//--------------------------------------------------------------------
function changePlace(arr, n) {
    var newArr = [];
    for (var i = n; i < arr.length; i++) {
        newArr[newArr.length] = arr[i];
    }
    for (var j = 0; j < n; j++) {
        newArr[newArr.length] = arr[j];
    }
    return newArr;
}

console.log(changePlace([1, 2, 3, 4, 5, 6], 2))
//------------------------------------------------------------------------
"use strict";

function arrayOfDigits(number) {
    var newArray = [];
    var str = number + "";

    for (var i = 0; i < str.length; i++) {
        newArray[newArray.length] = str[i];
    }

    return newArray;
}

console.log(arrayOfDigits(5687));
//-------------------------------------------------------------------------
function multiplicationTable(n) {
    var result = "";

    for (var i = 1; i <= n; i++) {
        result += "\n"
        for (var j = 1; j <= n; j++) {
            result += i * j + " ";

        }
        console.log(result);
    }

}

multiplicationTable(12);
//--------------------------------------------------------------------------
function centigradeToFahrenheit(temp) {
    var fahrTemp = 1;

    fahrTemp = temp * 1.8 + 32;

    return fahrTemp;
}

console.log(centigradeToFahrenheit(30));
//---------------------------------------------------------------------------
function findMaximum(arr) {
    max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (a[i] > max && typeof a[i] === "number") {
            max = a[i];
        }
    }

    return max;
}

a = [2, 5, "65", "7", 8, 12, -4, 5, 45];
console.log(findMaximum(a));
//--------------------------------------------------------------------------
function findMaxAndMin(a) {
    var newArray = [];
    var max = a[0];
    var min = a[0];
    for (var i = 0; i < a.length; i++) {
        if (a[i] > max && typeof a[i] === "number") {
            newArray[0] = a[i];
        }
        if (a[i] < min && typeof a[i] === "number") {
            newArray[1] = a[i];
        }
    }
    return newArray;
}

arr = [2, 5, "65", "7", 8, 12, -4, 5, 45];
console.log(findMaxAndMin(arr));
//---------------------------------------------------------------------------
function frequency(arr) {
    var mostFrequent = arr[0];
    var occurNum = 0;
    for (var i = 0; i < arr.length; i++) {
        counter = 0;
        for (var j = 0; j < arr.length; j++) {
            if (a[i] === a[j]) {
                counter++;
            }
        }

        if (occurNum < counter) {
            mostFrequent = a[i];
            occurNum = counter;
        }
    }
    return mostFrequent;
}
a = [8, 4, 1, 2, 7, 5, 1, 1, 2, 5];

console.log(frequency(a));
//-----------------------------------------------------------------------------
'use strict'
/*Write a function to count vowels in a provided string. If you are  not aware of indexOf function, try to use switch statement.*/
function vowels(arr) {
    var vowel = 'aeiouAEIOU';
    var counter = 0;
    for (var i = 0; i < arr.length; i++) {
        if (vowel.indexOf(arr[i]) !== -1) {
            counter++;
        }
    }
    return counter;
}
console.log(vowels("enrique iglesias"));
/* Write a function that combines two arrays by alternatingly taking elements.
[‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]  */

var combine = function (a, b) {
    var i;
    var j;
    var c = [];
    var k = 0;
    for (i = 0; i < a.length; i++) {
        c[k] = a[i];
        k++;
        c[k] = b[i];
        k++;
    }
    return c;
}
console.log(combine(["a", "b", "c"], [1, 2, 3]));

/* 3Write a function that rotates a list by k elements.
For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]  */

var rotateElements = function (arr, k) {
    var rotatedArray = [];
    var i;
    var j;
    // prebacujemo od k-tog elementa
    for (i = k, j = 0; i < arr.length; i++, j++) {
        rotatedArray[j] = arr[i];
    }
    // prebacujemo do k-tog elementa
    for (i = 0; j < arr.length; j++, i++) {
        rotatedArray[j] = arr[i];
    }
    return rotatedArray;
}

console.log(rotateElements([1, 2, 3, 4, 5, 6], 2));

/*Write a function that takes a number and returns array of its digits.
*/
var numToDigits = function (n) {
    var arr = [];
    var str = n + '';
    for (var i = 0; i < str.length; i++) {
        arr[i] = str[i];
    }

    return arr;
}
console.log(numToDigits(123));

/*Write a program that prints a multiplication table for numbers up to 12.
 */
var multiplication = function (n) {

    for (var i = 1; i <= n; i++) {
        var line = '';
        for (var j = 1; j <= n; j++) {
            line = line + i * j + ' ';
        }
        console.log(line);
    }
}

multiplication(12);
/*Write a function to input temperature in Centigrade and convert to Fahrenheit.
 */

var convertToF = function (celsius) {
    var fahrenheit;
    fahrenheit = ((celsius * (9 / 5)) + 32);
    return fahrenheit;
}
console.log(convertToF(10));

/*Write a function to find the median element of array. */
var median = function (a) {
    var medianIndex = 0;
    if (a.length % 2 == 1) {
        medianIndex = (a.length - 1) / 2;

    }
    return a[medianIndex];
}
console.log(median([1, 2, 3, 4, 5, 6, 7]));

/*Write a function to find and return the first, middle and last element of an array if the array has odd number of elements. If number of elements is even, return just the first and the last. In other cases, input array should be returned.
 */

var firstLast = function (a) {
    var medianIndex = 0;
    if (a.length % 2 == 1) {
        medianIndex = (a.length - 1) / 2;
        return a[0] + ' ' + a[a.length - 1] + ' ' + a[medianIndex];
    } else {
        return a[0] + ' ' + a[a.length - 1];
    }
}

console.log(firstLast([1, 2, 3, 4, 5, 6]));

/*The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the square of the height (in meters). Write a function that takes two parameters, weight and height, computes the BMI, and prints the corresponding BMI category:
Starvation: less than 15
Anorexic: less than 17.5
Underweight: less than 18.5
Ideal: greater than or equal to 18.5 but less than 25
Overweight: greater than or equal to 25 but less than 30
Obese: greater than or equal to 30 but less than 40
Morbidly obese: greater than or equal to 40 */
var bmi = function (w, h) {
    var result = w / (h * h);

    if (result < 15) {
        console.log("Starvation");
    } else if (result < 17.5 && result > 15) {
        console.log("Anorexic");
    } else if (result > 17.5 && result < 18.5) {
        console.log("Underweight");
    } else if (result > 18.5 && result < 25) {
        console.log("Ideal");
    } else if (result > 25 && result < 30) {
        console.log("Overweight");
    } else if (result > 30 && result < 40) {
        console.log("Obese");
    } else if (result > 40) {
        console.log("Morbidly");
    }
    return result;
}
bmi(86, 1.93);


/*Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:
For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
*********
* Hello *
* World *
* in    *
* a     *
* frame *
*********  */


/*Write a function to find the maximum element in array of numbers. Filter out all non-number elements.*/
function maximum(a) {      //filter non-number
    var b = [];
    var i;
    var j;
    for (i = 0, j = 0; i < a.length; i++) {
        if (typeof a[i] == "number" && !isNaN(a[i])) {
            b[j] = a[i];
            j++;
        }
    }
    var max = b[0];
    var i;
    for (i = 1; i < b.length; i++) {
        if (b[i] > max) {
            max = b[i];

        }
    } return max;
}
console.log(maximum([5, 6, NaN, "B", 9, 12, 18, 3, 65, "sun", 41]));


/*Write a function to find the maximum and minimum elements. Function returns an array.*/
function maxAndmin(a) {

    var max = a[0];

    var i;

    for (i = 1; i < a.length; i++) {
        if (a[i] > max) {
            max = a[i];

        }
    }
    var min = a[0];
    for (i = 1; i < a.length; i++) {
        if (a[i] <= min) {
            min = a[i];
        }
    }
    return [max, min];
}

console.log(maxAndmin([2, 3, 4, 5, 6, 9, 7, 8, 1]));

/*Write a function to find the element that occurs most frequently.*/

function frequent(arr) {
    var e = 1;
    var counter = 0;
    var a;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                counter++;
            }

            if (e < counter) {
                e = counter;
                a = arr[i];
            }
        }

        counter = 0;
    }
    return a + " occurs " + e + " times";

}
console.log(frequent([1, 2, 3, 4, 5, 6, 2, 3, 4, 5, 3, 2]));


/*Write a function to find the average of N elements. Make the function flexible to receive dynamic number or parameters.*/
function average(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(average([5, 8, 6, 7, 9]));
/*Write a function to find all the numbers greater than the average.*/


function greater(arr) {
    var newArr = [];
    var counter = 0;
    var n = arr.length;
    var sum = 0;
    var average;
    for (var i = 0; i < n; i++) {
        sum += arr[i];
    }
    average = sum / n;

    for (var i = 0; i < n; i++) {
        if (arr[i] > average) {
            newArr[counter] = arr[i];
            counter++;
        }
    }
    return newArr;

}
console.log(greater([1, 8, 2, 3, 4, 5.2, 5.5, 6]));