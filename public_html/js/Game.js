function Game(){
	var count = 60, timer = setInterval(function() {
	    $("#counter").html(count--);
	    if(count == 1) clearInterval(timer);
	}, 1000);	
}

