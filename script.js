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
    // playRound(playerSelection, computerSelection) //calling a function inside another function
    // TODO define win tracking variables, they start as 0
    for (let i = 0; i < 5; i++) {
        //play a round
        const playerSelection = "rock";
        const computerSelection = getComputerChoice()
        // TODO call playRound, store result in variable
        playRound(playerSelection, computerSelection);
        // TODO if statement on result to check who won, 
        //      1) log out the winner (to say "x beats y", remember we have x and y stored as playerSelection and computerSelection variables )
        //      2) update tracking variables

    }

    // TODO compare tracking variables to see who won overall, then log the winner


}


const playerSelection = "rock";
const computerSelection = getComputerChoice()
console.log(playRound(playerSelection, computerSelection));
game();


//console.log(getComputerChoice());

