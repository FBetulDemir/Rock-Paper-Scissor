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

// optionsDiv.addEventListener("click", (event) => {
//     if (event.target.classList.contains("option")){
//         startGame(event.target.id);
//     }
// });

function startGame(playerButton){
    let randomNumber = Math.floor(Math.random() * options.length);
    computerSelection = options[randomNumber];
    computerChoice.innerText = "Computer's choice: " + computerSelection;
    playerChoice.innerText = `Player choice : ${playerButton}`;

    function compareChoice (){
        if (playerButton == options[randomNumber]){
            resultDisplay.innerText= "It is a tie! No winner.";
        }else if(
            (playerButton == "rock" && computerSelection == "scissor") || 
            (playerButton == "paper" && computerSelection == "rock") || 
            (playerButton == "scissor" && computerSelection == "paper") 
        ){
                player ++;
                playerScore.innerText = `Player : ${player}`;
        }else {
            computer ++;
            computerScore.innerText = `Computer : ${computer}`;
        };
    };

    compareChoice();

    turns --;
    turnsLeft.innerText= `You have ${turns} turns left.`;
    if (turns === 0){
        resultDisplay.innerText = player > computer ? "You won!" : "You lost!";
        optionsDiv.style.display= "none";
        // optionsDiv.removeEventListener("click", startGame);
    };
    
};






