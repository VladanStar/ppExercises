var a = 'a'
var b = 'b'
if (a < b) { // true
  console.log(a + ' is less than ' + b)
} else if (a > b) {
  console.log(a + ' is greater than ' + b)
} else {
  console.log(a + ' and ' + b + ' are equal.')
}

function isEqual(str1, str2)
{
    return str1.toUpperCase() === str2.toUpperCase()
} // isEqual

let s1 = '2 + 2'              // creates a string primitive
let s2 = new String('2 + 2')  // creates a String object
console.log(eval(s1))         // returns the number 4
console.log(eval(s2))         // returns the string "2 + 2"

console.log(eval(s2.valueOf()))  // returns the number 4

let longString = "This is a very long string which needs " +
                 "to wrap across multiple lines because " +
    "otherwise my code is unreadable."
                 
let longString = "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable."    