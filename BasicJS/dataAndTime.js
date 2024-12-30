// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toUTCString());

let myCreatedDate = new Date(2023, 1, 12);

// console.log(myCreatedDate.toDateString());

// undefine null NaN +0 -0 false : these are falsy value
console.log(Boolean(Object));

// -0 use eg> velocity can be negetive to so we can use this there
console.log(undefined == false);
console.log(null == false);
// according to doc rule: null => 0 ; null == 0 => false

console.log(NaN == NaN); //NaN can never be equal to itself
