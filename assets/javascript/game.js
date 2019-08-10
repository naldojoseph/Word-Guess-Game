//Global Variables



//arrays anad vars for holding data
var wordOptions = ["chrisevans", "stevecarrel", "cpratt", "margotrob"];
var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blankAndSuccesses = [];
var wrongLetters = [];

// game counters

var winCount = 0;
var lossCount = 0;
var guessLeft = 9;

// FUNCTIONS (reusable blocks of code that i will call uopon when needed)
// --------------------------------

function startGame () {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersinWord = selectedWord.split("");
    numBlanks = lettersinWord.length;

    // Reset
    guessLeft = 9;
    wrongLetters = [];
    blankAndSuccesses = [];

    // populate blanks and successes with right number of blanks
    for (var i = 0; i < numBlanks; i++) {
        blankAndSuccesses.push("_");
    }

    // change HTML to reflect game round condition
  
    document.getElementById("wordToGuess").innerHTML = blankAndSuccesses.join(" ");
    document.getElementById("numGuesses").innerHTML = guessLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;

    //testing/debugging

    console.log(selectedWord);
    console.log(lettersinWord);
    console.log(numBlanks);
    console.log(blankAndSuccesses);
  
}



//main process 


// initiate code the first time
startGame();

//register key clicks

document.onkeyup = function (event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    alert(letterGuessed);
}


