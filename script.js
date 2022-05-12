/* this code runs the game rock, paper, scissors

rules:  rock > scissors
        paper > rock
        scissors > paper

        the player makes a selection and the computer will make a completely random selection
        if the player wins a round, the player's score goes up 1
        if the computer wins a round, the computer's score goes up 1
        the first entity with a score of 5 wins the game
        the game will prompt to start over

basic functions to build:

- computerPlay() - computer randomly selects rock, paper, or scissors using the Math.random to pick 1, 2, or 3 and returning a string with the selection
- game() - runs the game by:
    1. creating a nodelist of all the buttons representing rock, paper, or scissors using querySelectorAll
    2. adding up event listeners ('clicks') on all three buttons using forEach
    3. a click on any button should represent the player's selection of rock, paper, or scissors and will run playRound() and computerPlay() as a callBack function
    4. the winner of the round should have their score tally += 1
    4. once the score of any player reaches 5, the game is over
*/
function computerPlay() {
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

function playerSelects(e) {
    const result = playRound(convertInputToProper(e.target.id), computerPlay());
    const winner = document.querySelector('#winner');
    winner.textContent = "";

    if (result.includes("win")) {
        playerScore++;
    } else if (result.includes("lose")) {
        computerScore++;
    }

    refreshScore(result);
    
    if (playerScore >= 5 || computerScore >= 5) {
        endGame();
    }
}

function refreshScore(result) {
    const theResult = document.querySelector("#result");
    const playerResult = document.querySelector("#player");
    const computerResult = document.querySelector('#computer');

    theResult.textContent = `${result}`;
    playerResult.textContent = `Player: ${playerScore}`;
    computerResult.textContent = `Computer: ${computerScore}`;
}

function endGame() {
    const winner = document.querySelector('#winner');
    if (playerScore > computerScore) {
        winner.textContent = "Congratulations! You won! Select an option to play again.";
    } else {
        winner.textContent = "Sorry, you lost! Select an option to play again.";
    }
    playerScore = 0;
    computerScore = 0;
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

let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playerSelects));