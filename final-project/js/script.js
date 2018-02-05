$(document).ready(function() {
  
  });
  


// $('.length').click(function(){
// 	$(this).find('.hide').slideToggle('fast');
// })

var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector(".butter button");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
    pauseButton.innerHTML = "Paused";
}

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed 
vid.pause();
// to capture IE10
vidFade()
}); 


pauseButton.addEventListener("click", function() {
  vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
    pauseButton.innerHTML = "Pause";
  } else {
    vid.pause();
    pauseButton.innerHTML = "Paused";
  }
});

$('#weight-type').change(function(){

var weight = $(this).val();

$('#crap').removeClass();

$('#crap').addClass(weight);
console.log(weight);
});
