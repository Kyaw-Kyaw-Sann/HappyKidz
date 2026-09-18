const birthYearInput = document.getElementById("birthYear");
const ageResult = document.getElementById("ageResult");

function calculateAge() {
  const birthYear = Number(birthYearInput.value);
  const currentYear = new Date().getFullYear();

  if (birthYear => 1925 && birthYear <= currentYear) {
    const age = currentYear - birthYear;
    ageResult.textContent = `You are ${age} years old.`;
    ageResult.style.color = "green";
  } else {
    ageResult.textContent = "❌ Please enter a valid birth year.";
    ageResult.style.color = "red";
  }
}
