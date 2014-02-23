
//Class Person

function Person(values){
	this.name = values[0].value;
	this.email = values[1].value;
}

Person.prototype.signup = function(){
	$.ajax({
		url: '/play.php',
		type: 'POST',
		data: {'name':this.name, 'email': this.email }
	})
	.done(function(html) {
		$('.login').replaceWith(html);
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
}


