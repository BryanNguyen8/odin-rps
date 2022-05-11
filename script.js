function computerPlay () {
    let hand = Math.floor(Math.random() * 3) + 1;
    switch (hand) {
        case 1:
            return `Rock`;
            break;
        case 2:
            return `Paper`;
            break;
        case 3:
            return `Scissors`;
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === `Rock` && computerSelection === 'Paper') {
        return `You lose! Paper beats rock!`;
    } else if (playerSelection === `Rock` && computerSelection === `Scissors`) {
        return `You win! Rock beats scissors!`;
    } else if (playerSelection === `Paper` && computerSelection === `Scissors`) {
        return `You lose! Scissors beats paper!`;
    } else if (playerSelection === `Paper` && computerSelection === `Rock`) {
        return `You win! Paper beats rock!`;
    } else if (playerSelection === `Scissors` && computerSelection === `Rock`) {
        return `You lose! Rock beats paper!`;
    } else if (playerSelection === `Scissors` && computerSelection === `Paper`) {
        return `You win! Scissors beats paper!`;
    } else if (playerSelection === computerSelection) {
        return `${playerSelection} and ${computerSelection} tie!`;
    } else
        return "Error!";
}

function convertInputToProper(string) {
    return string[0].toUpperCase() + string.slice(1);
}
function game() {
    let player;
    let computer;
    for (let i = 0; i < 5; i++) {
        player = convertInputToProper(prompt("Enter Rock, Paper, or Scissors", ""));
        computer = computerPlay();
        console.log(`You selected ${player} and the computer selected ${computer}`);
        console.log(playRound(player, computer));
    }
}

game();
