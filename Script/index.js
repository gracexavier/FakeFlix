window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("header").style.background = "black";
  } else {
    document.getElementById("header").style.background = "linear-gradient(180deg, rgb(12, 12, 12) 10%, rgba(0, 0, 0, 0) 100%";
  }
}
function myFunction() {
// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text

  if (video.paused) {
    video.play();
    btn.innerHTML = "&#9208; Pausar";
  } else {
    video.pause();
    btn.innerHTML = "▶ Assistir";
  }
}