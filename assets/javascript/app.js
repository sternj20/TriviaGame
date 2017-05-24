var rightChoice;
var newQuestion;
var timerInterval;
var timeRemaining;

//array of objects to store my trivia information
var trivia = [
	{
	question: 'Who created Javascript?',
	answers: ['Bill Gates', 'Jacky "Javascript" Heralda', 'Brendan Eich', 'Marc Andreessen'],
	answerInfo: 'Brendan Eich',
	image: 'assets/images/eich.jpg'
	},
	{
	question: 'Who created JQuery?',
	answers: ['Brendan Eich', 'Christian Vuerrings', 'James Gosling', 'John Resig'],
	answerInfo: 'John Resig',
	image: 'assets/images/resig.jpg'
	},
	{
	question: 'Who created Bootstrap?',
	answers: ['Ren and Stimpy', 'Kevin Systrom and Mike Krieger', 'Mark Otto and Jacob Thornton', 'Steve Jobs and Steve Wozniak'],
	answerInfo: 'Mark Otto and Jacob Thornton',
	image: 'assets/images/bootstrap.jpg'
	},
	{
	question: 'Where was the first computer built?',
	answers: ['Mountain View, CA', 'Room 809 in Uc Berkeley Extension Building on Spear Street', 'University of Pennsylvania', 'Stanford'],
	answerInfo: 'University of Pennsylvania',
	image: 'assets/images/upenn.gif'
	},
	{
	question: 'Who created CSS?',
	answers: ['Haakon Wium Lie', 'Jordan Walke', 'Bjarne Stroustrup', 'Jayson Phillips'],
	answerInfo: 'Haakon Wium Lie',
	image: 'assets/images/hakon.jpg'
	},
	{
	question: 'Who created HTML?',
	answers: ['Yukihiro Matsumoto', 'Tim Berners-Lee', 'Guido van Rossum', 'Peter Thiel'],
	answerInfo: 'Tim Berners-Lee',
	image: 'assets/images/berners.jpg'
	}
];

//add a question
function addQuestion() {
	$(".triviaContent").empty();
	//pick a random object by assigning an array with a index of a random selection to a new variable 
	newQuestion = trivia[Math.round(Math.random()*(trivia.length-1))];
	//create a div for the question
	var question = $("<header>");
	//add our question to the div and append it to trivia content section
	question.text(newQuestion.question);
	$(".triviaContent").append(question);
	//create a new for loop to iterate through the answers array that is inside of our object assigned to variable newQuestion
	for (var i = 0; i <newQuestion.answers.length; i++){
		//for each index in answers array create a new div
		var choice = $("<div>");
		//add text to each div with each answer in the answers array
		choice.html("<button>" +newQuestion.answers[i] + "</button>");
		choice.addClass('answers');
		//append it to trivia content section
		$(".triviaContent").append(choice);
		$(".triviaContent").show();
		console.log(newQuestion.answers[i]);
	}
}

//reset the game
function reset(){
	$(".winnerSection").text('');
	timeRemaining = 30;
	$(".timeNum").text(timeRemaining);
	$(".startSection").hide();
	$(".triviaSection").show();
	clearInterval(timerInterval);
	setTimer();
	addQuestion();
}

//set the trivia timer
function setTimer(){
	timerInterval = setInterval(count, 1000);
	$(".timer").show();	
}

//count function
function count() {
	if (timeRemaining > 0){
		timeRemaining--;
		$(".timeNum").text(timeRemaining);
	} else {
		console.log ('here we go');
		clearInterval(timerInterval);
	}
}

$(document).ready(function() {
	//start button
	$("#start").on('click', function() {
		reset();
	});

	//event handler for when user clicks on answers
	$(document).on('click', '.answers', function(event) {
		var img = $("<img>");
			img.attr("src", newQuestion.image);
			$(".winnerSection").append(img);
			
		//if user picks right answer screen says congratulations, then displays next question
		if(event.currentTarget.innerText === newQuestion.answerInfo){
			$(".winnerSection").append('<p>Congratulations, you chose correctly!</p>');
			$(".timer").hide();	
			//the image specific to current object being guessed is created and shown in dom
			$(".triviaContent").hide();
			} else{
				
				$(".winnerSection").append('<p>You guessed wrong, try again.</p>');
				$(".timer").hide();
			}
		setTimeout(reset,3000);
	});
});


//what i still need to do

//once array is chosen and appended to the dom, remove it from the trivia array
//when trivia array length is 0, game ends 
		//wins and losses are display and game starts over 
	

//BUGS//

//can continue to click on different answers during the stage where wrong answer is guessed and correct answer is being shown