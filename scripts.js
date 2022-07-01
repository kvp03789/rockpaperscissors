//DECLARE VARIABLES
let playerSelection = prompt('Rock, Paper, or Scissors?').toUpperCase();
let computerSelection = computerPlay().toUpperCase();
let computerWin = 0;
let playerWin = 0;
let tieCount = 0;
//var regEx = /[a-z]/gi;



//GET COMP'S SELECTION FUNCTION
  function computerPlay() {
let value = Math.floor((Math.random() * 3) + 1);
if (value === 1) {return "Rock";}
else if (value === 2) {return "Paper";}
else {return "Scissors";} 
}

//PLAY A SINGLE ROUND FUNCTION
function playRound(computerSelection, playerSelection) {
  //computerSelection = computerPlay().toUpperCase();
  //playerSelection = prompt('Rock, Paper, or Scissors?').toUpperCase();
  if (playerSelection === computerSelection) {
    //return tieCount++;}
    return "Tie!";}
  else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
    //return computerWin++;}
    return "You lose T-T Paper covers Rock.";}
  else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
   //return playerWin++;}
   return "You win! Rock crushes paper.";}
  else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
   //return playerWin++;}
   return "You win! Paper covers rock";}
  else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
    //return computerWin++;} 
    return "You lose T-T Scissors cuts paper";}
  else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    //return playerWin++;} 
    return "You win! Scissors cuts paper!"}
  else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
   // return computerWin++} 
   return "You lose T-T Rock breaks scissors";}
  else {return;} 
}

//PLAY 5 ROUNDS
function game() {
for (let i = 1; i < 6; i++) {
playRound(computerSelection, playerSelection);
  }
}  

//DISPLAY APPROPRIATE SCORE AND MSG
function messageWinOrLoss() {
  if (computerWin > playerWin) {
return `Here are the results of the five matches: Computer: ${computerWin} You: ${playerWin} Ties: ${tieCount}. Looks like you lost T-T `
}
else {return `Here are the results of the five matches: Computer: ${computerWin} You: ${playerWin} Ties: ${tieCount}. Looks like you won!! ^-^ ` }
 }
 




//CALL THE FUNCTIONS
//console.log(`You threw ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} and the computer threw ${computerSelection}`);
//console.log(playRound(computerSelection, playerSelection));
// console.log(game());
// console.log(messageWinOrLoss());
console.log(`You threw: ${playerSelection} - the computer threw: ${computerSelection} -- `);
console.log(playRound(computerSelection, playerSelection));


