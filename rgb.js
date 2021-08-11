let body = document.querySelector("body");
let currentBackground = document.querySelector(".current-background");
let changeColor = document.querySelector(".btn-sm");
let reset = document.querySelector(".reset");
body.style.backgroundColor = "rgb(40, 252, 3)";

changeColor.addEventListener("click", function () {
  var r = () => (Math.random() * 256) >> 0;
  var g = () => (Math.random() * 256) >> 0;
  var b = () => (Math.random() * 256) >> 0;
  var color = `rgb(${r()}, ${g()}, ${b()})`;
  body.style.backgroundColor = color;
  currentBackground.textContent = color;
  changeColor.style.backgroundColor = `rgb(${b()}, ${g()}, ${r()})`;
});

reset.addEventListener("click", function () {
  currentBackground.textContent = "rgb(40, 252, 3)";
  body.style.backgroundColor = "rgb(40, 252, 3)";
  changeColor.style.backgroundColor = "rgb(40, 252, 3)";
});
