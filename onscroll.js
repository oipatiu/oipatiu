window.onscroll = function() {scrollin()};

function scrollin() {
  if (document.documentElement.scrollTop > 50) {
    document.getElementById("scrollin").className = "TY-OSll";
  } else {
    document.getElementById("scrollin").className = "";
  }
}