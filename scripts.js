






//DECLARE VARIABLES

// let computerWin = 0;
// let playerWin = 0;
// let tieCount = 0;
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
// function game() {
// for (let i = 1; i < 6; i++) {
// playRound(computerSelection, playerSelection);
//   }
// }  

function playRoundRock() {
    const computerSelection = computerPlay().toUpperCase();
    const playerSelection = "ROCK";
    console.log(`You threw: ${playerSelection}
    - the computer threw: ${computerSelection} -- `);
    console.log(playRound(computerSelection, playerSelection));   
}

function playRoundPaper() {
    const computerSelection = computerPlay().toUpperCase();
    const playerSelection = "PAPER";
    console.log(`You threw: ${playerSelection}
    - the computer threw: ${computerSelection} -- `);
    console.log(playRound(computerSelection, playerSelection));   
}

function playRoundScissors() {
    const computerSelection = computerPlay().toUpperCase();
    const playerSelection = "SCISSORS";
    console.log(`You threw: ${playerSelection}
    - the computer threw: ${computerSelection} -- `);
    console.log(playRound(computerSelection, playerSelection));   
}
 




//CALL THE FUNCTIONS
//console.log(`You threw ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} and the computer threw ${computerSelection}`);
//console.log(playRound(computerSelection, playerSelection));
// console.log(game());
// console.log(messageWinOrLoss());

//console.log(playRound(computerSelection, playerSelection));



const selectionButtons = document.querySelectorAll('.selectionBtn');

const rockBtn = document.querySelector('#rockBtn');
rockBtn.addEventListener('click', playRoundRock);

const paperBtn = document.querySelector('#paperBtn');
paperBtn.addEventListener('click', playRoundPaper);

const scissorsBtn = document.querySelector('#scissorsBtn')
scissorsBtn.addEventListener('click', playRoundScissors);


