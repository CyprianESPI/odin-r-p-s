console.log("Welcome");

const ROCK = 0;
const PAPER = 1;
const SCISSOR = 2;
const OPTIONS = ["🪨", "📃", "✂️"];
let result = "";
let computerChoice = "";
let playerChoice = "";

let playerWins = 0;
let computerWins = 0;

function reset() {
    playerWins = 0;
    computerWins = 0;
    result = "";
    computerChoice = "";
    playerChoice = "";
    updatePage();
}

function updatePage() {
    // Result
    const player = document.getElementById("player");
    player.innerText = playerChoice;
    const computer = document.getElementById("computer");
    computer.innerText = computerChoice;
    const res = document.getElementById("result");
    res.innerText = result;

    // Score
    const scorePlayer = document.getElementById("scorePlayer");
    scorePlayer.innerText = playerWins;
    const scoreComputer = document.getElementById("scoreComputer");
    scoreComputer.innerText = computerWins;
}

function rockClicked() {
    checkResult(ROCK);
}

function paperClicked() {
    checkResult(PAPER);
}

function scissorClicked() {
    checkResult(SCISSOR);
}

function getComputerChoice() {
    return randomIntFromInterval(0, OPTIONS.length - 1);
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function checkResult(player_choice) {
    const computer_choice = getComputerChoice();

    playerChoice = OPTIONS[player_choice];
    computerChoice = OPTIONS[computer_choice];
    console.log("Your choice: ", playerChoice);
    console.log("Computer choice: ", computerChoice);

    if (player_choice === computer_choice) {
        result = "Tie";
    }
    else if (player_choice === (computer_choice + 1) % OPTIONS.length) {
        result = "You Win";
        playerWins += 1;
    }
    else {
        result = "You Lose";
        computerWins += 1;
    }

    console.log(result);
    updatePage();
}