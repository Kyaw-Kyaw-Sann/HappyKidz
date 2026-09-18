const lengthInput = document.getElementById("lengthInput");
const toFeet = document.getElementById("toFeet");
const toMeters = document.getElementById("toMeters");
const lengthResult = document.getElementById("lengthResult");

function convertLength() {
  const value = Number(lengthInput.value);
  let result;

  if (toFeet.checked) {
    result = value * 3.28084; // 1 meter = 3.28084 feet
    lengthResult.textContent = `${result.toFixed(2)} ft`;
  } else if (toMeters.checked) {
    result = value / 3.28084;
    lengthResult.textContent = `${result.toFixed(2)} m`;
  } else {
    lengthResult.textContent = "❗ Select a unit to convert.";
  }
}
