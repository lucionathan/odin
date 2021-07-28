function computerPlay() {
    const items = ["Rock", "Paper", "Scissors"];
    const item = items[Math.floor(Math.random() * items.length)];
    // console.log(item);
    return item;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    // console.log(`${playerSelection} ${computerSelection}`)
    if(playerSelection === computerSelection) {
        return Draw;
    }
    if(playerSelection === "rock") {
        if(computerSelection === "paper") {
            return "You Lose! Paper beats Rock"
        } else if(computerSelection === "scissors") {
            return "You Win! Rock beats Scissors";
        }
    }
    if(playerSelection === "scissors") {
        if(computerSelection === "paper") {
            return "You Win! Scissors beats Paper"
        } else if(computerSelection === "rock") {
            return "You Lose! Rock beats Scissors";
        }
    }
    if(playerSelection === "paper") {
        if(computerSelection === "rock") {
            return "You Win! Paper beats Rock"
        } else if(computerSelection === "scissors") {
            return "You Lose! Scissors beats Paper";
        }
    }
}

function game() {
    for (let index = 0; index < 5; index++) {
        const playerSelection = window.prompt("abububelbelbel");
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();
// export default computerPlay; 