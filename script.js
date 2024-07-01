// create a list with 3 options
//compare options and incriment points
//compare player choice with computer choice
//startGame() function
//function to give limited turns to player
//show result

let computerScore = document.querySelector('computer_score');
let playerScore = document.querySelector('player_score');
let computerChoice = document.querySelector(".computer_choice");
let playerChoice;
let turns = 10;

let options = ["rock", "paper", "scissor"];

playerScore = 0;
computerScore = 0;


document.getElementById('show-rock').addEventListener('click', function() {
    showButton('rock');
});

document.getElementById('show-paper').addEventListener('click', function() {
    showButton('paper');
});

document.getElementById('show-scissor').addEventListener('click', function() {
    showButton('scissor');
});

function showButton(buttonId) {
    // Hide all buttons
    document.getElementById('rock').style.display = 'none';
    document.getElementById('paper').style.display = 'none';
    document.getElementById('scissor').style.display = 'none';

    document.getElementById('show-rock').style.display = 'none';
    document.getElementById('show-paper').style.display = 'none';
    document.getElementById('show-scissor').style.display = 'none';

    // Show the selected button
    playerChoice = document.getElementById(buttonId).style.display = 'block';
    turns --;
    
}


function getComputerChoice (){
    let randomNumber = Math.floor(Math.random() * options.length);
    console.log(options[randomNumber]);
    computerChoice.innerText = "Computer's choice: " + options[randomNumber];
    return;
};



// function getPlayerChoice(){
    

// };

function compareChoice (){
    let winner;
    if((playerChoice == "rock" && computerChoice == "scissor") || (playerChoice == "paper" && computerChoice == "rock") || (playerChoice == "scissor" && computerChoice == "paper") ){
        winner = playerChoice;
        playerScore ++;
    }else if (playerChoice == computerChoice){
        return;
    }else{
        winner = computerChoice;
        computerScore ++;
    }
}

compareChoice();

console.log (playerScore);
console.log (computerScore);
console.log (turns);
