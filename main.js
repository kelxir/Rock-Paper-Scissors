const rock = document.querySelector("#rock-button");
const paper = document.querySelector("#paper-button");
const scissors = document.querySelector("#scissors-button");
const outcome = document.querySelector(".outcome");
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");
const totalOutcome = document.querySelector(".totalOutcome");
let cScore = 0;
let pScore = 0;


function getComputerChoice() {
  const possibleChoices = ["rock", "paper", "scissors"];
  let possibleChoicesIndex = Math.floor(Math.random() * possibleChoices.length);
  return possibleChoices[possibleChoicesIndex];
};

function playRound(playerSelection, computerSelection) {
 
  if (playerSelection !== computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
      outcome.textContent = "You lose paper beats rock";
      cScore+=1;
      computerScore.textContent = cScore;
      playerScore.textContent = pScore;
    } else if (playerSelection === "rock" && computerSelection === "scissors"){
      outcome.textContent = "You win rock beats scissors";
      pScore+=1;
      computerScore.textContent = cScore;
      playerScore.textContent = pScore;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      outcome.textContent = "You won paper beats rock";
      pScore+=1;
      computerScore.textContent = cScore;
      playerScore.textContent = pScore;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
      outcome.textContent = "You lost scissors beats paper";
      cScore+=1;
      computerScore.textContent = cScore;
      playerScore.textContent = pScore;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      outcome.textContent = "You lost rock beats scissors";
      cScore+=1;
      computerScore.textContent = cScore;
      playerScore.textContent = pScore;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
      outcome.textContent = "You won scissors beats paper";
      pScore+=1;
      computerScore.textContent = cScore;
      playerScore.textContent = pScore;
    }
  } else {
    outcome.textContent = "Thats a tie, play again";
  }
}

rock.addEventListener("click", () => {
  playRound("rock", getComputerChoice())
  checkScore();
  });
paper.addEventListener("click", () => { 
  playRound("paper", getComputerChoice());
  checkScore();
});
scissors.addEventListener("click", () => { 
  playRound("scissors", getComputerChoice());
  checkScore();
});

function checkScore() {
  if (pScore > 4 ) {
    pScore = 0;
    cScore = 0;
    totalOutcome.textContent = "You won, best of five";
  } else if (cScore > 4) {
    pScore = 0;
    cScore = 0;
    totalOutcome.textContent = "You lost";
  }
}
