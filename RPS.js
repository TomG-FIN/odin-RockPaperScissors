function getComputerChoice() {
    let choiseNum = Math.floor(Math.random() * 3);
    const choises = ["rock","paper","scissors"]
    computerChoise = choises[choiseNum]
    console.log("Computer chose: "+computerChoise)
    return computerChoise;
}

function playRound(computerChoise, playerChoise) {
    let winner = "";
    if (playerChoise === computerChoise){
        winner = "Draw!"
    }

    if (playerChoise === "paper"){
        if (computerChoise === "rock"){
            winner = ("You win! "+ playerChoise + " beats " + computerChoise)
            }
        if (computerChoise === "scissors"){
            winner = ("You lose! "+ computerChoise + " beats " + playerChoise)
            }
    }

    if (playerChoise === "rock"){
        if (computerChoise === "scissors"){
            winner = ("You win! "+ playerChoise + " beats " + computerChoise)
            }
        if (computerChoise === "paper"){
            winner = ("You lose! "+ computerChoise + " beats " + playerChoise)
            }
    }

    if (playerChoise === "scissors"){
        if (computerChoise === "paper"){
            winner = ("You win! "+ playerChoise + " beats " + computerChoise)
            }
        if (computerChoise === "rock"){
            winner = ("You lose! "+ computerChoise + " beats " + playerChoise)
            }
    }

    return winner;
}

const playerSelection = "paper";
const computerSelection = getComputerChoice();

console.log("Player chooses: " + playerSelection)

console.log(playRound(computerSelection, playerSelection));

// function getePlayerChoice(playerChoise) {
//     let playerSelection;
    
//     return playerSelection;
// }


