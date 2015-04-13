( function( $ ) {
	
	// Setup variables
	$window = $(window);
	$body = $('body');
	// adjustWindow();
	



	var nameIn = function(){
		$(".intro h2").fadeIn(2000);
		// $(".intro h2").eq(1).fadeIn(1000);
	};


	nameIn();

    //FadeIn all sections   
	// $body.imagesLoaded( function() {
	// 	setTimeout(function() {
		      
	// 	      // Resize sections
	// 	      adjustWindow();
		      
	// 	      // Fade in sections
	// 		  $body.removeClass('loading').addClass('loaded');
			  
	// 	}, 800);
	// });
	
	// function adjustWindow(){
		
	// 	// Init Skrollr
	// 	var s = skrollr.init({
 //    // smoothScrolling: false
	// 	});
	// 	// Get window size
	//     winH = $window.height();
	    
	//     // Keep minimum height 550
	//     if(winH <= 550) {
	// 		winH = 550;
	// 	} 
	    
	//     // Resize our slides
	//     // $slide.height(winH);
	    
	//     // Refresh Skrollr after resizing our sections
	    
	    
	// }
		
} )( jQuery );