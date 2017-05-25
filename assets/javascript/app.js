var rightChoice;
var newQuestion;
var timerInterval;
var timeRemaining;
var wins;
var losses;

//array of objects to store my trivia information
var trivia = [];

function createTrivia(){
	trivia = [
	{
		question: 'Who created Javascript?',
		answers: ['Bill Gates', 'Jacky "Javascript" Heralda', 'Brendan Eich', 'Marc Andreessen'],
		answerInfo: 'Brendan Eich',
		image: 'assets/images/eich.jpg',
		info: "Brendan Eich (/ˈaɪk/; born July 4, 1961) is an American technologist and creator of the JavaScript programming language. He co-founded the Mozilla project, the Mozilla Foundation and the Mozilla Corporation, and served as the Mozilla Corporation's chief technical officer and briefly its chief executive officer."
		},
		{
		question: 'Who created JQuery?',
		answers: ['Brendan Eich', 'Christian Vuerrings', 'James Gosling', 'John Resig'],
		answerInfo: 'John Resig',
		image: 'assets/images/resig.jpg',
		info: "John Resig (born May 8, 1984) is an American software engineer and entrepreneur, best known as the creator and lead developer of the jQuery JavaScript library."
		},
		{
		question: 'Who created Bootstrap?',
		answers: ['Ren and Stimpy', 'Kevin Systrom and Mike Krieger', 'Mark Otto and Jacob Thornton', 'Steve Jobs and Steve Wozniak'],
		answerInfo: 'Mark Otto and Jacob Thornton',
		image: 'assets/images/bootstrap.jpg',
		info: 'Mark Otto - Director of Design at GitHub. Creator of Bootstrap. Previously at Twitter. Huge nerd. Jacob Thornton - computer loser. bumpers cofounder'
		},
		{
		question: 'Where was the first computer built?',
		answers: ['Mountain View, CA', 'Room 809 in Uc Berkeley Extension Building on Spear Street', 'University of Pennsylvania', 'Stanford'],
		answerInfo: 'University of Pennsylvania',
		image: 'assets/images/upenn.gif',
		info: 'The ENIAC was invented by J. Presper Eckert and John Mauchly at the University of Pennsylvania and began construction in 1943 and was not completed until 1946. It occupied about 1,800 square feet and used about 18,000 vacuum tubes, weighing almost 50 tons.'
		},
		{
		question: 'Who created CSS?',
		answers: ['Haakon Wium Lie', 'Jordan Walke', 'Bjarne Stroustrup', 'Jayson Phillips'],
		answerInfo: 'Haakon Wium Lie',
		image: 'assets/images/hakon.jpg',
		info: 'Haakon Wium Lie (born 1965) is a Norwegian web pioneer, a standards activist, a politician for The Pirate Party of Norway, and, as of 2016, the Chief Technology Officer of Opera Software.'
		},
		{
		question: 'Who created HTML?',
		answers: ['Yukihiro Matsumoto', 'Tim Berners-Lee', 'Guido van Rossum', 'Peter Thiel'],
		answerInfo: 'Tim Berners-Lee',
		image: 'assets/images/berners.jpg',
		info: 'Sir Timothy John Berners-Lee OM KBE FRS FREng FRSA FBCS, also known as TimBL, is an English computer scientist, best known as the inventor of the World Wide Web'
	}
	];
}

//add a question
function addQuestion() {
	if(trivia.length !== 0){
		var random = Math.round(Math.random()*(trivia.length-1));
		$(".triviaContent").empty();
		//pick a random object by assigning an array with a index of a random selection to a new variable 
		newQuestion = trivia.splice(random, 1);
		//create a div for the question
		var question = $("<header>");
		//add our question to the div and append it to trivia content section
		question.text(newQuestion[0].question);
		$(".triviaContent").append(question);
		//create a new for loop to iterate through the answers array that is inside of our object assigned to variable newQuestion
		for (var i = 0; i <newQuestion[0].answers.length; i++){
			//for each index in answers array create a new div
			var choice = $("<div>");
			//add text to each div with each answer in the answers array
			choice.html("<button>" +newQuestion[0].answers[i] + "</button>");
			choice.addClass('answers');
			//append it to trivia content section
			$(".triviaContent").append(choice);
			$(".triviaContent").show();
			console.log(newQuestion);
		}
	} else {
		$(".triviaSection").hide();
		var count = $("<div>");
		count.html('You won ' + wins + ' times. You lost ' + losses + ' times');
		$(".lose").show().append(count);
		createTrivia();
		
	}
}

//reset the game
function reset(){
	timeRemaining = 30;
	$(".lose").hide();
	$(".winnerSection").text('');
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
	//when time remaining is at 0, restart game
	} else {
		reset();
	}
}

$(document).ready(function() {
	//start button
	$(".start").on('click', function() {
		reset();
		wins = 0;
		losses = 0;
	});

	//event handler for when user clicks on answers
	$(document).on('click', '.answers', function(event) {
		//after three seconds reset function is called
		setTimeout(reset,3000);

		//creates a new image for the correct guess
		var img = $("<img>");
			img.attr("src", newQuestion[0].image);
		//info about the correct answer
		var info = $("<p>");
			info.text(newQuestion[0].info).addClass('winnerInfo');
			$(".winnerSection").append(img);
			$(".winnerSection").append(info);
		//if user picks right answer screen says congratulations, then displays next question
		if(event.currentTarget.innerText === newQuestion[0].answerInfo){
			wins++;
			$(".winnerSection").prepend('<h1>Congratulations, you chose correctly!</h1>');
			$(".timer").hide();	
			$(".triviaContent").hide();
			} else{
				losses++;
				$(".winnerSection").prepend('<h1>You guessed wrong, try again.</h1>');
				$(".timer").hide();
				$(".triviaContent").hide();
			}
	});
});

createTrivia();
//what i still need to do


	
	//when trivia array length is 0, game ends 
			//wins and losses are displayed
			//button appears to restart the game and reset game scores
		
	


//BUGS//

//can continue to click on different answers during the stage where wrong answer is guessed and correct answer is being shown