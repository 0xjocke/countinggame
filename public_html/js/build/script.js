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
		'math': '33 + 49',
		'answer': '82'
	},
	{
		'math': '33 + 49',
		'answer': '82'
	},
	{
		'math': '33 + 49',
		'answer': '82'
	},
	{
		'math': '33 + 49',
		'answer': '82'
	},
	{
		'math': '33 + 49',
		'answer': '82'
	},
	{
		'math': '33 + 49',
		'answer': '82'
	},
	{
		'math': '33 + 49',
		'answer': '82'
	},
	{
		'math': '33 + 49',
		'answer': '82'
	}
];

//Class Person

function Person(values){
	this.name = values[0].value;
	this.email = values[1].value;
}

Person.prototype.signup = function(){
	$.ajax({
		url: 'backend.php',
		type: 'POST',
		data: {'name':this.name, 'email': this.email }
	})
	.done(function() {
		$( "#dataloaded" ).trigger( "click" );
		$('.login').fadeOut('fast', function() {
			$('.play').fadeIn('fast');
		});
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
};



function Game(){
	this.rightanswer = '';
	this.pointsCounter = 0;
}
Game.prototype.points = function(){
	$('#points').html(this.pointsCounter);
};
Game.prototype.timer = function(){
	var count = 60;
	var timer = setInterval(function() {
		$('#counter').html(count--);
		if(count == -1){
			clearInterval(timer);
			$('#finished').trigger('click');
		}
	}, 1000);
	
};
Game.prototype.addNumber = function(){
	var randomQ = Math.floor((Math.random()*10)+1);
	$('#mathQuestion').html(math[randomQ].math);
	var randomA = Math.floor((Math.random()*4)+1);
	switch (randomA) {
		case 1:
			this.rightanswer = '#answer1';
			$('#answer1').html(math[randomQ].answer);
			$('#answer2').html(math[randomQ].answer-1+7);
			$('#answer3').html(math[randomQ].answer-2);
			$('#answer4').html(math[randomQ].answer-6);
		break;
		case 2:
			this.rightanswer = '#answer2';
			$('#answer2').html(math[randomQ].answer);
			$('#answer1').html(math[randomQ].answer-1+7);
			$('#answer3').html(math[randomQ].answer-2);
			$('#answer4').html(math[randomQ].answer-3);
		break;
		case 3:
			this.rightanswer = '#answer3';
			$('#answer3').html(math[randomQ].answer);
			$('#answer2').html(math[randomQ].answer-2);
			$('#answer4').html(math[randomQ].answer-4);
			$('#answer1').html(math[randomQ].answer-1+4);
		break;
		case 4:
			this.rightanswer = '#answer4';
			$('#answer4').html(math[randomQ].answer);
			$('#answer1').html(math[randomQ].answer-1+3);
			$('#answer2').html(math[randomQ].answer-6);
			$('#answer3').html(math[randomQ].answer-2);
		break;
	}
};
Game.prototype.checkAnswer = function(clickedBtn){
	if($(clickedBtn).is(this.rightanswer)){
			this.pointsCounter += 10;
			this.points();
			$('.answer').addClass('wrong-notpicked');
			clickedBtn.toggleClass('wrong-notpicked');
			clickedBtn.toggleClass('correct-picked');
	}else{
		$('.answer').addClass('wrong-notpicked');
		clickedBtn.toggleClass('wrong-notpicked');
		clickedBtn.toggleClass('wrong-picked');
		$(this.rightanswer).removeClass('wrong-notpicked');
		$(this.rightanswer).toggleClass('correct-notpicked');

	}
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