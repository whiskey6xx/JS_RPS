//RPS

//variables
let computerChoice;
let userChoice;
let result;
let outcome1 = "Draw!";
let outcome2 = "You win the round!"; 
let outcome3 = "Computer wins the round!";
let playerScore = 0;
let computerScore = 0;
let choices = document.querySelectorAll('.choice');
let displayedResults = document.getElementById('result');
console.log(displayedResults)

//player choice
function player_choice() {
  userChoice = prompt("Make a Choice: Rock, Paper, Scissors");
  userChoice = userChoice.toLowerCase();
  console.log("user choice: " + userChoice);
}   

//computer choice
function computer_choice() {
  computerChoice = Math.floor(Math.random() * 3);
  console.log("int of computer choice: " + computerChoice);
  if (computerChoice == 0) {
    computerChoice = "rock";
  } else if (computerChoice == 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  console.log("Computer choice " + computerChoice);
}

//Compares the two
function rps(userSelection, computerSelection) {
  if (userSelection == "rock" && computerSelection == "rock") {
    result = outcome1;
    console.log(result);
  } else if (userSelection == "rock" && computerSelection == "paper") {
    result = outcome3;
    console.log(result);
    computerScore += 1;
  } else if (userSelection == "rock" && computerSelection == "scissors") {
    result = outcome2;
    console.log(result);
    playerScore += 1;
  } else if (userSelection == "paper" && computerSelection == "rock") {
    result = outcome2;
    console.log(result);
    playerScore += 1;
  } else if (userSelection == "paper" && computerSelection == "paper") {
    result = outcome1;
    console.log(result);
  } else if (userSelection == "paper" && computerSelection == "scissors") {
    result = outcome3;
    console.log(result);
    computerScore += 1;
  } else if (userSelection == "scissors" && computerSelection == "rock") {
    result = outcome3;
    console.log(result);
    computerScore += 1;
  } else if (userSelection == "scissors" && computerSelection == "paper") {
    result = outcome2;
    console.log(result);
    playerScore += 1;
  } else if (userSelection == "scissors" && computerSelection == "scissors") {
    result = outcome1;
    console.log(result);
  } else {
    alert("Invalid choice");
  }
  displayedResults.innerHTML = "You picked " + userSelection + ". The Computer picked " + computerSelection + ". " +  result + " | Player Score: " + playerScore + " Computer Score: " + computerScore;
  console.log("Player Score: " + playerScore + " Computer Score: " + computerScore)
  if (playerScore >= 5) {
    displayedResults.innerHTML = "Game Over! The User wins!"
  } else if (computerScore >= 5) {
    displayedResults.innerHTML = "Game Over! The Computer wins!"
  }
}

/*
function game() {
  for (i = 0; i < 4; i++) {
    //Prompts the user for choice
    player_choice();
    //Generates the computers choice
    computer_choice();
    rps(userChoice, computerChoice);
  }

  alert("Player Score: " + playerScore + " Computer Score: " + computerScore)
  if (playerScore > computerScore) {
    alert("You win the game!")
  } else if (computerScore > playerScore) {
    alert("The Computer wins the game!")
  } else {
    alert("The Game is a draw!")
  }
}
*/



choices.forEach(choice => choice.addEventListener("click", () => {
  computer_choice();
  userChoice = choice.id;
  rps(userChoice, computerChoice);
}));