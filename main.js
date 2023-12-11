function getComputerChoice() {
  const possibleChoices = ["rock", "paper", "scissors"];
  let possibleChoicesIndex = Math.floor(Math.random() * possibleChoices.length);
  return possibleChoices[possibleChoicesIndex];
};

function playRound(playerSelection, computerSelection) {
  if (playerSelection !== computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
      console.log("You lose paper beats rock")
      return "L";
    } else if (playerSelection === "rock" && computerSelection === "scissors"){
      console.log("You win rock beats scissors");
      return "W";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      console.log("You won paper beats rock");
      return "W";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
      console.log("You lost scissors beats paper");
      return "L";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      console.log("You lost rock beats scissors");
      return "L";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
      console.log("You won scissors beats paper");
      return "W";
    }
  } else {
    console.log("Thats a tie, play again");
    return "T";
  }
}

const rock = document.querySelector("#rock-button");
const paper = document.querySelector("#paper-button");
const scissors = document.querySelector("#scissors-button");

rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));
