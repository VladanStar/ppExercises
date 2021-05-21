/*
Array.prototype.length
The length property of an object which is an instance of type Array sets or returns the number of elements in that array. The value is an unsigned, 32-bit integer that is always numerically greater than the highest index in the array.
*/
var clothing = ["shoes", "shirts", "socks", "sweaters"];

console.log(clothing.length);
// expected output: 4
/* Array.prototype.concat()
The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
Syntax
concat()
concat(value0)
concat(value0, value1)
concat(value0, value1, ... , valueN)
*/
var array1 = ["a", "b", "c"];
var array2 = ["d", "e", "f"];
var array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]

/*
Array.prototype.copyWithin()
The copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length.
Syntax
copyWithin(target)
copyWithin(target, start)
copyWithin(target, start, end)
*/
var array1 = ["a", "b", "c", "d", "e"];

// copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4));
// expected output: Array ["d", "b", "c", "d", "e"]

// copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3));
// expected output: Array ["d", "d", "e", "d", "e"]

/* 
Array.prototype.entries()
The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.
*/
var array1 = ["a", "b", "c"];

var iterator1 = array1.entries();

console.log(iterator1.next().value);
// expected output: Array [0, "a"]

console.log(iterator1.next().value);
// expected output: Array [1, "b"]
/* 
Array.prototype.fill()
The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
Syntax
fill(value)
fill(value, start)
fill(value, start, end)
*/
const array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(array1.fill(6));
// expected output: [6, 6, 6, 6]
/* 
Array.prototype.filter()
The filter() method creates a new array with all elements that pass the test implemented by the provided function.
*/
var words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

var result = words.filter((word) => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

/* 
Array.prototype.find()
The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
*/
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12
/* 
Array.prototype.findIndex()
The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
*/
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// expected output: 3
/* 
Array.prototype.flat()
The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
Syntax
flat()
flat(depth)
*/
var arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: [0, 1, 2, 3, 4]

var arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2));
// expected output: [0, 1, 2, [3, 4]]
/* 
Array.prototype.flatMap()
The flatMap() method returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1, but slightly more efficient than calling those two methods separately.
*/

let arr1 = [1, 2, 3, 4];

console.log(arr1.map(x => [x * 2]));
// [[2], [4], [6], [8]]

console.log(arr1.flatMap(x => [x * 2]));
// [2, 4, 6, 8]

// only one level is flattened
console.log(arr1.flatMap(x => [[x * 2]]));
// [[2], [4], [6], [8]]
console.log(arr1);
/* 
Array.prototype.forEach()
The forEach() method executes a provided function once for each array element.
*/
var array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"
/*Array.prototype.join()
The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator. 
Syntax
join()
join(separator)
*/
var elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"
