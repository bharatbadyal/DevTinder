const myName = "Bharat";
let myAge = 27;

// console.log(`My name is ${myName} and My age is ${myAge}.`); // this is string interpolation more peffered in modern javascript

const stringName = new String("Bharat Sharma");
// console.log(stringName);

// console.log(stringName.charAt(2));

// console.log(stringName.indexOf("a"));

// console.log(stringName.charAt(2));

//  study string methods by yourself

const message = "Hello World!";
// to accecss any character in string use indexOf[index of character, eg. 1,2 3,4]

// Method
/*
- to measure the length of charcters use .length method
- console.log(message.length);
*/
// methods (without argument)
/*
:- toUpperCase()
:- toLowerCase()
:- trim()
:- trimStart()
:- trimEnd()
*/

// methods (with argument)
/*
- includes() : checks that is given string or character is available in memory of variable and after checking gives result in true or false. should be exact
- indexOf() : finds the index of given character, if not found will return -1 as result to console
- replace("character or string","to be replaced with")
- replaceAll() : will replace with all similiar characters
- concat()
- padStart()
- padEnd()
- charAt()
- charCodeAt()  // gives ascii code of given character
- split() // it splits words into individual in array 
*/

const lstFourDigit = "3542";
console.log(lstFourDigit.padStart(16, "*"));
console.log(lstFourDigit.padEnd(16, "*"));

// string template literals

const name = "xyz";
let templateLiteral = `Account no's last digit of ${name} is ${lstFourDigit}`;
console.log(templateLiteral);
