
var rightChoice;
var newQuestion;

$(document).ready(function() {

	var timerInterval;
	var timeRemaining;

	//array of objects to store my trivia information
	var trivia = [{
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
		answers: ['Mountain View, CA', 'Room 808 in Uc Berkeley Extension Building on Spear Street', 'University of Pennsylvania', 'Stanford'],
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

	//start button
	$("#start").on('click', function() {
		reset();
	});


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

	//event handler for when user clicks on answers
	$(document).on('click', '.answers', function(event) {
		//when users clicks on an answer, a new window pops up
		$(".triviaContent").hide();
			//if user picks right answer screen says congratulations, then displays next question
			if(event.currentTarget.innerText === newQuestion.answerInfo){
				$(".winnerSection").text('Congratulations, you chose correctly!');
				$(".timer").hide();
					//the image specific to current object being guessed is created and shown in dom
			var img = $("<img>");
				img.attr("src", newQuestion.image);
				$(".winnerSection").append(img);
				setTimeout(reset,3000);
			} else{
				$(".winnerSection").text('You guessed wrong, try again.');
				$(".timer").hide();
				setTimeout(reset,3000);
			}
	});

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

	function showAnswer(outcome){
		
	}
	});

	

// determine which answer the user clicked on
// if that answer is the right answer 

// You'll create a trivia game that shows only one question until the player answers it or their time runs out.
// If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.
// The scenario is similar for wrong answers and time-outs.
// If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
// If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.
// On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).

//create an object with your trivia inside
//have a set timeout to count down from a timer variable that starts at 30 seconds
//after 30 seconds clear the timer variable

// if 30 seconds are not done
	// show the trivia question with the answers as buttons that you can click
	// if you choose the correct button
		//show a screen congratulating them
		// after a few seconds go on to the next question
	// if you choose the wrong button
		// show the correct anser
		// few seconds next question

// else if 30 seconds are done 
	//tell player time is up and display correct answer


//final screen 
	// shows number of correct answers
	// incorrent answers
	// option to restart game 
