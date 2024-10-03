// Write a program that ask the user to guess a number between 1 and 0.
// Use a while loop to keep asking until the user guess the correct number.
//Log all messages to the console indicating wether their guess is too high,too low,or correct.

let number;
while (true) {
  let number = prompt("Guess the number between 1 and 10:"); 
parseInt (number)

if (number <1) {
  console.log ("too low!");
}
 else if (number > 10) {
    console.log("too high!");
 
  } else {
     console.log ("correct!");
    break ;
  }
}
