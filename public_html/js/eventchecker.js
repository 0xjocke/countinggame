$(document).on('submit', '#signup', function(event) {
	event.preventDefault();
	var values = $(this).serializeArray();
	var person = new Person(values);
	person.signup();
	//var game = New Game();
	
}); 