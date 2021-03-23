/* 1. Write a function to check whether the`input` is a string or not.
My random string" -> true
12 -> false /*
*/
function isString(s) {
    if (typeof s === "string") {
        return true;
    } else {
        return false;
    }
}
var s = "vladan";
console.log(isString(s));

/*
2. Write a function to check whether a string is blank or not.
"My random string" -> false
" " -> true
12 -> false
false -> false
*/
function isBlank(s) {
    if (s === " ") {
        return true;
    }
    else {
        return false;
    }
}
var c = " ";
console.log(isBlank(c));

/* 
3. Write a function that concatenates a given string n times (default is 1).
"Ha" -> "Ha'
"Ha", 3 -> "HaHaHa";
*/
function concatenatesWord(s, n) {
    var conWord = "";
    if (typeof s === "string") {
        for (var i = 0; i <= n; i++) {
            conWord += s;
        }
    }
    else {
        return "error";
    }
    return conWord;
}
var s = "vladan";
var n = 9;
console.log(concatenatesWord(s, n));
/*
4. Write a function to count the number of letter occurrences in a string.
My random string", "n" -> 2
*/
function numberLetter(s, char) {
    var count = 0;
    for (var i = 0; i < s.length; i++) {
        if (s[i] == char) {
            count++;
        }
    }
    return count;
}
var s = "Hello";
var char = "l";
console.log(numberLetter("hello", "l"));
/*
 5. Write a function to find the position of the first occurrence of a character in a string. The
result should be the position of character. If there are no occurrences of the character, the
function should return -1.
*/
function firtsOccurrence(s, char) {
    if (typeof s === "string") {
        var place = 0;
        for (var i = 0; i < s.length; i++) {
            if (s[i] === char) {
                place = i + 1;
                return place;
            }
            return -1;
        }
    }
}
var s = "vladan";
var char = 's';
console.log(firtsOccurrence(s, char));
/*
Write a function to find the position of the last occurrence of a character in a string. The
result should be in human numeration form. If there are no occurrences of the character,
function should return -1.
*/
function lastOccurrence(s, char) {
    if (typeof s === "string") {
        var place = 0;
        for (var i = s.length - 1; i >= 0; i--) {
            if (s[i] === char) {
                place = i + 1;
                return place;
            }
        }
        return -1;
    }
}
var s = "vladan";
var char = 3;
console.log(lastOccurrence(s, char));

/* 
7. Write a function to convert string into an array. Space in a string should be represented as
“null” in new array.
""My random string" -> ["M", "y", null, "r", "a"]
"Random" ->; ["R", "a", "n", "d", "o", "m"]
*/
function convertString(s) {
    if (typeof s === "string") {
        var newArr = [];
        for (var i = 0; i < s.length; i++) {
            if (s[i] === " ") {
                newArr[i] = null;
            }
            else {
                newArr[i] = s[i];
            }
        }
        return newArr;
    }
}
var s = "My random string";
console.log(convertString(s));
/*
8. Write a function that accepts a number as a parameter and checks if the number is prime or
not.
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
divisors other than 1 and itself.
*/
function primeNumber(n) {
    if (n <= 0) {
        return false;
    }
    for (var i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }

    }
    return true;
}
var n = 98;
console.log(primeNumber(n));
/*
9. Write a function that replaces spaces in a string with provided separator. If separator is not
provided, use “-” (dash) as the default separator.
"My random string", "_" -> "My_random_string"
"My random string", "+" -> "My+random+string"
"My random string"  -> "My-random-string"
*/

function wordSeparator(s, separator) {
    var newSent = "";
    if (typeof separator === "undefined") {
        separator = "-";
    }
    for (var i = 0; i < s.length; i++) {
        if (s[i] === " ") {
            newSent += separator;
        } else {
            newSent += s[i];
        }
    }
    return newSent;
}
console.log(wordSeparator("My random string", "+"));


//5.	Write a program that draws a square of a given size. For example,  if the size of square is 5 the program should draw: 
//*****
//*   *
//*   *
//*   *
//*****
function sqaureDraw(a) {
    var field = "";
    for (var i = 0; i < a; i++) {
        for (var j = 0; j < a; j++) {
            if (i > 0 && i < a - 1 && j > 0 && j < a - 1) {
                field += " ";
            } else {
                field += "*";
            }
        }
        field += "\n";
    }
    return field;
}
var result5 = sqaureDraw(7);
console.log(result5);
//6.	Write a program that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the program should draw:
//* * * * *
//* * *
//* * * * * * *
function horizontalChart(Array) {
    var field = "";
    for (var i = 0; i < Array.length; i++) {
        for (var j = 0; j < Array[i]; j++) {
            field += "*";
        }
        field += "\n";
    }
    return field;
}
var result6 = horizontalChart([3, 7, 5]);
console.log(result6);