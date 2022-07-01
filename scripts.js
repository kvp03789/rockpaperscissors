

//GET COMP'S SELECTION FUNCTION
  function computerPlay() {
let value = Math.floor((Math.random() * 3) + 1);
if (value === 1) {return "Rock";}
else if (value === 2) {return "Paper";}
else {return "Scissors";} 
}

//PLAY A SINGLE ROUND FUNCTION --- BASIC/CORE LOGIC
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
    
    scorePara.textContent = `You threw: ${playerSelection}, and
    the computer threw: ${computerSelection}. 
    ${playRound(computerSelection, playerSelection)}`
}

function playRoundPaper() {
    const computerSelection = computerPlay().toUpperCase();
    const playerSelection = "PAPER";

    scorePara.textContent = `You threw: ${playerSelection}, and
    the computer threw: ${computerSelection}. 
    ${playRound(computerSelection, playerSelection)}`
}

function playRoundScissors() {
    const computerSelection = computerPlay().toUpperCase();
    const playerSelection = "SCISSORS";

    scorePara.textContent = `You threw: ${playerSelection}, and
    the computer threw: ${computerSelection}. 
    ${playRound(computerSelection, playerSelection)}`
}
 


//BUTTONS START HERE

const selectionButtons = document.querySelectorAll('.selectionBtn');

//ROCK BUTTON
const rockBtn = document.querySelector('#rockBtn');
rockBtn.addEventListener('click', playRoundRock);

//PAPER BUTTON
const paperBtn = document.querySelector('#paperBtn');
paperBtn.addEventListener('click', playRoundPaper);

//SCISSORS BUTTON
const scissorsBtn = document.querySelector('#scissorsBtn')
scissorsBtn.addEventListener('click', playRoundScissors);

//DOM EVENTS
const scorePara = document.createElement('p');
const scoreDiv = document.querySelector('#scoreDiv');

scoreDiv.appendChild(scorePara);


