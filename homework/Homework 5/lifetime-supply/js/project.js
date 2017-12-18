$(document).ready(function(){


$('#click-me').click(function() {
    var age= $('#age').val();
    var max= $('#max-age').val();
    var item= $('#item').val();
    var num= $('#num-per-day').val();
    $('#solution').html(parseInt(age) * (max) * (num) + ' more ' + (item));

})

// Store your current age into a variable

// Store a maximum age into a variable

// Store a favorite drink (from a drop-down) into a variable

// Store an amount per day into a variable

// Calculate how much you would drink for the rest of your life!

// Output your results to the user
})