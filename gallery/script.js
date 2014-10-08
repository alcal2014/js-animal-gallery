// Add your code here
$(document).ready(function() {

	alertify.log('hi');

	$('body').on('click','.filter-button',function() {

	  	$('.' + this.id).toggle();

	    $(this).toggleClass('active');

	});


	$.getJSON( "https://mks-frontend-gallery.herokuapp.com/", function( json ) {

		var animalarr = [];

		$.each( json, function( x, val ) {
	  		
	  		$('.gallery').append('<div id="'+x+'"" class="large-4 small-6 columns"><img src="'+val.url+'"></div>');

		    $.each(val.animals, function(i,animal) {
		    		$('.columns #' + x).addClass(animal);

		    		if(jQuery.inArray( animal, animalarr ) == -1) {
		    			animalarr.push(animal);
		    		}
		    });
 
		});
	

		$.each(animalarr, function(i,animalid) {
		  	$('.filters').append('<div class="filter-button individual button active" id="'+animalid+'">'+animalid+'</div>');
		});

	});



});
