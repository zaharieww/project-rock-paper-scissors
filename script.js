const rockButton = document.querySelector(".choice-button.rock-button");
const paperButton = document.querySelector(".choice-button.paper-button");
const scissorsButton = document.querySelector(".choice-button.scissors-button");

const computerChoseDiv = document.querySelector(".computer-chose");
const humanChoseDiv = document.querySelector(".human-chose");
const roundDeciderDiv = document.querySelector(".round-decider");
const runningScoreDiv = document.querySelector(".running-score");
const gameWinnerDiv = document.querySelector(".game-winner");

function getComputerChoice(){
    const choice = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choice[randomIndex];
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice){
    humanChoseDiv.textContent = `Human chose: ${humanChoice}`;
    computerChoseDiv.textContent = `Computer chose: ${getComputerChoice()}`;
    if(humanChoice === "Rock" && computerChoseDiv.textContent.includes("Scissors")){
        humanScore++;
        roundDeciderDiv.textContent = "Human wins! Rock beats Scissors";
    }else if(humanChoice === "Paper" && computerChoseDiv.textContent.includes("Rock")){
        humanScore++;
        roundDeciderDiv.textContent = "Human wins! Paper beats Rock"
    }else if(humanChoice === "Scissors" && computerChoseDiv.textContent.includes("Paper")){
        humanScore++;
        roundDeciderDiv.textContent = "Human wins! Scissors beats Paper"
    }else if(computerChoseDiv.textContent.includes("Rock") && humanChoice === "Scissors"){
        computerScore++
        roundDeciderDiv.textContent = "Human loses! Rock beats Scissors"
    }else if(computerChoseDiv.textContent.includes("Scissors") && humanChoice === "Paper"){
        computerScore++
        roundDeciderDiv.textContent = "Human loses! Scissors beats Paper"
    }else if(computerChoseDiv.textContent.includes("Paper") && humanChoice === "Rock"){
        computerScore++
        roundDeciderDiv.textContent = "Human loses! Paper beats Rock"
    }else{
        roundDeciderDiv.textContent = "Tie";
    }
    runningScoreDiv.textContent = `Human score: ${humanScore} | Computer score: ${computerScore}`;

    if(humanScore === 5 && computerScore < 5){
        gameWinnerDiv.textContent = "Human won!"
    }else if(humanScore < 5 && computerScore === 5){
        gameWinnerDiv.textContent = "Computer won!"
    }
}

rockButton.addEventListener("click", () => playRound("Rock"));
paperButton.addEventListener("click", () => playRound("Paper"));
scissorsButton.addEventListener("click", () => playRound("Scissors"));