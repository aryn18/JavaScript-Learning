let ffname = "Aryan";
let ageInNo = 21;

if(ffname[0] === "A" && ageInNo === 21){
    console.log("Nme start with A and age is 21. ");
}

// and operator will works only when the both condition is true if any condition is false then and operator didn't work

if(ffname[1] === "r" || ageInNo === 20){
    console.log("The second alphabet of name is r and  your input age is wrong");
}

// or operator will work when atleast one condtion is ture if both condition is false then or operator didn't work