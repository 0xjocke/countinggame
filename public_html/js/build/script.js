var math = [
{
'math': '33 + 49',
'answer': '82'
},
{
'math': '27 + 19',
'answer': '46'
},
{
'math': '44 + 17',
'answer': '61'
},
{
'math': '22 + 25',
'answer': '47'
},
{
'math': '59 + 15',
'answer': '74'
},
{
'math': '22 + 61',
'answer': '83'
},
{
'math': '54 + 17',
'answer': '71'
},
{
'math': '12 + 26',
'answer': '38'
},
{
'math': '31 + 41',
'answer': '72'
},
{
'math': '22 + 14',
'answer': '36'
},
{
'math': '3 * 1 + 12 - 2',
'answer': '13'
},
{
'math': '27 * 3',
'answer': '81'
},
{
'math': '44 - 17 + 30',
'answer': '57'
},
{
'math': '22 + 25 * 2',
'answer': '72'
},
{
'math': '100 - 10 - 11',
'answer': '79'
},
{
'math': '4 * 2 * 2 * 2',
'answer': '32'
},
{
'math': '3 + 1 + 2 * 10',
'answer': '24'
},
{
'math': '10 / 2 * 3',
'answer': '15'
},
{
'math': '100 - 2 - 3 - 50',
'answer': '45'
},
{
'math': '2 * 10 * 4',
'answer': '80'
},
{
'math': '35 + 99',
'answer': '134'
},
{
'math': '37 + 39',
'answer': '76'
},
{
'math': '4400 + 17',
'answer': '4417'
},
{
'math': '300 - 25',
'answer': '275'
},
{
'math': '10 + 1 * 0',
'answer': '10'
},
{
'math': '0 * 100 + 1',
'answer': '1'
},
{
'math': '50 + 117',
'answer': '167'
},
{
'math': '12 + 260',
'answer': '272'
},
{
'math': '310 + 410',
'answer': '720'
},
{
'math': '10 / 2',
'answer': '5'
},
{
'math': '47 * 13',
'answer': '60'
},
{
'math': '1 + 1 + 1 - 1',
'answer': '2'
},
{
'math': '2 * 2 + 10',
'answer': '14'
},
{
'math': '3 + 3 + 2',
'answer': '8'
},
{
'math': '100 - 50 - 50',
'answer': '0'
},
{
'math': '5 * 10 + 10',
'answer': '60'
},
{
'math': '10000 / 1000',
'answer': '10'
},
{
'math': '10 * 100 * 0',
'answer': '0'
},
{
'math': '100 - 20 + 3',
'answer': '77'
},
{
'math': '20 * 10 * 4',
'answer': '800'
},
{
'math': '300 * 10',
'answer': '3000'
},
{
'math': '1 + 1 + 1 - 1 + 1',
'answer': '3'
},
{
'math': '2 + 2 + 100',
'answer': '104'
},
{
'math': '30 - 9 - 9',
'answer': '12'
},
{
'math': '50 - 30 - 20',
'answer': '0'
},
{
'math': '5 * 100 + 100',
'answer': '600'
},
{
'math': '1000 / 1000',
'answer': '1'
},
{
'math': '10 * 1000 * 0',
'answer': '0'
},
{
'math': '1000 - 20 + 3',
'answer': '977'
},
{
'math': '200 * 10 * 4',
'answer': '8000'
}
];

//Class Person

function Person(values){
	this.name = values[0].value;
	this.email = values[1].value;
	this.year = values[2].value;

}

Person.prototype.signup = function(){
	$.ajax({
		url: 'backend.php',
		type: 'POST',
		data: {'name':this.name, 'email': this.email, 'year': this.year }
	})
	.done(function() {
		$('.login').fadeOut('fast', function() {
			$('.play').fadeIn('fast');
			$( "#dataloaded" ).trigger( "click" );
		});
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
};

Person.prototype.validation = function(){
	if ($('.contactfield-name').val() === '') {
		$('.validationN').fadeIn('fast');
		return false;
	}else{
		$('.validationN').fadeOut('fast');
	}
	if ($('.contactfield-email').val() === '') {
		$('.validationE').fadeIn('fast');
		return false;
	}else{
		$('.validationE').fadeOut('fast');
	}
	if ($('.contactfield-year').val() === '' || isNaN($('.contactfield-year').val())) {
		$('.validationY').fadeIn('fast');
		return false;
	}else{
		$('.validationY').fadeOut('fast');
		return true;
	}
};



function Game(){
	this.rightanswer = '';
	this.pointsCounter = 0;
	this.pointsInRow = 0;
}
Game.prototype.points = function(){
	$('#points').html(this.pointsCounter);
};
Game.prototype.timer = function(){
	var count = 1;
	var timer = setInterval(function() {
		$('#counter').html(count--);
		if (count === 9) {
			document.getElementById('clockSound').play();
		}
		if(count == -1){
			clearInterval(timer);
			$('#finished').trigger('click');
		}
	}, 1000);
	
};
Game.prototype.addNumber = function(){
	var randomQ = Math.floor((Math.random()*20)+1);
	var question = $('#mathQuestion').html(math[randomQ].math);
	Game.prototype.fixFontSize(question);
	var randomA = Math.floor((Math.random()*4)+1);
	switch (randomA) {
		case 1:
			this.rightanswer = '#answer1';
			$('#answer1').html(math[randomQ].answer);
			$('#answer2').html(math[randomQ].answer-1+7);
			$('#answer3').html(math[randomQ].answer-10);
			$('#answer4').html(math[randomQ].answer-6);
		break;
		case 2:
			this.rightanswer = '#answer2';
			$('#answer2').html(math[randomQ].answer);
			$('#answer1').html(math[randomQ].answer-1+7);
			$('#answer3').html(math[randomQ].answer-2);
			$('#answer4').html(math[randomQ].answer-10);
		break;
		case 3:
			this.rightanswer = '#answer3';
			$('#answer3').html(math[randomQ].answer);
			$('#answer2').html(math[randomQ].answer-10);
			$('#answer4').html(math[randomQ].answer-4);
			$('#answer1').html(math[randomQ].answer-1+4);
		break;
		case 4:
			this.rightanswer = '#answer4';
			$('#answer4').html(math[randomQ].answer);
			$('#answer1').html(math[randomQ].answer-1+3);
			$('#answer2').html(math[randomQ].answer-10);
			$('#answer3').html(math[randomQ].answer-2);
		break;
	}
};

Game.prototype.fixFontSize = function(question){
	if (question.html().length > 13) {
		$('#mathQuestion').css({
			'font-size': '4rem',
			'margin-top': '2.5rem'
		});
	}else if (question.html().length > 8) {
		$('#mathQuestion').css({
			'font-size': '5rem',
			'margin-top': '2rem'
		});
	}else{
		$('#mathQuestion').css({
			'font-size': '7rem',
			'margin-top': '0'
		});
	}
};

Game.prototype.checkAnswer = function(clickedBtn){
	if($(clickedBtn).is(this.rightanswer)){
			this.pointsInRow += 1;
			if (this.pointsInRow%5 === 0) {
				this.pointsCounter += 10;
				document.getElementById('bonusPling').play();
				$('.bonus').fadeIn('fast').delay(1200).fadeOut('fast');
			}
			this.pointsCounter += 10;
			this.points();
			$('.answer').addClass('wrong-notpicked');
			clickedBtn.toggleClass('wrong-notpicked');
			clickedBtn.toggleClass('correct-picked');
	}else{
		this.pointsInRow = 0;
		$('.answer').addClass('wrong-notpicked');
		clickedBtn.toggleClass('wrong-notpicked');
		clickedBtn.toggleClass('wrong-picked');
		$(this.rightanswer).removeClass('wrong-notpicked');
		$(this.rightanswer).toggleClass('correct-notpicked');

	}
};
Game.prototype.resetOld = function(){
	this.rightanswer = '';
	this.pointsCounter = 0;
	this.pointsInRow = 0;
	$('#answer1').removeClass('wrong-notpicked wrong-picked correct-notpicked correct-picked');
	$('#answer2').removeClass('wrong-notpicked wrong-picked correct-notpicked correct-picked');
	$('#answer3').removeClass('wrong-notpicked wrong-picked correct-notpicked correct-picked');
	$('#answer4').removeClass('wrong-notpicked wrong-picked correct-notpicked correct-picked');

};
Game.prototype.removeClasses = function(){
	$('#answer1').removeClass('wrong-notpicked wrong-picked correct-notpicked correct-picked');
	$('#answer2').removeClass('wrong-notpicked wrong-picked correct-notpicked correct-picked');
	$('#answer3').removeClass('wrong-notpicked wrong-picked correct-notpicked correct-picked');
	$('#answer4').removeClass('wrong-notpicked wrong-picked correct-notpicked correct-picked');
};

Game.prototype.finished = function(){
	var points;
	$('.play').fadeOut('fast', function() {
		$('.finished').fadeIn('fast');
		$('#pointsloaded').trigger('click');
	});
	$.ajax({
		url: 'backend.php',
		type: 'POST',
		data: {'points': this.pointsCounter}
	})
	.done(function() {
		console.log("success");
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	
};







//save perosn to db
$(document).on('submit', '#signup', function(event) {
	event.preventDefault();
	document.getElementById('clockSound').play();
	document.getElementById('clockSound').pause();
	if(!Person.prototype.validation()) return;
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
		$('.toplistTable').replaceWith(html);
		$('.finished').fadeOut('fast', function() {
			$('.toplist').fadeIn('fast');
		});
	});
});
$(document).hammer().on('swipeleft', '.toplist', function(event) {
	$('#toplistBack').trigger('tap');
});
$(document).hammer().on('swiperight', '.toplist', function(event) {
	$('#toplistBack').trigger('tap');
});
$(document).hammer().on('tap', '#toplistBack', function(event) {
	$('.toplist').fadeOut('fast', function() {
		$('.finished').fadeIn('fast');
	});
});