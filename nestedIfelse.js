// nested if else

 let winningNumber = 21;
 let userguess = +prompt("Guess a number");

 if(userguess === winningNumber){
    console.log("Your guess is right");
 }else{
    if(userguess < winningNumber){
        console.log("Your guess number is too low");
    }else{
        console.log("YOur guess number is too high");
    }
}