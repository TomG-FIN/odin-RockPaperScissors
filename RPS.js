function getComputerChoice() {
    let choiseNum = Math.floor(Math.random() * 3);
    const choises = ["rock","paper","scissors"]
    computerChoise = choises[choiseNum]
    console.log("Computer chose: "+computerChoise)
    return computerChoise;
}

function playRound(computerChoise, playerChoise) {
    if (playerChoise === computerChoise){
        return console.log("Draw!")
    }

    if (playerChoise === "paper"){
        if (computerChoise === "rock"){
            return console.log("You win! "+ playerChoise + " beats " + computerChoise)
            }
        if (computerChoise === "scissors"){
            return console.log("You lose! "+ computerChoise + " beats " + playerChoise)
            }
    }

    if (playerChoise === "rock"){
        if (computerChoise === "scissors"){
            return console.log("You win! "+ playerChoise + " beats " + computerChoise)
            }
        if (computerChoise === "paper"){
            return console.log("You lose! "+ computerChoise + " beats " + playerChoise)
            }
    }

    if (playerChoise === "scissors"){
        if (computerChoise === "paper"){
            return console.log("You win! "+ playerChoise + " beats " + computerChoise)
            }
        if (computerChoise === "rock"){
            return console.log("You lose! "+ computerChoise + " beats " + playerChoise)
            }
    }

}

const playerSelection = "paper";
const computerSelection = getComputerChoice();

console.log("Player chooses: " + playerSelection)

console.log(playRound(computerSelection, playerSelection));

// function getePlayerChoice(playerChoise) {
//     let playerSelection;
    
//     return playerSelection;
// }


