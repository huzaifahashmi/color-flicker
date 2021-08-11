let currentBackground = document.querySelector(".current-background");
let changeColor = document.querySelector(".btn");
let resetButton = document.querySelector(".reset");

// Array containing colors

let colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "gray",
  "white",
  "Orange",
  "Violet",
  "purple",
  "pink",
  "brown",
];

changeColor.addEventListener("click", function () {
  let randomColor = Math.trunc(Math.random() * colors.length);
  let randomColor1 = Math.trunc(Math.random() * colors.length);
  document.body.style.backgroundColor = `${colors[randomColor]}`;
  currentBackground.textContent = colors[randomColor];
  changeColor.style.backgroundColor = colors[randomColor1];
});

resetButton.addEventListener("click", function () {
  document.body.style.backgroundColor = "rgb(204, 222, 255)";
  currentBackground.textContent = "cornflowerblue";
  changeColor.style.backgroundColor = "";
});
