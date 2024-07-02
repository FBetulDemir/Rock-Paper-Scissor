// create a list with 3 options
//compare options and incriment points
//compare player choice with computer choice
//startGame() function
//function to give limited turns to player
//show result

const computerScore = document.querySelector('.computer_score');
const playerScore = document.querySelector('.player_score');
let computerChoice = document.querySelector(".computer_choice");
let playerChoice = document.querySelector(".player_choice");
let resultDisplay = document.getElementById("resultDisplay");
let turnsLeft = document.querySelector('.turn');
const optionsDiv = document.querySelector(".options");

let turns = 10;
let playerButton;

const options = ["rock", "paper", "scissor"];

let player = 0;
let computer = 0;


function startGame(playerButton){
    let randomNumber = Math.floor(Math.random() * options.length);
    computerSelection = options[randomNumber];
    computerChoice.innerText = "Computer's choice: " + computerSelection;
    playerChoice.innerText = `Player choice : ${playerButton}`;

    function compareChoice (){
        if (playerButton == options[randomNumber]){
            resultDisplay.innerText= "It is a tie! No winner in this turn.";
        }else if(
            (playerButton == "rock" && computerSelection == "scissor") || 
            (playerButton == "paper" && computerSelection == "rock") || 
            (playerButton == "scissor" && computerSelection == "paper") 
        ){
                player ++;
                playerScore.innerText = `Player : ${player}`;
                resultDisplay.innerText= "Player wins this turn and receives 1 point";
        }else {
            computer ++;
            computerScore.innerText = `Computer : ${computer}`;
            resultDisplay.innerText= "Computer wins this turn and receives 1 point";
        };
    };

    compareChoice();

    turns --;
    turnsLeft.innerText= `You have ${turns} turns left.`;
    if (turns === 0){
        resultDisplay.innerText = player > computer ? "You won!" : "You lost!";
        if (player === computer){
            resultDisplay.innerText = "No one wins!";
        }
        optionsDiv.style.display= "none";
        turnsLeft.style.display= "none";
        document.querySelector(".choice-display").style.display= "none";
        resultDisplay.style.color = "red";
    };
    
};






