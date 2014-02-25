function Game(){
	this.rightanswer = '';
	this.pointsCounter = 0;
	this.pointsInRow = 0;
}
Game.prototype.points = function(){
	$('#points').html(this.pointsCounter);
};
Game.prototype.timer = function(){
	var count = 6;
	var timer = setInterval(function() {
		$('#counter').html(count--);
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
				$('.bonus').fadeIn('fast').delay(3000).fadeOut('fast');
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





