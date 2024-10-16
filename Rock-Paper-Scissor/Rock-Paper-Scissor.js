
const playerSelection = document.getElementById('player-selection');
const computerSelection = document.getElementById('computer-selection');
const resultDisplay = document.getElementById('result');
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');
let playerScore = 0;
let computerScore = 0;

playerScore.style.color = 'green';
computerScore.style.color = 'red';

function selectOption(input) {
    const choices = ['rock', 'paper', 'scissors']
    const playerOption = input;
    const computerOptionNumber = Math.floor((Math.random(choices))*(choices.length))
    const computerOption = choices[computerOptionNumber]
    playerSelection.textContent = `Player: ${playerOption}`
    computerSelection.textContent = `Computer: ${computerOption}`

    if (playerOption === computerOption) {
        result = "It's a Tie 😳";
    }
    else {
       switch(playerOption){
            case 'rock':
                result = (computerOption === 'scissors') ? "You Win" : "You Lose";
                break;
            case 'paper':
                result = (computerOption === 'rock') ? "You Win" : "You Lose";
                break;
            case 'scissors':
                result = (computerOption === 'paper') ? "You Win" : "You Lose";
                break;
        }
    }
    resultDisplay.textContent = result;
    resultDisplay.classList.remove("greenText", "redText");

    switch(result){
        case "You Win":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "You Lose":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
}

function restart() {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    resultDisplay.textContent = '';
    playerSelection.textContent = `Player: `
    computerSelection.textContent = `Computer: `
    resultDisplay.classList.remove("greenText", "redText");
}