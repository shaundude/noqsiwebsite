// Make sure jQuery and bbq plugin loaded!

var updateContent = function (url) { 
	$('#content').hide().load(url).fadeIn();
}

// Load and set up the navbar 
// * Prepend '#' to all of the URLs
// * Set 'click' handlers for BBQ history
$(function () {
   $.get('/navbar.html', function(data){ 
        $('#navbar').html(data);
        $('#navbar a').each(function (idx,obj) { 
             var _href = $(obj).attr('href');
             $(obj).attr('href',"#"+_href); 
	     $(obj).live('click',function (e) {
		  $.bbq.pushState({'': _href});
		  $('#navbar a').removeClass('selected');
		  $(obj).addClass('selected');
		  return false;
             });
        });
  });
});

var defaultURL = '/content/home.html';

// Use BBQ history for navigation
$(function () {
  // Bind hash changes
  $(window).bind( 'hashchange', function(e) {
	  var url = $.bbq.getState( '' ) || defaultURL;
	  updateContent(url);
  });
  // Trigger initial hashchange
  $(window).trigger( 'hashchange' );
});
