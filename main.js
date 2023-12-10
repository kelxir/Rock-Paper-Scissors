function getComputerChoice() {
  const possibleChoices = ["rock", "paper", "scissors"];
  let possibleChoicesIndex = Math.floor(Math.random() * possibleChoices.length);
  return possibleChoices[possibleChoicesIndex];
}

function getPlayerChoice(){
  return prompt("Rock Paper Scissors");
}

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

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (var i = 0; i < 5; i++) {
    let roundOutcome = playRound(getPlayerChoice(), getComputerChoice());
    if (roundOutcome === "T") {
      roundOutcome = playRound(getPlayerChoice(), getComputerChoice());
      if (roundOutcome === "W") {
        playerScore += 1;
      } else if (roundOutcome === "L") {
        computerScore += 1;
      }
    } else {
      if (roundOutcome === "W") {
        playerScore += 1;
      } else if (roundOutcome === "L"){
        computerScore += 1;
      }
    }
  }
  console.log(playerScore + " " + computerScore);
}

game();