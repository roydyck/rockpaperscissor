function computerPlay() {
    let throwNum = Math.floor(Math.random() * 3) + 1;

    switch(throwNum) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            return "rock";
    }
}

let playerScore = 0;
let computerScore = 0;

function roundWin(a,b) {
    alert(`You win! ${a} beats ${b}`);
    playerScore++;
    playerResults.textContent = playerScore;
    theEnd(playerScore, computerScore);
}
function roundLose(a,b) {
    alert(`You lose! ${b} beats ${a}`);
    computerScore++;
    computerResults.textContent = computerScore;
    theEnd(playerScore, computerScore);
}
function roundDraw() {
    alert("It's a draw!");
    theEnd(playerScore, computerScore);
}

function theEnd(playerScore, computerScore) {
    if (playerScore >= 5 || computerScore >= 5) {
        if (playerScore >= 5) {
            alert("You win!")
        } else {
            alert("You lose the game! Try again.")
        }
        reset();
    }
    
    return;
}

function reset() {
    playerScore = 0;
    computerScore = 0;
    playerResults.textContent = 0;
    computerResults.textContent= 0;
}

function playRound(e) {

    computerSelection = computerPlay();
    playerSelection = this.id;
    
    switch(playerSelection) {
        case "rock":
            switch(computerSelection) {
                case "rock":
                    roundDraw();
                    return;
                case "paper":
                    roundLose(playerSelection,computerSelection);
                    return;
                case "scissors":
                    roundWin(playerSelection,computerSelection);
                    return;
                default:
                    //stuff
                    return;
            }
            break;
        case "paper":
            switch(computerSelection) {
                case "rock":
                    roundWin(playerSelection,computerSelection);
                    return;
                case "paper":
                    roundDraw();
                    return;
                case "scissors":
                    roundLose(playerSelection,computerSelection);
                    return;
                default:
                    //stuff
                    return;
            }
            break;
        case "scissors":
            switch(computerSelection) {
                case "rock":
                    roundLose(playerSelection,computerSelection);
                    return;
                case "paper":
                    roundWin(playerSelection,computerSelection);
                    return;
                case "scissors":
                    roundDraw();
                    return;
                default:
                    //stuff
                    return;
            }
            break;
        default:
            //stuff
    }
}

const buttons = document.querySelectorAll("button");
const playerResults = document.querySelector("#playerResults");
const computerResults = document.querySelector("#computerResults");

buttons.forEach(button => button.addEventListener('click', playRound));