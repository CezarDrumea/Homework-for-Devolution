function hideUnhide() {
  const x = document.getElementById("circle-1");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("switch").innerText = "Hide";
  } else {
    x.style.display = "none";
    document.getElementById("switch").innerText = "Unhide";
  }
}