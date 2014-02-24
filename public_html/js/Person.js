
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


