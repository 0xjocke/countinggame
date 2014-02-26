$(document).ready(function() {
	// setInterval(function(){getToplist();}, 300000);
	getToplist();
});

function getToplist(){
	$.ajax({
		url: 'backend.php?toplist=yes'
	})
	.done(function(html) {
		$('.toplistTable').replaceWith(html);
	});
}