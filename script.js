function getComputerChoice () {
    let randomNumber = Math.random()*3 //random number variable = give me a number between 0-3
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

function playRound(playerSelection, computerSelection) { //defining a function
    
    playerSelection = playerSelection.toLowerCase() //converting variable to lower case

    if (playerSelection == "rock") {

        if (computerSelection == "rock") {
            return 0
        }
        if (computerSelection == "scissors") {
            return 1
        }
        if (computerSelection == "paper") {
            return 2
        }
        
    }
    if (playerSelection == "paper") {

        if (computerSelection == "rock") {
            return 1
        }
        if (computerSelection == "scissors") {
            return 2
        }
        if (computerSelection == "paper") {
            return 0
        }
        
    }
    if (playerSelection == "scissors") {

        if (computerSelection == "rock") {
            return 2
        }
        if (computerSelection == "scissors") {
            return 0
        }
        if (computerSelection == "paper") {
            return 1
        }
    } else {
        return 3
    }
        
    }

function game() {
    // define win tracking variables, they start as 0
    let playerWins = 0
    let computerWins = 0
    for (let i = 0; i < 5; i++) {
        //play a round
        let playerSelection = prompt();
        const computerSelection = getComputerChoice()
        // call playRound, store result in variable (result)
        let result = playRound(playerSelection, computerSelection)
        // if statement on result to check who won
        if (result == 0) {
            console.log("You picked " + playerSelection + " and the computer picked " + computerSelection + " so it's a draw")
        }
        if (result == 1) {
            console.log("You picked " + playerSelection + " and the computer picked " + computerSelection + " so you win")
            playerWins++
        }
        if (result == 2) {
            console.log("You picked " + playerSelection + " and the computer picked " + computerSelection + " so you lose")
            computerWins++
        }
        if (result == 3) {
            console.log("Invalid result")
        }      

    } 
    // compare tracking variables to see who won overall, then log the winner
    if (playerWins > computerWins) {
        console.log("You win the game!")
    }
    if (computerWins > playerWins) {
        console.log("You lose the game!")
    }




}



const computerSelection = getComputerChoice()
game();


//console.log(getComputerChoice());

