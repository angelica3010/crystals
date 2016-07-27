
var randomDisplayValue = Math.floor(Math.random() * (120 - 19 + 1))+ 19;
	
var randomCrystalValuered = Math.floor(Math.random() * 12)+1;
var randomCrystalValueblue = Math.floor(Math.random() * 12)+1;
var randomCrystalValueyellow = Math.floor(Math.random() * 12)+1;
var randomCrystalValuegreen = Math.floor(Math.random() * 12)+1
	

var randomDisplayValue = 0;
var currentScore = 0;
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
		
    {  
    name: "yellowcrystal",
	image: "assets/images/yellow.png",
    number:randomCrystalValueyellow
            },
 {
                name: "greencrystal",
                image: "assets/images/green.png",
                number:randomCrystalValuegreen
            },


	]



function restart () {
	currentScore = 0;
	randomDisplayValue = Math.floor(Math.random() * (120 - 19 + 1))+ 19;
	randomCrystalValuered = Math.floor(Math.random() * 12)+1;
	randomCrystalValueblue = Math.floor(Math.random() * 12)+1;
	randomCrystalValueyellow = Math.floor(Math.random() * 12)+1;
	randomCrystalValuegreen = Math.floor(Math.random() * 12)+1;

//$ means Jquery. For example, when you pay for something you have to wrap it in cash and pay for some
//use Jquery to selec items from your html file.
//.text() method returns the value of text --ex: you have a sandwich and this returns the inside of hte sandwich,
//which is the meat. You created a random value and .text sets up the elemenet set the text, you are selecting 
//a target,which is a tag and an id in this situaton
//# is id, and . is class
//hte point is the function you want the computer to restart to play differnet sessions 


    $('#randomDisplayValue').html(randomDisplayValue);
	$('#yourScore').html(currentScore);


	console.log("Target Score: " + randomDisplayValue);


}


$('#number').html(crystals);
    for (var i=0; i<4; i++){      
    	var imageCrystal = $('<img>');
    	console.log(i)

    	imageCrystal.attr('data-num',i);
    	imageCrystal.attr('alt', 'crystals');
    	imageCrystal.addClass('imageCrystal');
    	imageCrystal.attr('src', crystals[i].image) 
    	$('#crystals').append(imageCrystal);
   
   console.log("This is hte image crystal" +image)

    }
  
// $('.imageCrystal').on('click', function(){

var positionNumber = $(this).data('num');

console.log( "This is the positon Number" + positionNumber)

// yourScore = yourScore + crystals[positionNumber].number; 

// $('#yourScore').html(yourScore);

// })

// if (randomDisplayValue == yourScore){

// 	wins = wins+1

// 	$('#wins').html(wins)

// 	restart();


// }
// else if (yourScore > randomDisplayValue){
// 	losses=losses+1

// 	$('#losses').html(losses)

// 	restart();

// }
// // })


// //$ is saying to find whats in teh parenhethis which is your yourScore and the .text is to display the total score

// //if you are trying to access a specific an itmem in array, and you need to find the index of hte positon

// 	 $('#yourScore').html(yourScore);
//      if (yourScore == randomDisplayValue){
//        alert('You won!!!!');
//       }else if( yourScore > randomDisplayValue){
//         alert('You lost!');
//      }
  

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







