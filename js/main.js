// Make sure jQuery is loaded!
// TODO: maybe use this hack? http://neighborhood.org/core/sample/jquery/append-to-head.htm 


// Top level CSS controls
$(window).load(function() {
	var svgDoc = document.getElementById("logo").contentDocument;
	console.log(svgDoc.documentElement);
	//var styleElement = svgDoc.createElementNS("http://www.w3.org/1999/xhtml", "link");
	//styleElement.setAttribute("href", "/styles/main.css");
	//styleElement.setAttribute("type", "text/css");
	//styleElement.setAttribute("media", "screen");
	//styleElement.setAttribute("rel", "stylesheet");
	//svgDoc.documentElement.appendChild(styleElement);
	//svgDoc.getElementsByTagName('svg')[0].appendChild(linkElm);
});
