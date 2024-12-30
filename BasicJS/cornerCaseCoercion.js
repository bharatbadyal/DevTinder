// ToString --> "" + value
console.log("" + 0); // 0 --> "0"
console.log("" + -0); // -0 --> "0"

console.log("" + []); // [] --> ""
console.log("" + {}); // [object Object]

console.log("" + [1, 2, 3]); // 1,2,3
console.log("" + [null, undefined]); // ,
console.log("" + [1, 2, null, 4]); // 1,2,,4

// ToNumber
console.log(0 - "010"); //decimal number
console.log(0 - "o10");
console.log(0 - 0o10); //octal number
console.log(0 - "0xb"); //converts it to hexadecimal
console.log(0 - 0xb);

console.log([] - 1);
console.log([""] - 1);
console.log(["0"] - 1);

let x = {};
console.log(x.toString()); // this internally give [object Object]
// we can overwrite this

x = {
  toString() {
    return "Bharat";
  },
};

console.log(x.toString());
