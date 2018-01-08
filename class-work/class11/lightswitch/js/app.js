$(document).ready(function () {

	var lights = 'on';

$('#lightswitch').click (function() {
	if (lights == 'on') {
		lights = 'off';
	
		// $('#lightswitch').css('background', 'white');
		$('#lightswitch')
		.addClass('switch-off')
		.removeClass('switch-on')
		
		
		$('#lightswitch').html('OFF');
		// $('body').css('background', 'black');
		$('body').addClass('lights-off');
	} else {
		lights = 'on';
		// $('#lightswitch').css({'background': 'black', 'color': 'white'});
		$('#lightswitch').addClass('switch-on');
		$('#lightswitch').removeClass('switch-off');
		$('#lightswitch').html('ON');
		// $('body').css('background', 'white');
		$('body').removeClass('lights-off');
		console.log(lightswitch);
	}
})

})


// When the lights are on:

// give the #lightswitch element a background-color of black and a text color of white
// give the body a background color of white

// When the lights are off:

// give the #lightswitch element a background-color of white and a text color of black
// give the body a background color of black;