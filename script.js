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

let roundWin = (a,b) => `You win! ${a} beats ${b}`
let roundLose = (a,b) => `You lose! ${b} beats ${a}`
let roundDraw = () => "It's a draw!"

function playRound(playerSelection, computerSelection) {

    switch(playerSelection) {
        case "rock":
            switch(computerSelection) {
                case "rock":
                    alert(roundDraw());
                    return;
                case "paper":
                    alert(roundLose(playerSelection,computerSelection));
                    return false;
                case "scissors":
                    alert(roundWin(playerSelection,computerSelection));
                    return true;
                default:
                    //stuff
                    return;
            }
            break;
        case "paper":
            switch(computerSelection) {
                case "rock":
                    alert(roundWin(playerSelection,computerSelection));
                    return true;
                case "paper":
                    alert(roundDraw());
                    return;
                case "scissors":
                    alert(roundLose(playerSelection,computerSelection));
                    return false;
                default:
                    //stuff
                    return;
            }
            break;
        case "scissors":
            switch(computerSelection) {
                case "rock":
                    alert(roundLose(playerSelection,computerSelection));
                    return false;
                case "paper":
                    alert(roundWin(playerSelection,computerSelection));
                    return true;
                case "scissors":
                    alert(roundDraw());
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

function promptPlayer() {
    let selection = prompt("Rock, paper, or scissors?");
    selection = selection.toLowerCase();
    return selection;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let roundResult;

    for (let i = 0; i < 5; i++) {
        roundResult = playRound(promptPlayer(),computerPlay())

        if (roundResult === undefined) {
        } else if (roundResult) {
            playerScore++;
        } else if (!roundResult) {
            computerScore++;
        }
    }

    alert("Player score: " + playerScore + " | Computer score: " + computerScore);
}

game();