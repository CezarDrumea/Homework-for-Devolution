function dayNight() {
  const x = document.getElementById("sun-moon");
  let star = document.getElementsByClassName("star")
  if (x.style.backgroundColor === "orange") {
    x.style.backgroundColor = "rgb(170, 170, 110)";
    document.getElementById("background").style.backgroundColor = "black";
    for (var i = 0; i < star.length; i++ ) {
      star[i].style.visibility = "visible";
    }
  }
  else {
    x.style.backgroundColor = "orange";
    document.getElementById("background").style.backgroundColor = "white";
    for (var i = 0; i < star.length; i++ ) {
      star[i].style.visibility = "hidden";
    }
  }
}