// Make sure jQuery and svg are loaded!
// TODO: maybe use this hack? http://neighborhood.org/core/sample/jquery/append-to-head.htm 

// Hack to control style of included SVGs at Top Level - requires SVGWeb
window.onsvgload = function() {
	var svgNS = "http://www.w3.org/2000/svg";
	var svgs = document.getElementsByTagName("object");
	console.log(svgs);	
	for (var i in svgs) {
		svgDoc = svgs[i].contentDocument;
		var styleElement = svgDoc.createElementNS(svgNS, "style");
		styleElement.textContent = "@import url('/styles/master.css')";
		svgDoc.documentElement.appendChild(styleElement);
	}
//	$('object').each( function(idx) { 
//		var svgDoc = $(this)[0].contentDocument; 
//		var styleElement = svgDoc.createElementNS(svgNS, "style");
//	});
};
