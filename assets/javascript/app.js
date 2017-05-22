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

$(document).ready(function() {


	var timerInterval;
	var timeRemaining = parseInt($(".timer")[0].innerText);
	//array of bjects to store my trivia information
	var trivia = [
	{
		question: 'What does alcohol NOT do to you?',
		answers: ['impair your judgement', 'affects your ability to operate heavy machinery', 'keeps you warm', 'dance'],
		answerInfo: 'Dilates warm blood vessels near the skin, creating the impression of warmth. It can drop core body temp.'},
	{
		question: 'A question',
		answers: ['some answers', 'some more answers'],
		answerInfo: 'I made it all up'}
	];

	

	function showTrivia(){
		timerInterval = setInterval(count, 1000);


	}

	function count() {
		if (timeRemaining > 0){
		timeRemaining--;
		$(".timer").text(timeRemaining);
		} else {
			console.log ('here we go');
			clearInterval(timerInterval);
		}
	}

	$("#start").on('click', function() {
		$(".startSection").hide();
		$(".triviaSection").show();
		showTrivia();
		addQuestion();
		//triggers a function that will show me random guess in my trivia object
	});

	function addQuestion() {
		var newQuestion;
		//iterate through the trivia array
		//pick a random object
		//insert it into the dom
			//pick a random object by assigning an array with a index of a random selection to a new variable 
			newQuestion = trivia[Math.round(Math.random()*(trivia.length-1))];
				//create a div for the question
				var question = $("<div>");
				//add our question to the div and append it to trivia content section
				question.text(newQuestion.question);
				$(".triviaContent").append(question);

				//create a new for loop to iterate through the answers array that is inside of our object assigned to variable newQuestion
					//for each index in answers array create a new div
					//add text to each div with each answer in the answers array
					//append it to trivia content section
		
	}
});
