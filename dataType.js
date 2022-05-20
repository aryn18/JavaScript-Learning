// typeof operator

// data types(primitive data types)
// string "David"
// number 2, 4, 5, 6
// booleans
// undefined
// null
// BigInt
// Symbol

let age = 20;
let middleName = "Sarah";
console.log(typeof age, typeof middleName);

// convert number to string

// if we change the number datatype into String datatype we only passed an empty String.
console.log(typeof(age + "")); // output is string and compiler reads  "22"

// convert string to number
let newAge = "24";
console.log(typeof newAge);
console.log(typeof +newAge);

let myAge = 21;
myAge = String(myAge);
console.log( typeof myAge);

myAge = "21";
myAge = Number(myAge);
console.log( typeof myAge);