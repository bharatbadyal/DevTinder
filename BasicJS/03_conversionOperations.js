"use strict"; // add this will ensure that all the code should follow modren javascript standards

// do ensure that code readability should be followed
// data types in JavaScript
/* Primitive Data types
number = 2 ^ 52
bigInt
string
boolean
symbol
null 
undefined

Non - Primitive datatype

object

*/

/* during conversion if
:- we convert string 33 to Number it will give = 33 as no but
if for any instance given no dont have pure numeric value eg "33abc" or anything of similiar pattern 
it will give : "33abc" => NaN (not a number)*

:- any thing can be convertable to string

:- true: 1
:- false: 0
:- null : 0
:- empty string gives value: false , and string with any value gives "true" as value.
*/

let value = 3;
let negValue = -value;

let str1 = "hello";
let str2 = " World";
console.log(str1 + str2);

console.log("1" + 2 + 2);
console.log(1 + 2 + "2"); // to understand this refer to documentation
console.log(+true);
// try to avoid these kind of confusing code in production base code
