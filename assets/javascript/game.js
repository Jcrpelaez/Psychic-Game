// Created an array of the computer choices
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// var computerChoices = ["a"];

// Created wins/losses and guesses variables
var Wins = "0";
var Losses = "0";
var guessesLeft = "0";
var userGuesses = "0";

// Create variable that refrence the html
var directionsText = document.getElementById("directions-text");
var userGuesses = document.getElementById("userGuesses-text");
var winsText = document.getElementById("wins-text");

// Computer randomly chooses A-z
var computerChoices = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerChoices)