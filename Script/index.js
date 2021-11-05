window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("header").style.background = "black";
  } else {
    document.getElementById("header").style.background = "linear-gradient(180deg, rgb(12, 12, 12) 10%, rgba(0, 0, 0, 0) 100%";
  }
}