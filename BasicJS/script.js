// let arr = [1, 2, 3, 4, 5];
// function cube(a) {
//   return a * a * a;
// }

// let modArr = arr.map(cube);
// console.log(modArr);

// global execution context
// const promise = new Promise(function executer(resolve, reject) {
//   // resolve("This is resolve function");
//   reject("This is error from reject");
// });

// promise.then(function (data) {
//   console.log(data);
// });

// promise.catch(function (data) {
//   console.log(data);
// });

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((data) => {
//     return data.json();
//   })
//   .then((jasonedData) => {
//     console.log(jasonedData);
//   });

async function getTodo() {
  try {
    const fetchedData = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    console.log(fetchedData);
    const data = await fetchedData.json();
    console.log(data);
  } catch (err) {
    console.log("Something went wrong...");
    console.log(err);
  }
}

getTodo();
