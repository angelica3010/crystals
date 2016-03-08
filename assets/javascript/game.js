//console.log("here") use this as a double check to make sure your html works




// This is a guessing game using numbers, similar to the game hangman, but instead of letters the player will guess with numbers. There will be four crystals displayed as buttons on the page.



// The player will be shown a random number at the start of the game.
	//This function returns a random value from 19 - 120 

	var randomDisplayValue = Math.floor(Math.random() * (120 - 19 + 1))+ 19;
	
//make variables for the random values 1-12 for the crystal images
	var randomCrystalValuered = Math.floor(Math.random() * 12)+1;
	var randomCrystalValueblue = Math.floor(Math.random() * 12)+1;
	var randomCrystalValueyellow = Math.floor(Math.random() * 12)+1;
	var randomCrystalValuegreen = Math.floor(Math.random() * 12)+1
	
//set up the variables for the total score, wins and losses. Set up the total score, wins and losses to 0. For the number below you already made 
//reference to the variables above
//for the crystals you are making an array where you have classifications for
//the name, image ( for the image you added the item location) and number ( you set up the random variable above)

	var totalscore=0
	var wins = 0;
	var losses = 0;
	var crystals = [{
                name: "redcrystal",
                image: "assets/images/red.png",
                number:randomCrystalValuered
            },
		{
                name: "bluecrystal",
                image: "assets/images/blue.png",
                number:randomCrystalValueblue
            },
		
              {  name: "yellowcrystal",
                image: "assets/images/yellow.png",
                number:randomCrystalValueyellow
            },
 {
                name: "greencrystal",
                image: "assets/images/green.png",
                number:randomCrystalValuegreen
            },


	]

//make a function to restart the game. 
//??Even though you made the variables above, you still have to 
//make the same formulas below to make the functoin work??

function restart () {
	totalscore=0
	randomDisplayValue = Math.floor(Math.random() * (120 - 19 + 1))+ 19;
	randomCrystalValuered = Math.floor(Math.random() * 12)+1;
	randomCrystalValueblue = Math.floor(Math.random() * 12)+1;
	randomCrystalValueyellow = Math.floor(Math.random() * 12)+1;
	randomCrystalValuegreen = Math.floor(Math.random() * 12)+1;

    $('#targetnumber').text(randomDisplayValue);
	$('#totalscore').text(totalscore)


}

//display the Random Target Number. Is this row necessary 
//becuase you have it in the function above?

    $('#targetnumber').text(randomDisplayValue);

//make a for loop to append the image of the crystal each
//time the game is played. Set up attributes for the data
//to make sure it is assigned and stored to an image

$('#number').text(randomDisplayValue);
    for (var i=0; i<4; i++){      
    	var imageCrystal = $('<img>');
    	console.log(i)

    	imageCrystal.attr('data-num',i);
    	imageCrystal.attr('alt', 'crystals');
    	imageCrystal.addClass('imageCrystal');
    	imageCrystal.attr('src', crystals[i].image) 

    	$('#crystals').append(imageCrystal);
    }


//	counter = counter + parseInt($(this).data-num);
//alert('hello') make an alert on console.log to test the  click function. 
//Console log is seeing what is behind the scenes, console log tests the variable

            
$('.imageCrystal').on('click', function(){


//?? I'm getting lost here. Can you please exoplain this to me????
//console.log(crystals[positionNumber].number)
//to test to see what randomnumber in the crystal
//this points to whatever you are clicking on. 
var positionNumber = $(this).data('num')


//make the total score based on the crystal position number. This adds up the
//numbers the crystals are assigned to based on the random function
totalscore = totalscore + crystals[positionNumber].number 

$('#totalscore').text(totalscore)

//make the else and else if statemenets. The win if section takes into
//cosnsideratoin

if (randomDisplayValue == totalscore){

	wins = wins+1

	$('#wins').text(wins)

	restart()


}
else if (totalscore > randomDisplayValue){
	losses=losses+1

	$('#losses').text(losses)

	restart()

}



//$ is saying to find whats in teh parenhethis which is your totalscore and the .text is to display the total score

//if you are trying to access a specific an itmem in array, and you need to find the index of hte positon

//	 $('#yourNumber').text(counter);
  //    if (counter == randomDisplayValue){
    //    alert('You won!!!!');
      //}else if( counter > randomDisplayValue){
        //alert('You lost!');
     // }
  })

//Create Random Function that is going to make random numbers and the reset the game







// When the player clicks on a crystal it will add a specific amount of points to the player's total score.
	//How does user collect input? How is the click recognized?
		//We need to set a click event (jQuery event listener)
	//What can we use to generate a random hidden value for each crystal?
		//This function returns a random value from 1 - 12 for each crystal
	
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


//variable  can be a function, object or array. This goes up looking for objects (ex: window, or iif in an ohject or click evenet)
//varibale is 







