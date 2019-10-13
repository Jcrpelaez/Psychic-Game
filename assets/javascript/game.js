// Created variable columns
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userGuess = [];

// Created array for computers choices a-z
var computersChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]

// created variable to clear the game after a win or loss
var clearGame = function() {
  userGuess = []
};

// created variable for the computer to choose a random letter
var randomchoice = computersChoice[Math.floor(Math.random() * computersChoice.length)];
console.log(randomchoice)


document.onkeyup = function(event) {
  console.log("userGuess    " + keypressed);
   var keypressed = event.key;

   if (computersChoice === keypressed){
     win++;
     guessesLeft = 9;
     clearGame();
   } alert("You Win!")

   if (computersChoice !== keypressed) {
     guessesLeft--;
     console.log('userGuess    ', userGuess);
     userGuess.push(userGuess)
   }
   if (guessesLeft < 1){
     alert("You lose!");
   }
     

   


  














};



