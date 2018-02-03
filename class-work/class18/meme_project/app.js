$('.meme-form').submit(function (event) {
   //prevents page reload on submit
    event.preventDefault();
    //clears whats on page
    $('.video-wrapper').empty();

    var userInput = $('.meme-input').val();
    console.log(userInput);

    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q="+ userInput +"+cat&api_key=z6bGeemjDDGZeA1pllDHgQ9Hd8bFOPLP&limit=5");
    xhr.done(function (data) {

        var memes = data.data;

        memes.forEach(function (meme) {

            var memeUrl = meme.images.looping.mp4;
            $('.video-wrapper').append('<video src="' + memeUrl + '" autoplay loop></video>');

        })
    });
});