jQuery(function($) {
	$('.securemail').each(function(index) {
	    var address = $(this).text();
	    address = address.replace('(at)','@');
	    address = address.replace('(dot)','.');  
	    $(this).html(address);  
	    $(this).click(function() {
		   location.href = "mailto:" + address;
		});
	});

	$('#home a').mouseover(function() {
		$(this).fadeTo('fast', 1);
		$('.coda-nav-left, .coda-nav-right').fadeTo('fast', 1);
	});
	$('#home a').mouseout(function() {
		$(this).fadeTo('fast', 0.7);
		$('.coda-nav-left, .coda-nav-right').fadeTo('fast', 0.6);
	});		
	
	$('#slider').codaSlider();
	
	
	// Get currentPanel height to set marginTop (center positioning)
	if(!location.hash) {
		currentPanel = 0;
		$('.coda-nav-left, .coda-nav-right').hide();
	} else {
		currentPanel = parseInt(location.hash.slice(1))-1;
	}
	panelHeight = $('.panel:eq(' + currentPanel + ')', $('#slider')).height();
	$('#slider').css({ marginTop: -(panelHeight/2) });
});