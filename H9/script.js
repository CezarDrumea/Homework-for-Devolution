const firstColor=document.querySelector("#first").style;
const secondColor=document.querySelector("#second").style;

function check1() {
  firstColor.setProperty("--color1", "green");
  firstColor.boxShadow=("white 0 0 5px");
  secondColor.setProperty("--color2", "#505050");
  secondColor.boxShadow=("none");
}

function check2() {
  firstColor.setProperty("--color1", "#505050");
  firstColor.boxShadow=("none");
  secondColor.setProperty("--color2", "green");
  secondColor.boxShadow=("white 0 0 5px");
}