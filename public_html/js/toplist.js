$(document).ready(function() {
	getToplist();
	setInterval(function(){getToplist();}, 30000);

});

function getToplist(){
	$.ajax({
		url: 'backend.php?tvmax=yes&no_cache=' + Math.random(),
		dataType: 'json'
	})
	.done(function(json) {
		$('#highest').html(json.max + 'p');
	});

	$.ajax({
		url: 'backend.php?tvtoplist=yes&no_cache=' + Math.random(),
		dataType: "json"
	})
	.done(function(json) {
		console.log(json);
		if (json.length >10) {
			var html1 = '<tbody>';
			for (var i = 0; i < 10; i++) {
				html1 += '<tr><td>' + (i+1) + '.<td>';
				html1 += '<td>' + json[i].name + '</td>';
				html1 += '<td>' + json[i].highscore + 'p</td></tr>';
			}
		
			html1 += '</tbody>';
			$('.toplistTableL .toplistTable').html(html1);
			var html2 = '<tbody>';
		
			for (i = 10; i < json.length; i++) {
				html2 += '<tr><td>' + (i+1) + '.<td>';
				html2 += '<td>' + json[i].name + '</td>';
				html2 += '<td>' + json[i].highscore + 'p</td></tr></tbody>';
			}
			$('.toplistTableR .toplistTable').html(html2);
		}else{
			var html1 = '<tbody>';
			for (var i = 0; i < json.length; i++) {
				html1 += '<tr><td>' + (i+1) + '.<td>';
				html1 += '<td>' + json[i].name + '</td>';
				html1 += '<td>' + json[i].highscore + 'p</td></tr>';
			}
			html1 += '</tbody>';
			$('.toplistTableL .toplistTable').html(html1);
		}
	});
}