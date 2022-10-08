function getComputerChoice () {
    let randomNumber = Math.random()*3
    if (randomNumber <= 1) {
        return 'rock'
    }

    if (randomNumber >= 2) {
        return 'scissors'
    } 
    
    else {
        return 'paper'
    }   
    
}

function playRound(playerSelection, computerSelection) {

    playerSelection.toLowerCase()

    if (playerSelection == "rock") {

        if (computerSelection == "rock") {
            return "It's a draw"
        }
        if (computerSelection == "scissors") {
            return "You win! Rock beats scissors"
        }
        if (computerSelection == "paper") {
            return "You lose! Paper beats rock"
        }
        
    }
    if (playerSelection == "paper") {

        if (computerSelection == "rock") {
            return "You win! Paper beats rock!"
        }
        if (computerSelection == "scissors") {
            return "You lose! Scissors beats paper"
        }
        if (computerSelection == "paper") {
            return "It's a draw"
        }
        
    }
    if (playerSelection == "scissors") {

        if (computerSelection == "rock") {
            return "You lose! Rock beats scissors"
        }
        if (computerSelection == "scissors") {
            return "It's a draw"
        }
        if (computerSelection == "paper") {
            return "You win! Scissors beats paper"
        }
        
    }


}

const playerSelection = "rock";
const computerSelection = getComputerChoice()
console.log(playRound(playerSelection, computerSelection));


console.log(getComputerChoice());

