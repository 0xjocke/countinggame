
//save perosn to db
$(document).on('submit', '#signup', function(event) {
	event.preventDefault();
	if ($('.contactfield-name').val() === '') {
		$('.validationN').fadeIn('fast');
		return;
	}else{
		$('.validationN').fadeOut('fast');
	}
	if ($('.contactfield-email').val() === '') {
		$('.validationE').fadeIn('fast');
		return;
	}else{
		$('.validationE').fadeOut('fast');
	}
	var values = $(this).serializeArray();
	var person = new Person(values);
	game = new Game();
	person.signup(); //singup will trigger #dataloaded
});

//create new game.
$(document).on('click', '#dataloaded', function(event) {
	event.preventDefault();
	game.resetOld();
	answered = false;
	game.points();
	game.timer();
	game.addNumber();
});
$(document).hammer().on('tap', '.answer', function(event) {
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


$(document).hammer().on('tap', '#playagain', function(event) {
	event.preventDefault();
	$('.finished').fadeOut('fast', function() {
		$('.play').fadeIn('fast');
		$('#dataloaded').trigger('click');
	});
});

$(document).hammer().on('tap', '#toplist', function(event) {
	event.preventDefault();
	$.ajax({
		url: 'backend.php?toplist=yes'
	})
	.done(function(html) {
		$('#empty').replaceWith(html);
		$('.finished').fadeOut('fast', function() {
			$('.toplist').fadeIn('fast');
		});
	});
});
$(document).hammer().on('swipeleft', '.toplist', function(event) {
	$('#toplistBack').trigger('tap');
});
$(document).hammer().on('tap', '#toplistBack', function(event) {
	$('.toplist').fadeOut('fast', function() {
		$('.finished').fadeIn('fast');
	});
});