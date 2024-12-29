// const promise = new Promise((res, rej) => {
//   res("Data");
//   rej("Error");
// });
// promise.then((res) => {
//   console.log(res);
// });
// 56;
let teacher = "Sanket";
function ask(question) {
  console.log(teacher, question);
}

function fun() {
  let teacher = "Pulkit";
  ask("why?");
}
fun();

// output will be Sanket Why? beacuse of lexical scoping. answer would have been Pulkit Why? if it has been dynamic scoping

// function expression
