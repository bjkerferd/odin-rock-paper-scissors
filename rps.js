console.log("-------------- PAGE REFRESHED --------------")



function getComputerChoice() {
    let options = ["scissors", "paper", "rock"];
    let choice = Math.floor(Math.random()*3);
    return options[choice]
}

function getHumanChoice() {
     return prompt("What move do you want to play (scissors / paper / rock)?", "rock");
} 

function playRound(humanChoice, computerChoice) {
    const wins = {
        "rock" : "scissors",
        "paper" : "rock", 
        "scissors" : "paper"
    }

    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log(`You both picked ${humanChoice}. It's a tie!`)
    } else if (wins[humanChoice] === computerChoice) {
        humanScore += 1;
        console.log(`You picked ${humanChoice} and the computer picked ${computerChoice}. You win!`)
    } else {
        computerScore += 1;
        console.log(`You picked ${humanChoice} and the computer picked ${computerChoice}. You lose!`)
    }  
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;



    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        console.log(humanChoice)
        if (humanChoice === computerChoice) {
            console.log(`You both picked ${humanChoice}. It's a tie!`)
        } else if (
            humanChoice === "rock" && computerChoice === "scissors" || 
            humanChoice === "scissors" && computerChoice === "paper" ||
            humanChoice === "paper" && computerChoice ==="rock"
        ) {
            humanScore += 1;
            console.log(`You picked ${humanChoice} and the computer picked ${computerChoice}. You win!`)
        } else {
            computerScore += 1;
            console.log(`You picked ${humanChoice} and the computer picked ${computerChoice}. You lose!`)
        }  
    }
    
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log(`The game is over!`)
    console.log(`Your score is ${humanScore} and the computers score is ${computerScore}`)
    if ( humanScore > computerScore ) {
        console.log("You win!") 
    } else if (humanScore < computerScore) {
        console.log("You lose!")
    } else {
        console.log("Its a tie!")
    }
}

playGame()

