var randomDisplayValue = Math.floor(Math.random() * (120 - 19 + 1))+ 19;
var randomCrystalValuered = Math.floor(Math.random() * 12)+1;
var randomCrystalValueblue = Math.floor(Math.random() * 12)+1;
var randomCrystalValueyellow = Math.floor(Math.random() * 12)+1;
var randomCrystalValuegreen = Math.floor(Math.random() * 12)+1;
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
	];

function restart () {
	totalscore=0
	randomDisplayValue = Math.floor(Math.random() * (120 - 19 + 1))+ 19;
	randomCrystalValuered = Math.floor(Math.random() * 12)+1;
	randomCrystalValueblue = Math.floor(Math.random() * 12)+1;
	randomCrystalValueyellow = Math.floor(Math.random() * 12)+1;
	randomCrystalValuegreen = Math.floor(Math.random() * 12)+1;

    $('#targetnumber').text(randomDisplayValue);
	$('#totalscore').text(totalscore);

};

$('#number').text(randomDisplayValue);
    for (var i=0; i<4; i++){      
    	var imageCrystal = $('<img>');
    	console.log(i)

    	imageCrystal.attr('data-num',i);
    	imageCrystal.attr('alt', 'crystals');
    	imageCrystal.addClass('imageCrystal');
    	imageCrystal.attr('src', crystals[i].image); 
    	$('#crystals').append(imageCrystal);
};
 
$('.imageCrystal').on('click', function(){
var positionNumber = $(this).data('num')
totalscore = totalscore + crystals[positionNumber].number 
$('#totalscore').text(totalscore)

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

	$('#yourNumber').text(counter);
    if (counter == randomDisplayValue){
       alert('You won!!!!');
     }else if( counter > randomDisplayValue){
        alert('You lost!');
     }
  })









