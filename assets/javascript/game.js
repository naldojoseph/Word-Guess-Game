//Global Variables



//arrays anad vars for holding data
var wordOptions = ["inception", "cars", "psycho", "coco", "avatar", "interstellar", "dunkirk"];
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

function checkLetters(letter) {
    // check if letter exists in code at all
    var isLetterinWord = false;

    for (var i = 0; i < numBlanks; i++){
        if(selectedWord[i] == letter) {
            isLetterinWord = true;

        }
    }
    // check when in word letter exists, then populate out blankand successes aray
    if(isLetterinWord) {
        for (var i = 0; i < numBlanks; i++) {
            if(selectedWord[i] == letter) {
                blankAndSuccesses[i] = letter;
            }
        }
    }
    // letter wasnt found
    else {
        wrongLetters.push(letter);
        guessLeft--
    }

    console.log(blankAndSuccesses);
}

function roundComplete () {
    console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + "| Guesses left " + guessLeft)
     
    //update HTMLto reflect the most recent count stats
    document.getElementById("numGuesses").innerHTML = guessLeft;
    document.getElementById("wordToGuess").innerHTML = blankAndSuccesses.join(" ");
    document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");




    //check to see if user won
    if (lettersinWord.toString() == blankAndSuccesses.toString()) {
        winCount++;
        alert("Great Job! You've won $2");

        //update the win counter in the HTML
        document.getElementById("winCounter").innerHTML = winCount;

        startGame()
    }

    //if the user lost
    else if (guessLeft == 0) {
        lossCount++;
        alert("Booo! You lost! Try it again for $1?")
        document.getElementById("lossCounter").innerHTML = lossCount;

        startGame();
    }



}
//main process 


// initiate code the first time
startGame();

//register key clicks

document.onkeyup = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();


    console.log(letterGuessed);
   

  

}


