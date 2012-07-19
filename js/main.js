// Make sure jQuery and svg-web are loaded!
// TODO: maybe use this hack? http://neighborhood.org/core/sample/jquery/append-to-head.htm 

var updateContent = function (id) { 
	$('#content').load('/content/' + id + '.html');
}

$(window).ready( function () {
  $("#navbar").load('/navbar.html');
});
