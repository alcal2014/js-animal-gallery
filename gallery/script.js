// Add your code here
$(document).ready(function() {

	$('.filter-button').click(function() {

	  	$('.' + this.id).toggle();

	    $(this).toggleClass('active');

	});

});
