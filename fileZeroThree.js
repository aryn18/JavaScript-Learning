// Rules for naming variables

// we can start variable name with number
// example
// 1value (invalid)
// value1 (valid)

//var 1value = 20; // Uncaught SyntaxError: Invalid or unexpected token

var value1 =   10;
console.log(value1);

// we can use only underscore '_' or dollar '$' symbol
// example
// first_name (valid)
// _firstname (valid)

var first_name = "Steve"; // snake case writing
var _secondname = "Smith";
console.log(first_name, _secondname);

// first$name (valid)
// $firstname (valid)

var first$name = "Jos";
var $SecondName = "Buttler";
console.log(first$name, $SecondName);

var _school$name = 'David Smith';
console.log(_school$name);

// we cannot use spaces in variable name
// example
// first name (invalid)

// convention
// sart with small letter and use camelCase 