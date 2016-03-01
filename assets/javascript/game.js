// This is a guessing game using numbers, similar to the game hangman, but instead of letters the player will guess with numbers. There will be four crystals displayed as buttons on the page.



// The player will be shown a random number at the start of the game.
	//This function returns a random value from 19 - 120 
	var randomDisplayValue = (Math.floor(Math.random() * (120 - 19 + 1))+ 19);

// When the player clicks on a crystal it will add a specific amount of points to the player's total score.
	//How does user collect input? How is the click recognized?
		//We need to set a click event (jQuery event listener)
	//What can we use to generate a random hidden value for each crystal?
		//This function returns a random value from 1 - 12 for each crystal
		var randomCrystalValue = Math.floor(Math.random() * 12)
		//Find a way to collect SUM of crystal values when clicked
		//Code goes here	

// The player wins the game if their total score matches the random number and the player loses the game if their total score goes above the random number.

// When the game is restarted, the player will be shown a new random number, all the crystals will now have 4 different hidden values, and the player's total score is reset to 0.

// If the player successfully matches their total score to the random number they get 1 win, if the player's total score is above the random number the player get 1 loss, either way the game restarts.
	//Win achieved if randomDisplayValue = Red Crytal + Blue Crystal + Green Crystal + Yellow Crystal
		//Code goes here

// The amount of points each crystal adds is not shown to the player, but their total score is displayed and updated after each crystal is clicked.

// The number of games won and lost will be displayed.
	//I need to get a counter to track wins and losses
		//code goes here

var chosennumbers  = ""; // solution will be held here.
var lettersInChosenWord = []; // This will break the solution into individual letters to be stored in array


var wrongGuesses = []; // Holds all of the wrong guesses


var wins = 0;
var losses = 0;
var guessesLeft = 9;
var computerGuess = listOfLetters[Math.floor(Math.random() * listOfLetters.length)];


if (userGuess == computerGuess){
        wins++;
        document.querySelector('#wins').innerHTML = "Wins: " + wins;
    }else{
        losses++;
        document.querySelector('#losses').innerHTML = "Losses: " + losses;

