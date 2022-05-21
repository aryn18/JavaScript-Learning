// undefined- if we create a variable and we didn't assign any value then our variable is undefiend.
// and undefined works on only with var and let keyword and not with const because of const value always fix through out the code.

var aryan;
let variable;
// const david; // Uncaught SyntaxError: Missing initializer in const declaration
console.log(variable, aryan);

// null

let myVariable = null;
console.log(myVariable, typeof myVariable);
console.log(typeof null); // it's a bug because of null throws a output object

// BigInt
let myNum = BigInt(151654546546548); // this is the represent of bigint
let sameMyNum = 123n; // this is also the representation of bgint
console.log(Number.MAX_SAFE_INTEGER); // this shows the we store the maximum value in number datatype which is 9007199254740991
console.log(myNum, sameMyNum); 
console.log(typeof myNum, typeof sameMyNum);
let sameNum = 23;
// console.log(sameMyNum + sameNum); // we cannot mix the bigInt datatype with other datatype // Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions