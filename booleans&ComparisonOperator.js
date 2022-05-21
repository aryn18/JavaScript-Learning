// booleans and Comparison operator

// booleans always written true & false
// comparison operators are ==, ===, !=, !==, >, <, >=, <= so these are comparison operator
let num = 3;
let numOne = 4;
console.log (num > numOne);

// == & === 

let numTwo = 7;
let numThree = 7;
let numFour = "7";
let numFive = "8";
console.log(numTwo == numThree);
console.log(numTwo == numFour); // equal to "==" always check the value and did not check the datatype of both the variable
console.log(numTwo ===  numThree);
console.log(numTwo ===  numThree);
console.log(numThree === numFour); // triple equal "===" to always check the datatype of a passing variable and the value if datatype and value of both the variable are same they shows true in console but if datatype is different and value are same then they show false and if values are different and datatype is same then they show false.

// != & !==

console.log(num != numOne);
console.log(numFour != numThree);
console.log(numFour !== numThree); // they check the datatype also.