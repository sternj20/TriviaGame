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
	{question: 'What is the best way to sort a large sum of data?',
	answers: ['merge sort', 'bubble sort', 'triple sort'
	]},
	{question: 'What is the best way to sort a large sum of data?',
	answers: ['merge sort', 'bubble sort', 'triple sort']}

	];

	function showTrivia(){
		timerInterval = setInterval(count, 1000);


	}

	function count() {
		if (timeRemaining > 0){
		timeRemaining--;
		$(".timer").text(timeRemaining);
		} else {
			console.log ('here we go')
			clearInterval(timerInterval);
		}
	}

	$("#start").on('click', function() {
		$(".startSection").hide();
		$(".triviaSection").show();
		showTrivia();
		//triggers a function that will show me random guess in my trivia object
	});

	
});
