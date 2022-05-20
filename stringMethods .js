// trim
// toUpperCase()
// toLowerCase()
//slice

let  string = "     Hello JavaScript    ";

console.log(string.length);
string = string.trim();
console.log(string);
console.log(string.length);

string = string.toUpperCase();
console.log(string);
// console.log(string.toUpperCase()); // this is also right
// console.log(string.toLowerCase()); // this is also right
string = string.toLowerCase();
console.log(string);

// start index
// end index

let newString = "JavaScript";
newString = newString.slice(0,6);
console.log(newString);