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


console.log(getComputerChoice());

