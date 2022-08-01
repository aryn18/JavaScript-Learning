// Array push pop
// array shift unshift

let f = ["apple", "oranges", "banana"];
console.log(f);
//push
f.push("grapes");
console.log(f);
//pop
f.pop();
let poppef = f.pop();
console.log(f);
console.log("popped fruit is", poppef);
//unshift
f.unshift("Gauava");
console.log(f);
//shift
let removeF = f.shift();
console.log(f);
console.log("removed fruit is", removeF);