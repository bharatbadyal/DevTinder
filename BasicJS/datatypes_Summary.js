// Primitive
// 7 types: String, Number, Boolean, null, undefined, Symbol, bigInt

// Javavscript is dynamically typed langugage

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;

const id = Symbol("123");
const anotherId = Symbol("123"); // both symbols holds unique value and cant be comparable as both holds unique memory box

// Reference type or Non Primitve
// Array, Objects, Funtions

const heros = ["ironman", "Captian America"];
let myObj = {
  name: "Bharat",
  age: 27,
};

const myFunction = function () {
  console.log("Namaste World!");
};

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack (Primitive) [memory given through copy value], Heap(Non-Primitive)[memory given through reference]

let myName = "Bharat";

let anotherName = myName;

anotherName = "Bharat Sharma";
