//Global Variables



//arrays anad vars for holding data
var wordOptions = ["chris", "steve", "pratt", "margot"];
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
    

    //testing/debugging

    console.log(selectedWord);
  
}

//main process 

startGame();



