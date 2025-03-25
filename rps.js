//console.log("-------------- PAGE REFRESHED --------------")

function getComputerChoice() {
    let options = ["scissors", "paper", "rock"];
    let choice = Math.floor(Math.random()*3);
    return options[choice]
}

function getHumanChoice() {
     return prompt("What move do you want to play (scissors / paper / rock)?", "rock");
} 

// function playRound(humanChoice, computerChoice) {
//     const wins = {
//         "rock" : "scissors",
//         "paper" : "rock", 
//         "scissors" : "paper"
//     }

//     humanChoice = humanChoice.toLowerCase();
//     if (humanChoice === computerChoice) {
//         console.log(`You both picked ${humanChoice}. It's a tie!`)
//     } else if (wins[humanChoice] === computerChoice) {
//         humanScore += 1;
//         console.log(`You picked ${humanChoice} and the computer picked ${computerChoice}. You win!`)
//     } else {
//         computerScore += 1;
//         console.log(`You picked ${humanChoice} and the computer picked ${computerChoice}. You lose!`)
//     }  
// }

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    const moves = document.querySelectorAll("button");
    const outcome = document.querySelector("#outcome");
    const humanScoreDisplay = document.querySelector("#humanScore");
    const computerScoreDisplay = document.querySelector("#computerScore");
    const gameover = document.querySelector("#gameover");

    moves.forEach(move => {
        move.addEventListener("click", () => playRound(move.textContent, getComputerChoice()));
    });

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        console.log(humanChoice)

        if (humanChoice === computerChoice) {
            console.log("Div should update");
            outcome.textContent = `You both picked ${humanChoice}. It's a tie!`;
        } else if (
            humanChoice === "rock" && computerChoice === "scissors" || 
            humanChoice === "scissors" && computerChoice === "paper" ||
            humanChoice === "paper" && computerChoice ==="rock"
        ) {
            humanScore += 1;
            outcome.textContent = `You picked ${humanChoice} and the computer picked ${computerChoice}. You win!`;
        } else {
            computerScore += 1;
            outcome.textContent = `You picked ${humanChoice} and the computer picked ${computerChoice}. You lose!`;
        }  

        humanScoreDisplay.textContent = humanScore;
        computerScoreDisplay.textContent = computerScore;

        if (humanScore >= 5) {
            gameover.textContent = "You win!";
        } else if (computerScore >= 5) {
            gameover.textContent = "You lose!";
        } 
    }
    
    // for (let i = 0; i < 5; i++) {
    //     const humanSelection = getHumanChoice();
    //     const computerSelection = getComputerChoice();
    //     playRound(humanSelection, computerSelection);
    // }

    // console.log(`The game is over!`)
    // console.log(`Your score is ${humanScore} and the computers score is ${computerScore}`)
    // if ( humanScore > computerScore ) {
    //     console.log("You win!") 
    // } else if (humanScore < computerScore) {
    //     console.log("You lose!")
    // } else {
    //     console.log("Its a tie!")
    // }
}

playGame()

