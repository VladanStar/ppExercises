1. /*Write a function to check whether the `input` is a string or not.
"My random string" -> true
12 -> false*/

var result = function trueOrFalse(string) {
    if (typeof string === "string") {
        return true
    } else return false

}
console.log(result("My random string"))

/*Write a function to check whether a string is blank or not.
"My random string" -> false
" " -> true
12 -> false
false -> false*/

var result = function (string) {
    if (string.length === 0) {
        return true
    } else return false

}

console.log(result("My random string"))

/*Write a function that concatenates a given string n times (default is 1).
    "Ha" -> "Ha"
"Ha", 3 -> "HaHaHa"*/

var result = function (string, n) {
    var sum = "";
    for (var i = 0; i <= n; i++) {
        sum += string;
    }
    return sum;
}
console.log(result("Ha", 3))

/*Write a function to count the number of letter occurrences in a string.
"My random string", "n" -> 2*/

var result = function (string, p) {
    var sum;
    var counter = 0;
    for (var i = 0; i < string.length; i++) {
        sum = string[i];
        if (sum === p) {
            counter++
        }
    }
    return counter
}
console.log(result("My random string", "n"))

/*Write a function to find the position of the first occurrence of a character in a string.
The result should be in human numeration form.If there are no occurrences of the character, the function should return -1.*/

var result = function (string, p) {
    for (var i = 0; i < string.length; i++) {
        var element = string[i]
        if (element === p) {
            return i + 1
        }
    }
    return -1

}
console.log(result("My random string", "n"))

/*Write a function to find the position of the last occurrence of a character in a string.
The result should be in human numeration form.If there are no occurrences of the character, function should return -1.*/

var result = function (string, p) {
    for (var i = string.length - 1; i >= 0; i--) {
        var element = string[i]
        if (element === p) {
            return i + 1
        }
    }
    return -1
}
console.log(result("My random string", "n"))

/*Write a function to convert string into an array.Space in a string should be represented as “null” in new array.
"My random string" -> ["M", "y", null, "r", "a"]
"Random" -> ["R", "a", "n", "d", "o", "m"]
*/
var result = function (string) {
    var sum = [];
    for (var i = 0; i < string.length; i++) {
        var element = string[i]
        if (string[i] === " ") {
            element = null
        }
        sum[i] = element
    }
    return sum;
}
console.log(result("My random string"))



/*Write a function that accepts a number as a parameter and checks if the number is prime or not.
    Note: A prime number(or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.*/

var result = function (num) {
    if (num === 1) {
        return false
    } else if (num === 2) {
        return true
    }
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}
console.log(result(6))

/*Write a function that replaces spaces in a string with provided separator.If separator is not provided, use “-” (dash) as the default separator.
    "My random string", "_" -> "My_random_string"
"My random string", "+" -> "My+random+string"
"My random string" -> "My-random-string"
*/

var result = function (string, separator) {
    var separator = separator || "-"
    var sum = "";
    for (var i = 0; i < string.length; i++) {
        var element = string[i]
        if (element === " ") {
            element = separator;
        }
        sum += element;
    }
    return sum
}
console.log(result("My random string", "$"))

/*Write a function to get the first n characters and add “...” at the end of newly created string.*/

var result = function (string, n) {
    var dots = "..."
    var sum = ""
    for (var i = 0; i <= n; i++) {
        var element = string[i]
        if (i === n) {
            element = dots
            sum += element
            break
        }
        sum += element
    }
    return sum
}
console.log(result("My random string", 7))

/*Write a function that converts an array of strings into an array of numbers.Filter out all non - numeric values.
["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]
*/

var result = function (array) {
    var sum = []
    var positionFixer = 0;
    for (var i = 0; i < array.length; i++) {
        var element = parseFloat(array[i])
        if (!isNaN(element) && isFinite(element)) {
            sum[i - positionFixer] = element
        } else {
            positionFixer++
        }

    }
    return sum
}
console.log(result(["1", "21", undefined, "42", "1e+3", Infinity]))

/*Write a function to calculate how many years there are left until retirement based on the year of birth.
Retirement for men is at age of 65 and for women at age of 60. If someone is already retired, a proper message should be displayed.*/

function calculateAge(yearOfBirth) {
    var age = parseFloat(2018 - yearOfBirth);
    return age
}

function isInReitrement(age, gender) {
    gender = gender || 'm';

    if (gender === 'm') {
        return age >= 65
    } else if (gender === 'f') {
        return age >= 60
    }
}

function Reintrement(yearOfBirth, gender) {
    var age = calculateAge(yearOfBirth);
    var gender = gender || "m";

    if (isInReitrement(age, gender)) {
        return "person is in retirement"
    }
    if (gender === "m") {
        return 65 - age;
    } else {
        return 60 - age;
    }
}
var output = Reintrement(1950, "f")


console.log(output);



/*Write a function to humanize a number(formats a number to a human - readable string) with the correct suffix such as 1st, 2nd, 3rd or 4th.
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

/*
Write a program that checks if a given element e is in the array a. 
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes
Input:  e = 3, a = [5, -4.2, 18, 7]
Output: no
*/

function checkArray(array, n) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === n) {
            return true
        }
    }
    return false
}
console.log(checkArray([5, -4.2, 3, 7], 3))

/*Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]
*/

function multiplies(array) {
    var newArray = []
    for (var i = 0; i < array.length; i++) {
        if (array[i] <= 0) {
            newArray[i] = array[i]
        } else {
            newArray[i] = array[i] * 2
        }
    }
    return newArray
}
console.log(multiplies([-3, 22, 10, 6.8, -8]))

/*Write a program that finds the minimum of a given array and prints out its value and index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3
*/

function multiplies(array) {
    var minElement = []
    var trenutniMinimum = array[0];
    var position = 0;
    for (var i = 0; i < array.length; i++) {
        var trenutniElement = array[i]
        if (trenutniMinimum > trenutniElement) {
            trenutniMinimum = trenutniElement;
            position = i

        }
    }
    minElement = [trenutniMinimum, position]
    return minElement
}
console.log(multiplies([4, 2, 2, -1, 6]))

console.log(multiplies([4, 2, 2, 5, 6]))

/*Write a program that finds the second largest number and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2 */

function secLargest(array) {
    var firsLargest = 0
    var arr = array[0];
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        if (arr < element) {
            firsLargest = arr;
            arr = element
        }
    }
    return firsLargest

}
console.log(secLargest([4, 5, 6, -1, 7]))



/*Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16*/

function sumOfPositiveNumbers(array) {
    var sum = 0
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        if (element > 0) {
            sum += element
        }
    }
    return sum
}
console.log(sumOfPositiveNumbers([3, 11, -5, -3, 2]))

/*Write a program that checks if a given array is symmetric.An array is symmetric if it can be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.
Input array: [3, 4, 12, 8]
Output: The array isn’t symmetric.
*/

function isSymmetric(array) {

    for (var i = 0; i < array.length / 2; i++) {
        var firstElement = array[i];
        var lastElement = array[array.length - 1 - i]
        if (firstElement !== lastElement) {
            return false;
        }
    }
    return true;
}

console.log(isSymmetric([2, 4, -2, 7, -2, 4, 2]))

/*Write a program that intertwines two arrays.You can assume the arrays are of the same length.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]
*/


function twistArrays(firstArray, secondArray) {
    var combinedArray = [];
    var arraysLength = firstArray.length + secondArray.length;
    for (var i = 0, j = 0; j < arraysLength; i++) {
        if (i < firstArray.length) {
            combinedArray[j] = firstArray[i];
            j++
        }

        if (i < secondArray.length) {
            combinedArray[j] = secondArray[i];
            j++
        }
    }

    return combinedArray;
}

var firstArray = [4, 5, 6, 2];
var secondArray = [3, 8, 11, 9];
var twistedArray = twistArrays(firstArray, secondArray);

console.log(twistedArray);



/*
Write a program that concatenates two arrays.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]
*/

function concatArrays(firstArray, secondArray) {
    var concatenatedArray = [];

    for (var i = 0; i < firstArray.length; i++) {
        concatenatedArray[i] = firstArray[i];
        for (var j = 0; j < secondArray.length; j++) {
            concatenatedArray[firstArray.length + j] = secondArray[j];
        }
    }
    return concatenatedArray;
}

var firstArray = [4, 5, 6, 2];
var secondArray = [3, 8, 11, 9];
var concated = concatArrays(firstArray, secondArray);

console.log(concated);

/*
Write a program that deletes a given element e from the array a.
Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]
*/

function deleteElement(array, elementToDelete) {
    if (array.length < 1 || !elementToDelete) {
        return array;
    }
    var newArray = [];
    for (var i = 0, j = 0; i < array.length; i++) {
        if (elementToDelete === array[i]) {
            delete array[i];
        }

        if (typeof array[i] === "number") {
            newArray[j] = array[i];
            j++;
        }
    }
    return newArray;
}

var array = [4, 6, 2, 8, 2, 2];
var element = 2;

console.log(array);
array = deleteElement(array, element);
console.log(array);

/*
Write a program that inserts a given element e on the given position p in the array a.If the value of the position is greater than the array length, print the error message.
   Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]
*/

function insertElement(array, element, position) {
    position = position || 0;
    if (array.length < 1 || !element) {
        return array;
    }

    if (position => array.length) {
        console.log("Index out of bounds.");
        return array;
    }

    var newArray = [];
    for (var i = 0, j = 0; i < array.length; i++) {
        if (i === position) {
            newArray[j] = element;
            newArray[j + 1] = array[i];
            j += 2;
        } else {
            newArray[j] = array[i];
            j++;
        }
    }
    return newArray;
}

var element = 78;
var position = 3;
var array = [2, -2, 33, 12, 5, 8];
var output = insertElement(array, element, position);

console.log(output);

/*
Write a function that calculates the maximum of two given numbers. 
*/

var num1 = 5;
var num2 = 888;

function calculates(num1, num2) {
    (num1 > num2) ? console.log('num1 is larger') : console.log('num2 is larger')
    if (num1 > num2) {
        return num1
    } return num2

}
var result = calculates(num1, num2)
console.log(result);

/*
Write a function that checks if a given number is odd.
*/

var number = 43;

function oddOrEven(number) {
    return (number % 2 === 1) ? 'odd' : 'even'

}

var result = oddOrEven(number)
console.log(result);

/*
Write a function that checks if a given number is a three digit long number.
*/

var number = 4707;

function checkingNumber(number) {

    var numberInString = "" + number
    for (var i = 0; i < numberInString.length; i++) {
        return (i == 2) ? 'it is' : 'its not'
    }

}
var result = checkingNumber(number)
console.log(result);

/*
Write a function that calculates an arithmetic mean of four numbers.
*/

var number = 4707;

function arithmeticMean(number) {

    var numberInString = "" + number
    var sum = 0;
    var divader = 0
    for (var i = 0; i < numberInString.length; i++) {
        sum += parseInt(numberInString[i])
        divader = numberInString.length
    }
    var result = sum / divader
    return result

}
var result = arithmeticMean(number)
console.log(result);

/*Write a function that draws a square of a given size.For example,  if the size of square is 5 the function should draw: 
*****
*    *
*    *
*    *
*****
*/

function square(parameter) {
    var firsAndLastRows = ''
    var middleRows = ''
    var starsRow = ''
    for (var i = 0; i < parameter; i++) {
        firsAndLastRows += ' *'
    }
    firsAndLastRows += '\n'

    for (var j = 0; j < parameter; j++) {

        if (j === 0 || j === (parameter - 1)) {
            middleRows += ' *'
        } else middleRows += '  '
    }
    middleRows += '\n'

    for (var k = 0; k < parameter; k++) {
        if (k === 0 || k === parameter - 1) {
            starsRow += firsAndLastRows;
        } else starsRow += middleRows
    }

    return starsRow

}

var output = square(5)
console.log(output)


/*Write a function that draws a square of a given size.For example,  if the size of square is 5 the function should draw: 
*
**
***
****
*****
*/


function square(parameter) {
    var stars = ''
    var stars1 = ''
    for (var i = 0; i < parameter; i++) {
        stars += ' *'
        console.log(stars)
    }

}

var output = square(5)
// console.log(output)

/*Write a function that draws a horizontal chart representing three given values.For example, if values are 5, 3, and 7, the function should draw:
* * * * *
* * *
* * * * * * *
*/

function square(n1, n2, n3) {
    var starsRow1 = ''
    var starsRow2 = ''
    var starsRow3 = ''
    for (var i = 0; i < n1; i++) {
        starsRow1 += ' *'
        if (i === n1) {
            starsRow1 += '\n'
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

/*
Write a function that calculates a number of digits of a given number.
*/

var number = 100000;
function calculate(number) {
    var numberString = "" + number
    counter = 0
    for (var i = 0; i < numberString.length; i++) {
        counter += 1;
    }
    return counter
}

var output = calculate(number)
console.log(output)

/*
Write a function that calculates a number of appearances of a given number in a given array.
*/

var number = 3213324324;
var parameter = 3;
function calculate(number, parameter) {
    var counter = 0;
    var numberString = "" + number;
    var parameterString = "" + parameter;
    for (var i = 0; i < numberString.length; i++) {
        if (numberString[i] == parameter) {
            counter++
        }
    }
    return counter
}
var output = calculate(number, parameter)
console.log(output)

/*
Write a function that calculates the sum of odd elements of a given array.
*/

var array = [4, 5, 6, 7]
function calculate(array) {
    var newArray = []
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        var element = array[i]
        if (element % 2 === 1) {
            sum += element;
        }
    }
    return sum
}
var output = calculate(array)
console.log(output)

/*
Write a function that calculates the number of appearances of a letter a in a given string.Modify the function so it calculates the number of both letters a and A.
*/

var string = 'blaBlabla'
var letterUpperCase = 'B'
var letterLowerCase = 'b'

function calculate(string, letterUpperCase, letterLowerCase) {
    var counter = 0;
    for (var i = 0; i < string.length; i++) {
        if (letterUpperCase === string[i] || letterLowerCase === string[i]) {
            counter++
        }
    }
    return counter
}
var output = calculate(string, letterUpperCase, letterLowerCase)
console.log(output)

/*
Write a function that concatenates a given string given number of times.For example, if “abc” and 4 are given values, the function prints out abcabcabcabc.
*/

var string = 'abc'
var number = 4

function calculate(string, number) {
    var newString = ''
    for (i = 0; i < number; i++) {
        newString += string
    }
    return newString
}
var output = calculate(string, number)
console.log(output)


/*
Write a function to count vowels in a provided string. If you are  not aware of indexOf function, try to use switch statement.
*/

var string = 'banananmen'
var vowels = 'aeiou'

function calculate(string, vowels) {
    var counter = 0
    for (i = 0; i < string.length; i++) {
        for (var j = 0; j < vowels.length; j++) {
            if (string[i] === vowels[j]) {
                counter++
            }
        }
    }
    return counter
}
var output = calculate(string, vowels)
console.log(output)


/*
Write a function that combines two arrays by alternatingly taking elements.
[‘a’, ’b’, ’c’], [1, 2, 3] -> [‘a’, 1, ’b’, 2, ’c’, 3]
*/

var array1 = ['a', 'b', 'c']
var array2 = [1, 2, 3]

function combinedArray(array1, array2) {
    var newArray = array1.length + array2.length
    var newArrayCombined = []

    for (var i = 0, j = 0; j < newArray; i++) {
        if (i < array1.length) {
            newArrayCombined[j] = array1[i]
            j++
        }
        if (i < array2.length) {
            newArrayCombined[j] = array2[i]
            j++
        }
    }
    return newArrayCombined
}
var output = combinedArray(array1, array2)
console.log(output)


/*
Write a function that rotates a list by k elements.
For example[1, 2, 3, 4, 5, 6] rotated by two becomes[3, 4, 5, 6, 1, 2]
*/

var array = [1, 2, 3, 4, 5, 6]
var parameter = 2;

function rotatingArray(array, parameter) {
    var firstArray = [];
    var newArrCount = 0;

    for (var i = 0, j = 2; i < array.length && j < array.length; i++ , j++) {
        firstArray[i] = array[j];
        if (i === 0) {
            firstArray[array.length - 2] = array[i]
        } else if (i === 1) {
            firstArray[array.length - 1] = array[i]
        }
    }

    return firstArray
}
var output = rotatingArray(array, parameter)
console.log(output)

// Write a function that takes a number and returns array of its digits.

var number = 1000

function convert(number) {
    var numberInString = "" + number
    newArray = [""]
    for (var i = 0; i < numberInString.length; i++) {
        var element = numberInString[i]
        newArray[i] = element
    }
    return newArray
}
var output = convert(number)
console.log(output)

// Write a program that prints a multiplication table for numbers up to 12.

function multipTable(a) {

    var i;
    var j;
    str = '';

    for (i = 1; i < a; i++) {

        for (j = 1; j < a; j++) {
            str += " " + i * j;
        }

        str = str + '\n';
    }

    return str;
}

console.log(multipTable(13));


/*
Write a function to input temperature in Centigrade and convert to Fahrenheit.
*/

var centigrade = 10;

function convert(centigrade) {
    var fahrenheit = centigrade * 9 / 5 + 32;
    return fahrenheit;
}
var output = convert(centigrade)
console.log(output)

/*
Write a function to find the maximum element in array of numbers.Filter out all non - number elements.
*/

function filterHighestNumber(array) {
    var max = array[0];

    for (var i = 0; i < array.length; i++) {
        var element = array[i]
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max
}
var array = [false, 5, 54, 56, 876, 678, 'e,', 'blab', '45345', NaN, undefined, 455445544554]
var output = filterHighestNumber(array)
console.log(output)

/*
Write a function to find the maximum and minimum elements.Function returns an array.
*/

function minAdnMax(array) {
    var max = []
    var min = []
    var minAdnMax = []
    for (var i = 0; i < array.length; i++) {
        if (array[i] !== false || array[i] !== undefined || array[i] !== NaN) {
            max = array[i];
            min = array[i];
            break;
        }
    }
    for (var i = 0; i < array.length; i++) {
        if (array[i] > max && typeof (array[i]) === 'number') {
            max = array[i]
        }
        if (array[i] < min && typeof (array[i]) === 'number') {
            min = array[i]
        }

    }
    minAdnMax = [min, max]
    return minAdnMax

}
var array = [false, 5, 54, 56, 876, 678, 'e,', 'blab', '45345', NaN, undefined, 455445544554]
var output = minAdnMax(array)
console.log(output)

/*
Write a function to find the median element of array.
*/


function medina(array) {
    var middleElement = (array.length - 1) / 2
    if (array.length % 2 === 1) {
        for (var i = 0; i < array.length; i++) {
            var element = array[i]
            if (i === middleElement) {
                return element
            }
        }
    }
    console.log('no middle element')
    return array
}
var array = [false, 5, 54, 54, 56546]
var output = medina(array)
console.log(output)

/*
Write a function to find the element that occurs most frequently.
*/

function mostFrequent(array) {
    if (array.length === 0) {
        return null;
    }
    var newArray = [];
    var maxElement = array[0],
        maxCount = 1;
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        if (newArray[element] == null) {
            newArray[element] = 1;
        }
        else newArray[element]++;
        //        newArray[element] = newArray[element] + 1;
        if (newArray[element] > maxCount) {
            maxElement = element;
            maxCount = newArray[element];
        }
    }

    return maxElement
}

var array = ['pear', 'apple', 'orange', 'apple'];
var output = mostFrequent(array)
console.log(output)


/*
Write a function to find and return the first, middle and last element of an array if the array has odd number of elements.
If number of elements is even, return just the first and the last.In other cases(empty array), input array should be returned.
*/


function returnElementsOfArray(array) {
    var result = [];
    firstElement = array[0];
    lastElement = array[array.length - 1];
    var middleValue = (array.length - 1) / 2

    if (array.length % 2 === 0) {
        return result = [firstElement, lastElement];
    }
    for (var i = 0; i < array.length; i++) {
        var element = array[i]
        if (array.length % 2 === 1) {
            if (i === middleValue) {
                var middleElement = element;
                return result = [firstElement, middleElement, lastElement]
            }
        }

    }
}
var array = [1, 2, 3, 4, 5, 6]
var output = returnElementsOfArray(array)
console.log(output)


/*
Write a function to find the average of N elements.Make the function flexible to receive dynamic number or parameters.
*/

function average(array) {
    var counter = 0;
    var averageSum = 0;
    var result = 0
    for (var i = 0; i < array.length; i++) {
        counter++;
        averageSum += array[i]
    }
    resultOfAverageSum = averageSum / counter;
    return resultOfAverageSum;
}
var array = [1, 2, 3, 4, 5, 6]
var output = average(array)
console.log(output)


/*
Write a function to find all the numbers greater than the average.
*/


function greaterThanAverage(array) {
    var counter = 0;
    var averageSum = 0;
    var resultOfAverageSum = 0
    var listOfElementsGreaterThanAverageSum = []
    for (var i = 0; i < array.length; i++) {
        counter++;
        averageSum += array[i];
        resultOfAverageSum = averageSum / counter;
    }
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        if (element > resultOfAverageSum) {
            listOfElementsGreaterThanAverageSum += element;
        }
    }
    return listOfElementsGreaterThanAverageSum;
}
var array = [1, 2, 3, 4, 5, 6]
var output = greaterThanAverage(array)
console.log(output)

/*
The body mass index(BMI) is the ratio of the weight of a person(in kilograms) to the square of the height(in meters).Write a function that 
takes two parameters, weight and height, computes the BMI, and prints the corresponding BMI category:
Starvation: less than 15
Anorexic: less than 17.5
Underweight: less than 18.5
Ideal: greater than or equal to 18.5 but less than 25
Overweight: greater than or equal to 25 but less than 30
Obese: greater than or equal to 30 but less than 40
Morbidly obese: greater than or equal to 40
*/

function bmi(weight, height) {
    var bmi = weight / (height * height)
    console.log(bmi)
    switch (true) {
        case (bmi < 15):
            console.log("Anorexic");
            break;
        case (bmi < 17.5 && bmi > 15):
            console.log("Starvation");
            break;
        case (bmi > 18.5 && bmi < 25):
            console.log("Ideal");
            break;
        case (bmi > 25 && bmi < 30):
            console.log("Overweight");
            break;
        case (bmi > 30 && bmi < 40):
            console.log("Obese");
            break;
        case (bmi > 40):
            console.log("Morbidly");
            break;
        default:
            console.log("bmi not in scope");
    }
}
var weight = 80;
var height = 1.80



/*
Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:
For example the list["Hello", "World", "in", "a", "frame"] gets printed as:
*********
* Hello *
* World *
* in    *
* a     *
* frame *
*********
*/

function printHelloWorld(array) {
    var largest = [];
    var counter = 0;
    var firsAndLastRows = [];
    var middleRows = [];
    var square = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i].length > counter) {
            counter = array[i].length;
            largest = array[i]
        }
    }

    for (var i = 0; i < largest.length; i++) {
        if (i === 0 || i === counter - 1) {
            firsAndLastRows += '**';
        }
        firsAndLastRows += '*';
    }
    firsAndLastRows += '\n'

    for (var i = 0; i < array.length; i++) {
        var emptyStringArray = '';
        if (array[i].length < counter) {
            var empty = counter - array[i].length
            for (var j = 0; j < empty; j++) {
                emptyStringArray += ' '
            }
        }
        middleRows += '* ' + array[i] + emptyStringArray + ' *'
        middleRows += '\n'
    }


    square = firsAndLastRows;
    square += middleRows;
    square += firsAndLastRows;

    return square
}

var array = ["Hello", "World", "in", "a", "frame"];
var output = printHelloWorld(array)
console.log(output);

/*Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. 
At each position of the grid there is either a space or a "#" character. The characters should form a chess board.
Passing this string to console.log should show something like this:
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
*/

function chessBoard(parameter) {

    var chessBoardRow = '';
    var element = ''
    var counter = 0;
    for (var i = 0; i < parameter * parameter; i++) {
        if (counter % 2 === 0) {
            (i % 2 === 0) ? element = ' ' : element = "#";
            chessBoardRow += element;
        }
        if (counter % 2 === 1) {
            (i % 2 === 1) ? element = '#' : element = " ";
            chessBoardRow += element;
        }
        if (i % parameter === 0) {
            chessBoardRow += '\n'
        }
        counter++;
    }

    // for (var i = 0; i < parameter; i++) {
    //     (i % 2 === 0) ? element = ' ' : element = "#";
    //     chessBoardRowEven += element;
    // }
    // chessBoardRowEven += '\n'

    // for (var i = 0; i < parameter; i++) {
    //     (i % 2 === 0) ? element = '#' : element = " ";
    //     chessBoardRowOdd += element;
    // }
    // chessBoardRowOdd += '\n'

    // for (var i = 0; i < parameter; i++) {
    //     (i % 2 === 0) ? chessBoard += chessBoardRowEven : chessBoard += chessBoardRowOdd;
    // }
    return chessBoardRow;
}



function Person(name, surname, dateOfBirth) {
    this.name = name;
    this.surname = surname;
    this.age = (function () {
        var currentDate = new Date();
        var currentYear = currentDate.getFullYear();
 
        var birthDate = new Date(dateOfBirth);
        var yearOfBirth = birthDate.getFullYear();
 
        return currentYear - yearOfBirth;;
    })();
 
    this.getData = function () {
        return this.name + " is " + this.age + " years old";
    }
 }