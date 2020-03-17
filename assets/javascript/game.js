var choices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins=5;
var losses=4;
var Guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;


var computerGuess = choices [Math.floor(Math.random()*choices.length)];

var reset = function(){
    totalGuesses = 9;
    guessesLeft = 9;
    guessedLetters = [];

    updateletterToGuess();
    updateGuessesSoFar();
    updateGuessesLeft();

};

document.onkeyup=function(guess) {


  guessesLeft--;
  var userGuess;
  console.log(userGuess)

  guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();
  

while (Guesses > 0) {
for (i=0; i<choices.length; i++) {
    if(computerGuess===guess) {
        wins = wins + 1;
        return wins;
    } else {
        losses = losses + 1;
        return losses;
     }
    }
}
}

function1('c');

console.log(wins);
console.log(losses);
console.log(chances);

console.log(computerGuess);