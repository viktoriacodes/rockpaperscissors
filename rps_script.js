let myArray = ['rock', 'paper', 'scissors'];

function computerPlay() {
    return myArray[Math.floor(Math.random() * myArray.length)];
}

// ask the user if they choose rock paper or scissors
//make the output case-insensitive
//if user answer is same as computer game, alert "TIE GAME"
//if user is rock and computer is scissors, alert you win
// if user is paper and computer is rock, alert you win
//if user is scissors and computer is paper, alert you win

function playRound() {
let userAnswer = prompt("Rock Paper or Scissors?", "");
let playerSelection = userAnswer.toLowerCase();
computerSelection = computerPlay();
console.log(playerSelection,computerSelection);

if (playerSelection == computerSelection) {
    alert("Tie Game!");
} else if (playerSelection == "rock" && computerSelection == "scissors") {
    alert("You win! Rock beats Scissors");
} else if 
(playerSelection == "paper" && computerSelection == "rock") {
    alert("You win! Paper beats Rock");
} else if 
(playerSelection == "scissors" && computerSelection == "paper") {
    alert("You win! Scissors beats Paper");
} else if 
(playerSelection == "scissors" && computerSelection == "rock"){
    alert("You lost. Rock beats Scissors");
} else if 
(playerSelection == "paper" && computerSelection == "scissors"){
    alert("You lost. Scissors beats Paper");
} else if 
(playerSelection == "rock" && computerSelection == "paper"){
    alert("You lost. Paper beats Rock");
} else {
    alert("Choose Rock Paper or Scissors");
}
}


playRound();
playRound();
playRound();
playRound();
playRound();
