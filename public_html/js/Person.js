
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


