const gameOptions = ["Rock", "Paper", "Scissors"];
let optionSelected;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function computerPlay() {
  let gameOptionsLength = gameOptions.length;
  optionSelected = gameOptions[getRandomInt(gameOptionsLength)];
  return optionSelected;
}

function letsPlay() {
  let playerOptionOG = prompt("Pick an option: Rock, Paper, Scissors");
  // case insensitive
  let playerOptionLowerCase = playerOptionOG.toLowerCase();
  let playerOption =
    playerOptionLowerCase[0].toUpperCase() + playerOptionLowerCase.slice(1);

  let computerOption = computerPlay();
  console.log("Player Selected: " + playerOption);
  console.log("Computer Selected: " + computerOption);

  if (
    playerOption != "Rock" &&
    playerOption != "Paper" &&
    playerOption != "Scissors"
  ) {
    // when the user writes anything other than the available options returns NaN;
    alert("Unrecognized option. Pick between: Rock, Paper or Scissors.");
    return NaN;
  } else if (playerOption === computerOption) {
    return 0;
    //"You picked the same option. Try again.";
  } else if (
    (playerOption === "Rock" && computerOption === "Paper") ||
    (playerOption === "Paper" && computerOption === "Rock")
  ) {
    if (playerOption === "Rock") {
      return computerPoints++;
      // "Computer wins! Paper beats Rock.";
    } else return playerPoints++;
    //"You win! Paper beats Rock.";
  } else if (
    (playerOption === "Scissors" && computerOption === "Paper") ||
    (playerOption === "Paper" && computerOption === "Scissors")
  ) {
    if (playerOption === "Scissors") {
      return playerPoints++;
      //"You win! Scissors beats Paper.";
    } else return computerPoints++;
    //"Computer wins! Scissors beats Paper.";
  } else {
    if (playerOption === "Scissors") {
      return computerPoints++;
      //"Computer wins! Rock beats Scissors.";
    } else return playerPoints++;
    //"You win! Rock beats Scissors.";
  }
}

let playerPoints = 0;
let computerPoints = 0;

function game() {
  for (let i = 0; i < 5; i++) {
    letsPlay();
    // when the player writes an unavailable option, the loop continues to the next iteration, and the scores remain the same.
    if (letsPlay === NaN) {
      continue;
    }
    console.log(
      `Score so far: Player - ${playerPoints}, Computer - ${computerPoints}.`
    );
  }
  if (playerPoints > computerPoints) {
    console.log(
      `Player is the winner! Final score: Player scored ${playerPoints} points and Computer scored ${computerPoints} points.`
    );
    return `Player is the winner! Final score: Player scored ${playerPoints} points and Computer scored ${computerPoints} points.`;
  } else if (playerPoints < computerPoints) {
    console.log(
      `Computer is the winner! Final score: Player scored ${playerPoints} points and Computer scored ${computerPoints} points.`
    );
    return `Computer is the winner! Final score: Player scored ${playerPoints} points and Computer scored ${computerPoints} points.`;
  } else {
    console.log(
      `There are no winners because you have the same score! Final score: Player scored ${playerPoints} points and Computer scored ${computerPoints} points.`
    );
    return `There are no winners because you have the same score! Final score: Player scored ${playerPoints} points and Computer got = ${computerPoints} points.`;
  }
}

game();
