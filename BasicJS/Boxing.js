// Boxing or Auto Boxing : Primitive types trying to get converted to non primitive automatically
// x = 1;
// console.log(x.toString());

const fs = require("fs");

fs.readFile("./random.txt", (data) => {
  console.log(data);
});
