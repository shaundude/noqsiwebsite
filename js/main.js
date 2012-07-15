// Make sure jQuery and svg-web are loaded!
// TODO: maybe use this hack? http://neighborhood.org/core/sample/jquery/append-to-head.htm 

// Hack to control style of included SVGs at top level - requires svg-web

var updateSVGs = function(element, styleFile) {
	var svgNS = "http://www.w3.org/2000/svg";
	var objs = element.getElementsByTagName("object");
	for (var i in objs) {
		if(objs[i].type === "image/svg+xml") {
			svgDoc = objs[i].contentDocument;
			var styleElement = svgDoc.createElementNS(svgNS, "style");
			styleElement.textContent = 
				"@import url('" + styleFile + "')";
			svgDoc.documentElement.appendChild(styleElement);
		} ;
	}
}

var updateContent = function (id) { 
	$("#content").load(id + ".html", function () { 
		updateSVGs(document,'/styles/master.css'); 
	});
}

window.addEventListener('SVGLoad', function () { 
	updateSVGs(document,'/styles/master.css'); 
});
