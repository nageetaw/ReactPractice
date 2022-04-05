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
const Sum = (x, y = 2) => x + y;
console.log(Sum(5));
