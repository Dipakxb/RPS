//save user and computer scores 
let computerScore = 0;
let userScore = 0;
let numOfRounds = 0;
let choiceAry = ["rock", "paper", "scissors"];
let ScoreAry = ["score", "current", "result"];
let spanAry = ["computerSpan", "userSpan"];

// generate one of this three string "rock" "paper" "scissors"
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let choice;
    if(randomNumber <= 33 && randomNumber >= 0) {
        choice = choiceAry[0];
    }
    if(randomNumber <= 66 && randomNumber > 33){
        choice = choiceAry[1];
    }
    if(randomNumber <= 99 && randomNumber > 66) {
        choice = choiceAry[2];
    }
    return choice;
}

// get human choice get user choice that should be "rock" "paper" "scissors"
// <Removed>

// plays a round with user and computer choice as arguments declare a winner and increment the score of winner
function playRound(userChoice, compChoice) {
    let value = "Enter a valid Choice";
    
    if(userChoice === compChoice){
        value = "It's a Tie play again";
    }
    if(userChoice === "rock" && compChoice === "paper"){
        value = "You Lose! paper Beats rock";
        computerScore++;
    }
    if(userChoice === "rock" && compChoice === "scissors"){
        value = "You Won! rock Beats scissors";
        userScore++;
    }
    if(userChoice === "paper" && compChoice === "scissors"){
        value = "You Lose! scissors Beats paper";
        computerScore++;
    }
    if(userChoice === "paper" && compChoice === "rock"){
        value = "You Won! paper Beats rock";
        userScore++;
    }
    if(userChoice === "scissors" && compChoice === "paper"){
        value = "You Won! scissors Beats paper";
        userScore++;
    }
    if(userChoice === "scissors" && compChoice === "rock"){
        value = "You Lose! rock Beats scissors";
        computerScore++;
    }
    return value;
}

const ButtonsDiv = document.querySelector('.buttons');
const resultDiv = document.querySelector('.result-div');

function setAttribute(e, attributes){
    //c = class
    for(let [c, attribute] of Object.entries(attributes)) {
        e.setAttribute(c, attribute);
    }
}

function initiateButtons() {
    for(let choice of choiceAry){
        const attributes = {
            class: choice,
            src: `images/${choice}.png`,
            alt: `${choice} image`,
            width: "100px"
        };
        const button = document.createElement('img');
        setAttribute(button, attributes);
        ButtonsDiv.appendChild(button);
    }
}

function initiateScore(){
    for(let score of ScoreAry){
        const para = document.createElement('p');
        resultDiv.appendChild(para);
        para.className = score;
    }
    for(let span of spanAry) {
        const element = document.createElement('span');
        document.querySelector('.score').appendChild(element);
        element.className = span;
    }
}

// play five rounds keep track of the score and declare a winner
function playGame(humanChoice, numOfRounds) {
    let value = "";
    document.querySelector(".current").innerText = playRound(humanChoice, getComputerChoice());
    document.querySelector(".computerSpan").innerText = `Computer: ${computerScore}`;
    document.querySelector(".userSpan").innerText = `User: ${userScore}`;

    
    if(numOfRounds == 5) {
        if( userScore > computerScore){
            value = "WE GOOD";
        } else {
            value = "YOU DIED";
            document.querySelector('.result').classList.toggle('red');
        }
        resetGame();
    }

    document.querySelector('.result').innerText = value;
}

//Reset the game
function resetGame() {
    numOfRounds = 0;
    userScore = 0;
    computerScore = 0;
    ButtonsDiv.innerHTML = '';
    resultDiv.removeChild(document.querySelector('.score'));
    resultDiv.removeChild(document.querySelector('.current'));

    const attributes = {
        class: 'play-again-btn',
        src: './images/Play-again.png',
        alt: 'Play Again Button'
    };
    const playAgainBtn = document.createElement('img');
    ButtonsDiv.appendChild(playAgainBtn);
    setAttribute(playAgainBtn, attributes);
    playAgainBtn.innerText = 'Play Again?';
}

function playAgain() {
    resultDiv.innerHTML = '';
    initiateButtons();
    initiateScore();
    ButtonsDiv.removeChild(document.querySelector('.play-again-btn'));
}

ButtonsDiv.addEventListener('click', (e)=> {
    const selection = e.target.getAttribute('class');
    if(selection && choiceAry.includes(selection)){
        numOfRounds++;
        playGame(selection, numOfRounds);
    }
    if(selection == 'play-again-btn'){
        playAgain();
    }
})

initiateButtons();
initiateScore();