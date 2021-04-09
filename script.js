//page elements
const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");
const body = document.querySelector("body");
const div = document.createElement("div");
const divResults = document.createElement("div");
const paraResults = document.createElement("p");
const divTitle = document.createElement("div");
const divSelections = document.createElement("div");
const paraTitleComputer = document.createElement("p");
const paraTitlePlayer = document.createElement("p");
const paraSelectionsComputer = document.createElement("p");
const paraSelectionsPlayer = document.createElement("p");
const divEnd = document.createElement("div");
const paraWinner = document.createElement("p");
const paraGameOver = document.createElement("p");

// computer picks an option
const gameOptions = ["Rock", "Paper", "Scissors"];
let computerSelected;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function computerPlay() {
  let gameOptionsLength = gameOptions.length;
  computerSelected = gameOptions[getRandomInt(gameOptionsLength)];
  return computerSelected;
}

// player picks an option with a click on a button
let playerSelected;
rockButton.addEventListener("click", () => {
  playOnClick("Rock");
  stopClickAlert(rockButton);
});

paperButton.addEventListener("click", () => {
  playOnClick("Paper");
  stopClickAlert(paperButton);
});

scissorsButton.addEventListener("click", () => {
  playOnClick("Scissors");
  stopClickAlert(scissorsButton);
});

// beginning of game setup
let gameEnded = false;
let playerPoints = 0;
let computerPoints = 0;
paraResults.textContent = "0 | 0";
paraSelectionsComputer.textContent = "Computer will pick later";
paraSelectionsPlayer.textContent = "Pick one option above";
paraTitleComputer.textContent = "Computer";
paraTitlePlayer.textContent = "Player";

// check who won the round and give 1 point to the winner. in case of a draw gives 0 points
function playRound(playerOption) {
  let computerOption = computerPlay();
  paraSelectionsPlayer.textContent = `${playerOption}`;
  paraSelectionsComputer.textContent = `${computerOption}`;
  if (playerOption === computerOption) {
    return 0;
  } else if (
    (playerOption === "Rock" && computerOption === "Paper") ||
    (playerOption === "Paper" && computerOption === "Rock")
  ) {
    if (playerOption === "Rock") {
      return computerPoints++;
    } else return playerPoints++;
  } else if (
    (playerOption === "Scissors" && computerOption === "Paper") ||
    (playerOption === "Paper" && computerOption === "Scissors")
  ) {
    if (playerOption === "Scissors") {
      return playerPoints++;
    } else return computerPoints++;
  } else {
    if (playerOption === "Scissors") {
      return computerPoints++;
    } else return playerPoints++;
  }
}

// play game and check result
function fivePointsCheck(playerSelected) {
  // stop if a winner has been found
  if (gameEnded) return;
  // play one round
  playRound(playerSelected);
  // check if a player has 5 points
  if (playerPoints === 5 || computerPoints === 5) {
    gameEnded = true;
    paraGameOver.textContent = "Game Over";
    if (playerPoints === computerPoints) {
      paraWinner.textContent = `It's a draw!`;
    } else if (playerPoints > computerPoints) {
      paraWinner.textContent = "Player is the winner!";
    } else {
      paraWinner.textContent = "Computer is the winner!";
    }
    appendResults();
    return;
  }
}

function appendResults() {
  divResults.appendChild(divEnd);
  divEnd.appendChild(paraGameOver);
  divEnd.appendChild(paraWinner);
}

// gets the result of the round and displays the current result
function playOnClick(selected) {
  fivePointsCheck(selected);
  paraResults.textContent = `${playerPoints} | ${computerPoints}`;
}

// stop clicking please
let clicks = 0;
function stopClickAlert(button) {
  if (gameEnded) {
    button.onclick = () => {
      clicks++;
      console.log(clicks);
    };
  }
  if (clicks === 1) {
    alert("The game is over. Refresh to restart.");
  }
  if (clicks === 3) {
    alert("It's time to move on.");
  }
  if (clicks === 5) {
    alert("Please stop. :(");
  }
}

//css
body.style.width = "99vw";
body.style.height = "99vh";
body.style.background = "linear-gradient(35deg, #CCFFFF, #FFCCCC)";
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.rowGap = "40px";
body.style.alignItems = "center";
body.style.justifyContent = "center";
div.style.display = "flex";
div.style.flex = "1fr 1fr 1fr";
div.style.width = "500px";
div.style.height = "70px";
div.style.justifyContent = "space-around";

rockButton.textContent = "Rock";
rockButton.style.width = "110px";
rockButton.style.fontSize = "18px";
rockButton.style.backgroundColor = "grey";
rockButton.style.borderRadius = "10px";
rockButton.style.border = "none";
rockButton.style.color = "white";
rockButton.style.boxShadow =
  "inset 2px 2px 3px rgba(255, 255, 255, .4),inset -2px -2px 3px rgba(0, 0, 0, .4)";
paperButton.textContent = "Paper";
paperButton.style.width = "110px";
paperButton.style.fontSize = "18px";
paperButton.style.backgroundColor = "beige";
paperButton.style.borderRadius = "10px";
paperButton.style.border = "none";
paperButton.style.boxShadow =
  "inset 2px 2px 3px rgba(255, 255, 255, .4),inset -2px -2px 3px rgba(0, 0, 0, .4)";
scissorsButton.textContent = "Scissors";
scissorsButton.style.width = "110px";
scissorsButton.style.fontSize = "18px";
scissorsButton.style.backgroundColor = "silver";
scissorsButton.style.borderRadius = "10px";
scissorsButton.style.border = "none";
scissorsButton.style.boxShadow =
  "inset 2px 2px 3px rgba(255, 255, 255, .4),inset -2px -2px 3px rgba(0, 0, 0, .4)";

divSelections.style.display = "grid";
divSelections.style.gridTemplateColumns = "1fr 1fr";
divSelections.style.width = "400px";
divSelections.style.columnGap = "50px";
divSelections.style.textAlign = "center";

divTitle.style.display = "grid";
divTitle.style.gridTemplateColumns = "1fr 1fr";
divTitle.style.width = "400px";
divTitle.style.columnGap = "50px";
divTitle.style.textAlign = "center";
divTitle.style.fontWeight = "bolder";
divTitle.style.fontSize = "25px";

divResults.style.width = "400px";
paraResults.style.textAlign = "center";
paraResults.style.fontSize = "25px";
divEnd.style.textAlign = "center";
divEnd.style.border = "1px solid black";
paraWinner.style.lineHeight = "1.5em";
paraWinner.style.fontWeight = "bolder";

// append buttons to page
body.appendChild(div);
div.appendChild(rockButton);
div.appendChild(paperButton);
div.appendChild(scissorsButton);
body.appendChild(divResults);
divResults.appendChild(divTitle);
divTitle.appendChild(paraTitlePlayer);
divTitle.appendChild(paraTitleComputer);
divResults.appendChild(divSelections);
divSelections.appendChild(paraSelectionsPlayer);
divSelections.appendChild(paraSelectionsComputer);
divResults.appendChild(paraResults);
