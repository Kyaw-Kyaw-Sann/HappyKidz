const spellingImage = document.getElementById("spellingImage");
const spellingInput = document.getElementById("spellingInput");
const spellingResult = document.getElementById("spellingResult");

const spellingWords = [
    { word: "apple", img: "apple.jfif" },
    { word: "dog", img: "dog.jfif" },
    { word: "cat", img: "cat.jfif" },
    { word: "fish", img: "fish.webp" },
    { word: "car", img: "car.jfif" }
];

let currentWord = "";

generateSpelling();

function generateSpelling() {
    const randomItem = spellingWords[Math.floor(Math.random() * spellingWords.length)];
    currentWord = randomItem.word;
    spellingImage.src = `../images/${randomItem.img}`; // Make sure you have an `images` folder
    spellingInput.value = "";
    spellingResult.textContent = "";
}

function checkSpelling() {
    const userInput = spellingInput.value.trim().toLowerCase();

    if (userInput === "") {
        spellingResult.textContent = "Please enter your answer.";
    } else if (userInput === currentWord) {
        spellingResult.textContent = "Correct! ✅";
    } else {
        spellingResult.textContent = `Wrong! ❌ The correct spelling is "${currentWord}".`;
    }

    setTimeout(generateSpelling, 2000);
}
