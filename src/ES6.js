//---------------------------------array destructing
// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let [first, ...rest] = a;
// console.log(rest);
// console.log(first);

//---------------------------------object destructing
// let person = { name: "nageeta", age: 24, height: "6'2" };
// const { name } = person;
// console.log(name);

//--------------------------------enhanced object literal
// const name = "nageeta";
// const age = 24;
// const person = { name, age };
// console.log(person);

//----------------------------------computed property
// const name = "nageeta";
// const age = "24";
// const person = {
//   [name]: "this is name",
//   [age]: "this is age",
// };
// console.log(person[24]);
// console.log(person.nageeta);

//-------------------------------------string literal / template literal
// const a = "red";
// console.log(`The color of Apple is
// ${a}`);

//-------------------------------------arrow function
// const sayHello = (name) => console.log(`Hello ${name}`);
// sayHello("nageeta");

//----------------------------------clousre function

// function counter() {
//   let count = 0;
//   return function () {
//     // clouser
//     console.log(++count);
//   };
// }
// const Increament = counter();
// Increament();
// Increament();
// Increament();

//---------------------------------default
// const Sum = (x, y = 2) => x + y;
// console.log(Sum(5));

//-------------------------------------Rest operator
// const SummAll = (x, y, ...others) => {
//   let totalSum = 0;
//   totalSum += x + y;
//   others.forEach((num) => (totalSum += num));
//   return totalSum;
// };
// console.log(SummAll(1, 2, 3, 4, 5, 6));

//---------------------------------- for in loop
// let library = {
//   totalBooks: 550,
//   totalShelf: 18,
//   librarians: 5,
// };
// for (let item in library) console.log(library[item]);

// //------------------------------------ for of loop
// let numbers = [11, 22, 33, 44, 55];
// for (let num of numbers) console.log(num);

// --------------------------------
// let library = [{ price: 550 }, { price: 18 }, { price: 5 }];
// for (let { price } of library) console.log(price);

//-------------------------------------const and let
// const pi = 3.46;
// pi = 9.66;
// console.log(pi); // error

// let pi = 3.46;
// pi = 9.66;
// console.log(pi);

// ------------------------var and let
// console.log(a);
// let a = 2; //Cannot access 'a' before initialization

// console.log(b);
// var b = 2; // undefined

// for (var a = 1; a < 5; a++);
// console.log(a); // can acees here due to function scope

// for (let a = 1; a < 5; a++);
// console.log(a); // can't acces here due to block scope

//---------------- ---------------promises

// function myPromise() {
//   return new Promise((resolve, reject) => resolve(20));
// }
// myPromise()
//   .then((value) => console.log(`i am resolve with the value ${value}`))
//   .catch(() => console.log("i am rejected"));

// ------------------------------------
// const sum = (x, y) => x + y;
// const multiply = (x, y) => x * y;

// function callTheGiveFunction(fun, x, y) {
//   // here fun is call back function
//   return fun(x, y);
// }
// console.log(callTheGiveFunction(sum, 4, 5));
// console.log(callTheGiveFunction(multiply, 4, 5));

// -----------------------generator
// function* gen() {
//   let array = [2, 5, 6, 4, 9, 20];
//   for (let num of array) yield num;
// }
// const genCaller = gen();
// console.log(genCaller.next().value);
// console.log(genCaller.next().value);
// console.log(genCaller.next().value);
// console.log(genCaller.next().value);

//----------------------------filter
// let array = [2, 5, 6, 4, 9, 20];
// console.log(array.filter((num) => num > 10));

//----------------------------reduce
// let array = [2, 5, 6, 4, 9, 20];
// let startingValue = 1;
// console.log(
//   array.reduce((num, previousNum) => num + previousNum, startingValue)
// );


