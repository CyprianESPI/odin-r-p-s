console.log("Welcome");

const ROCK = 0;
const PAPER = 1;
const SCISSOR = 2;
const OPTIONS = ["rock", "paper", "scissor"];

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

    console.log("Your choice: ", OPTIONS[player_choice]);
    console.log("Computer choice: ", OPTIONS[computer_choice]);

    if (player_choice === computer_choice) {
        console.log("tie");
    }
    else if (player_choice === (computer_choice + 1) % OPTIONS.length) {
        console.log("you win");
    }
    else {
        console.log("you lose");
    }
}