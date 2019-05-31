$(document).ready(function(){
		
	var menuIsOpen = false;

	$('.menu-toggle').click(function() {
		$('nav').slideToggle("fast");
		if(!menuIsOpen) {
			$('.menu-toggle').text("CLOSE");
			menuIsOpen = true;
		} else {
			$('.menu-toggle').text("MENU");
			menuIsOpen = false;
		}
	});

	window.setInterval(function(){
		if ( $(document).scrollTop() > 400 ) {
			if ( ! $('header').hasClass('scrolled') )
				$('header').addClass('scrolled');
		} else {
			if ( $('header').hasClass('scrolled') )
				$('header').removeClass('scrolled');
		}
	}, 300);

	// http://stackoverflow.com/questions/7717527/jquery-smooth-scrolling-when-clicking-an-anchor-link/7717572#7717572?newreg=16ca424bc4024b21a4fcc728ea6451d5
	$('a').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);
	    return false;
	});

});