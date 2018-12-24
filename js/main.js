/*
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
});
*/

function securemail(m) {
	 m = m.replace('(at)','@').replace('(dot)','.');  
	 window.location.href = "mailto:"+m;
  return false;
}