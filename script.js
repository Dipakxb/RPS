//save user and computer scores 
let computerScore = 0;
let userScore = 0;

// generate one of this three string "rock" "paper" "scissors"
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let choice;
    if(randomNumber <= 33 && randomNumber >= 0) {
        choice = "paper"
    }
    if(randomNumber <= 66 && randomNumber > 33){
        choice = "scissors"
    }
    if(randomNumber <= 99 && randomNumber > 66) {
        choice = "rock"
    }
    return choice
}

// get human choice get user choice that should be "rock" "paper" "scissors"
function getHumanChoice() {

    // could have been a sleeker design
    /* let choice = ""
    do{
        choice = (prompt(`Choose from "paper" "scissors" "rock" \nlet's play: `))
        console.log(choice)
    }
    while(choice !== "rock" && choice !== "paper" && choice !== "scissors")  */

    return prompt(`Choose from "paper" "scissors" "rock" \nlet's play: `)
}

// plays a round with user and computer choice as arguments declare a winner and increment the score of winner

function playRound(userChoice, compChoice) {
    let value = "Enter a valid Choice";
    
    if(userChoice === compChoice){
        value = "It's a Tie play again"
    }
    if(userChoice === "paper" && compChoice === "scissors"){
        value = "You Lose! scissors Beats paper"
        computerScore++
    }
    if(userChoice === "paper" && compChoice === "rock"){
        value = "You Won! paper Beats rock"
        userScore++
    }
    if(userChoice === "scissors" && compChoice === "paper"){
        value = "You Won! scissors Beats paper"
        userScore++
    }
    if(userChoice === "scissors" && compChoice === "rock"){
        value = "You Lose! rock Beats scissors"
        computerScore++
    }
    if(userChoice === "rock" && compChoice === "paper"){
        value = "You Lose! paper Beats rock"
        computerScore++
    }
    if(userChoice === "rock" && compChoice === "scissors"){
        value = "You Won! rock Beats scissors"
        userScore++
    }
    return value;
}

// play five rounds keep track of the score and declare a winner

function playGame() {
    let value = "";
    for(let x = 0; x < 5; x++){
        console.log(playRound(getHumanChoice().toLowerCase(), getComputerChoice()))
        console.log(`Computer: ${computerScore} User: ${userScore}`)
    }
    if(userScore > computerScore) {
        value = "You have won the Game!!"
    }
    else{
        value = "better Luck next Time!"
    }
    return console.log(value)
}

playGame();