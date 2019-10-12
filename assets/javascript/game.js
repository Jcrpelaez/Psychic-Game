// Created array for computer Choices
var compChoices = ("a")
console.log(compChoices)
// Created variables to hold number of wins, losses, guesses, and guesses left
var wins = 0;
var guessesLeft = 9;
var userGuess =[];




var directionsText = document.getElementById("directions-text");
var userChoices = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");

var clearUserGuesses = function() {
  userGuess = []
}


var compChoices =
  compChoices[Math.floor(Math.random() * compChoices.length)];
console.log(compChoices)
// when User presses key it launches a function to execute process
document.onkeyup = function (event) {

  //when user preses letter key it is stored as var userGuess
  var userGuess = event.key;
  console.log("userGuess      " + userGuess);

 
  if (userGuess === compChoices) {
    wins++;
    guessesLeft = 9;
    clearUserGuesses()
    } alert("You Win!")


  if (userGuess !== compChoices) {
    guessesLeft--;
    console.log('userGuess ', userGuess );
    userGuess.push(userGuesses);

  if (guessesLeft < 1) {
      alert("You lose!");
      guessesLeft = 9;
      userGuess = [];
      losses++;
    }
  }
  // Rewrites the html with updated values

} 



