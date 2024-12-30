let obj = { x: 10, y: 20 };
let num = 10;
console.log(`My Obj is ${obj}`);
console.log("My Obj is " + obj); // inn both the cases js will try to convert Object into String using coercion. While doing corecion it uses toString funtion on string which while applying on object gives[object Object] output.

// to check wheather the value is NaN use
let x = NaN;
console.log(isNaN(x));
// isNaN is used to check
console.log(isNaN("Bharat")); // isNaN converts the incoming input to a number
// to overcome this there is other utility :=> Number.isNaN()

console.log(Number.isNaN("Bharat"));
console.log(Number.isNaN(x));

// algorithmetically we can check whether the number is NaN
if (typeof x == "number" && x !== x) {
  console.log(true);
}

// x !=== x check is there any problem with this expression to check NaN value
