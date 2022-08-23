// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

const currentColor = document.querySelector("#current-color");
const divColors = document.querySelectorAll(".color");

divColors.forEach((divColor) => {
  divColor.addEventListener("click", () => {
    currentColor.style.backgroundColor = divColor.style.backgroundColor;
  });
});

const cells = document.querySelectorAll("#canvas .cell");
cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    cell.style.backgroundColor = currentColor.style.backgroundColor;
  });
});
