/*
String.prototype.split()
The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.  The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.  
*/
var str = "The quick brown fox jumps over the lazy dog.";
var words = str.split(" "); // words
console.log(words[2]);
console.log(words);
var chars = str.split(""); // chars
console.log(chars);
console.log(chars[7]);
var strCopy = str.split();
console.log(strCopy); // copy string in new string
/* 
split()
split(separator)
split(separator, limit)
The pattern describing where each split should occur.  The separator can be a simple string or it can be a regular expression.
*/
var sep = str.split(" ", 4); // four elements in array
console.log(sep);
var dot = str.split("."); // if dot in end return two elements in aray.
console.log(dot);

/*
String.prototype.charAt()
The String object's charAt() method returns a new string consisting of 
the single UTF-16 code unit located at the specified offset into the string.
index
An integer between 0 and str.length - 1. If the index cannot be converted to the integer or no index is provided, the default is 0, so the first character of str is returned.
*/
var sentence = "The quick brown fox jumps over the lazy dog.";
var index = 4;
console.log(sentence.charAt(index));
console.log(sentence.charAt()); // default is 0.
/* 
String.prototype.concat()
The concat() method concatenates the string arguments to the calling string and returns a new string.
Syntax
concat(str1)
concat(str1, str2)
concat(str1, str2, ... , strN)
*/
var str1 = "Hello";
var str2 = "World";
console.log(str1.concat(" ", str2));
console.log(str2.concat(" ", str1, " this is the end", "Doors"));

/* 
String.prototype.endsWith()
The endsWith() method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.
Syntax
endsWith(searchString)
endsWith(searchString, length)// where is end in position
*/
var str1 = "Cats are the best.";
console.log(str1.endsWith("."));
var str2 = "Is this a guestion?";
console.log(str2.endsWith("?"));
/* 
String.prototype.includes()
The includes() method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate.
Syntax
includes(searchString)
includes(searchString, position) 
The position within the string at which to begin searching for searchString. (Defaults to 0.)
case sensitive
*/
var sentence = "The quick brown fox jumps over the lazy dog.";
var word = "fox";
console.log(sentence.includes(word));
/*
String.prototype.indexOf()
The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
Syntax
indexOf(searchValue)
indexOf(searchValue, fromIndex)
as the search is started at position 11, a position after the end of the string.
*/
var paragraph =
  "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";
var searchTerm = "dog";
console.log(paragraph.search(searchTerm));
console.log(paragraph.search(searchTerm, 1));
/*
String.prototype.lastIndexOf()
The lastIndexOf() method returns the index within the calling String object of the last occurrence of the specified value, searching backwards from fromIndex. Returns -1 if the value is not found.
Syntax
lastIndexOf(searchValue)
lastIndexOf(searchValue, fromIndex)
*/
var paragraph =
  "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";

var searchTerm = "dog";
console.log(paragraph.lastIndexOf(searchTerm));
/*
String.prototype.localeCompare()
The localeCompare() method returns a number indicating whether a reference string comes before, or after, or is the same as the given string in sort order.
Syntax
localeCompare(compareString)
localeCompare(compareString, locales)
localeCompare(compareString, locales, options)
*/
var a = "réservé"; // with accents, lowercase
var b = "RESERVE"; // no accents, uppercase

console.log(a.localeCompare(b));
// expected output: 1
console.log(a.localeCompare(b, "en", { sensitivity: "base" }));
// expected output: 0
/*
String.prototype.match()
The match() method retrieves the result of matching a string against a regular expression.
Syntax
match(regexp)
Regular expressions

Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects. These patterns are used with the exec() and test() methods of RegExp, and with the match(), matchAll(), replace(), replaceAll(), search(), and split() methods of String. This chapter describes JavaScript regular expressions.
*/
var paragraph = "The quick brown fox jumps over the lazy dog. It barked.";
var regex = /[A-Z]/g;
var found = paragraph.match(regex);
console.log(found);
/*
String.prototype.matchAll()
The matchAll() method returns an iterator of all results matching a string against a regular expression, including capturing groups.
*/
/*
String.prototype.normalize()
The normalize() method returns the Unicode Normalization Form of the string.
*/
/*
String.prototype.padEnd()
The padEnd() method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of the current string.
Syntax
padEnd(targetLength)
padEnd(targetLength, padString)
*/
var str1 = "Breaded Mushrooms";
console.log(str1.padEnd(25),".");
var str2 = "200";
console.log(str2.padEnd(5));
/* 
String.prototype.padStart()
The padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.
Syntax
padStart(targetLength)
padStart(targetLength, padString)
*/
var str1 = "5";
console.log(str1.padStart(2, "0"));
var fullNumber = "'2034399002125581";
var last4Digits = fullNumber.slice(-4);
var maskedNumber = last4Digits.padStart(fullNumber.length, "*");
console.log(maskedNumber);

/* 
String.raw()
The static String.raw() method is a tag function of template literals. This is similar to the r prefix in Python, or the @ prefix in C# for string literals. (But it is not identical; see explanations in this issue.) It's used to get the raw string form of template literals, that is, substitutions (e.g. ${foo}) are processed, but escapes (e.g. \n) are not.
*/
var string = "vladan ";
var filePath = String.raw(`https://github.com/VladanStar`);
console.log(filePath);
/*
String.prototype.repeat()
The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
Syntax
repeat(count)
*/
var string = "nesto";
console.log(string.repeat(9));