// Created an array of the computer choices and user guesses
// var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// var userGuesses =     ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var userGuesses = ["a"];
var computerChoices = ["a"];

// Created wins/losses and guesses variables
var Wins = 0;
// var Loss = 0;
// var guessesLeft = 9;
// var userGuesses = event;

// Create variable that refrence the html
var directionsText = document.getElementById("directions-text");
// var userGuesses = document.getElementById("userGuesses-text");
var winsText = document.getElementById("wins-text");
// var guessesLeft = document.getElementById("Guessesleft-text");

// Need to create a key event function

// Determines which key is pressed

// Computer randomly chooses A-z
var computerChoices =
  computerChoices[Math.floor(Math.random() * computerChoices.length)];
{
  // I need to create an array that loops until the user has run out of guesses while also adding to the wins and losses colum
  for (i = 0; i < 10; i++) {
    if (userGuesses === computerChoices) {
      wins++;
    } else userGuesses !== computerChoices;
    loss++;
  }
}
