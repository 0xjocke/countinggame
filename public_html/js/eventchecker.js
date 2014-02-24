
//save perosn to db
$(document).on('submit', '#signup', function(event) {
	event.preventDefault();
	var values = $(this).serializeArray();
	var person = new Person(values);
	person.signup(); //singup will trigger #dataloaded
});

//create new game.
$(document).on('click', '#dataloaded', function(event) {
	event.preventDefault();
	var game = new Game();
	var answered = false;
	game.removeClasses();
	game.points();
	game.timer();
	game.addNumber();
	$(document).on('click', '.answer', function(event) {
		event.preventDefault();
		if (answered) return;
		var clickedBtn = $(this);
		answered = true;
		game.checkAnswer(clickedBtn);
		var timer = setInterval(function() {
			game.removeClasses();
			game.addNumber();
			answered = false;
			clearInterval(timer);
			}, 1000);
	});
	$(document).on('click', '#finished', function(event) {
		event.preventDefault();
		game.finished();
	});
	$(document).on('click', '#pointsloaded', function(event) {
		event.preventDefault();
		$('#finishedPoints').html(game.pointsCounter);
	});
});


$(document).on('click', '#playagain', function(event) {
	$('.finished').fadeOut('fast', function() {
		$('.play').fadeIn('fast');
		$('#dataloaded').trigger('click');
	});
});