//Define global variables

var computerGuess = ["r", "p", "s"];
var randomGuess =
  computerGuess[Math.floor(Math.random() * computerGuess.length)];
var userGuess = ["r", "p", "s"];
var wins = 0;
var losses = 0;
var ties = 0;

//Functions

//Start Game

function startGame() {
  document.onkeyup = function(event) {
    userGuess = event.key.toLowerCase();
    var randomGuess =
      computerGuess[Math.floor(Math.random() * computerGuess.length)];


    //Check wins
    if (userGuess === "r" || userGuess === "p" || userGuess === "s") {
      if (userGuess === "r" && randomGuess === "p") {
        alert("You lose!");
        losses++;
      } else if (userGuess === "r" && randomGuess === "s") {
        alert("You win!");
        wins++;
      } else if (userGuess === "p" && randomGuess === "r") {
        alert("You Win!");
        wins++;
      } else if (userGuess === "p" && randomGuess === "s") {
        alert("You lost!");
        losses++;
      } else if (userGuess === "s" && randomGuess === "p") {
        alert("You win!");
        wins++;
      } else if ((userGuess === "s") && (randomGuess === "r")) {
        alert("You lost!");
        losses++;
      } else if (userGuess === randomGuess) {
        alert("You tie!");
        ties++;
      }
      
      var html =
      "<p> You chose: " + userGuess + "</p>" +
      "<p>The computer chose: " + randomGuess + "</p>" +
      "<p>Wins: " + wins + "</p>" +
      "<p>Losses: " + losses + "</p>" +
      "<p>Ties: " + ties + "</p>";
      document.querySelector("#scoreboard").innerHTML = html;
    } //end of making sure rps
  };
} //endofstartgame

startGame();
