const colors = ["red", "green", "blue", "yellow", "purple", "orange", "pink", "brown"];
const colorBox = document.getElementById("colorBox");
const colorInput = document.getElementById("colorInput");
const colorResult = document.getElementById("colorResult");

let correctColor = "";

function setNewColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  correctColor = colors[randomIndex];
  colorBox.style.backgroundColor = correctColor;
  colorInput.value = "";
  colorResult.textContent = "";
}

function checkColor() {
  const userGuess = colorInput.value.toLowerCase().trim();
  if (userGuess === correctColor) {
    colorResult.textContent = "✅ Correct!";
    colorResult.style.color = "green";
  } else {
    colorResult.textContent = `❌ Oops! It was "${correctColor}".`;
    colorResult.style.color = "red";
  }
  setTimeout(setNewColor, 1500); // Next round in 1.5s
}

window.onload = setNewColor;
