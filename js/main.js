// Make sure jQuery and svg-web are loaded!
// TODO: maybe use this hack? http://neighborhood.org/core/sample/jquery/append-to-head.htm 

// Hack to control style of included SVGs at top level - requires svg-web

var updateContent = function (id) { 
	$("#content").load(id + '.html');
}
