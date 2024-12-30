let x = -0;
// // console.log(x === 0);
// console.log(Object.is(x, -0));
// console.log(Object.is(x, 0));

// console.log(Math.sign(-3));

// console.log(Math.sign(-0));

// console.log(Math.sign(-2));

// console.log(Math.sign(0));

// HOME WORK
// can we write a custom function that can give us sign of a number properly  --> -1 , 1

// Home Work Solution
if (Object.is(x, -0) == true) {
  console.log(-1);
} else if (Object.is(x, 0) == true) {
  console.log(1);
} else {
  console.log(Math.sign(x));
}
