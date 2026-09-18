// start menu
// let subMenu=document.getElementById("subMenu");
var icon=document.getElementById("icon");
var menu=document.getElementById("menu");
function displayMenu(){
    icon.style.display="none";
    menu.style.display="block";
}
function displayIcon(){
    icon.style.display="block";
    menu.style.display="none";
}
function displayIcon1(){
    icon.style.display="block";
    menu.style.display="none";
}
function displayIcon2(){
    icon.style.display="block";
    menu.style.display="none";
}
function displayIcon3(){
    icon.style.display="block";
    menu.style.display="none";
}
function displayIcon4(){
    icon.style.display="block";
    menu.style.display="none";
}
// end menu
// start toggle //
const btn1=document.getElementById("btn");
// const login1=document.getElementById("logIn");
const body=document.getElementById("home");
// const container=document.getElementById("container");

function light(){//default position
    // login1.style.left="50px";//replacement,also add and assign
    btn1.style.left="0";
     body.style.background="#2a5298";
    // container.style.background="black";
}
function dark(){
    // login.style.left="-400px";
    btn1.style.left="55px";
    body.style.background="rgba(0, 0, 139, 0.898)"
    // container.style.background="lightblue";
}
// end toggle //
//start control display
const colour=document.getElementById("colour");
const picture=document.getElementById("picture");
const age=document.getElementById("age");
const multiplication=document.getElementById("multiplication");
const quiz=document.getElementById("quiz");
const length=document.getElementById("length");
const area=document.getElementById("area");
const temperature=document.getElementById("temperature");
const interset=document.getElementById("interset");

function Level1(){
    colour.style.display="block";
    picture.style.display="none";
    age.style.display="none";
    multiplication.style.display="none";
    quiz.style.display="none";
    length.style.display="none";
    area.style.display="none";
    temperature.style.display="none";
    interset.style.display="none";
}
function Level2(){
    colour.style.display="none";
    picture.style.display="block";
    age.style.display="none";
    multiplication.style.display="none";
    quiz.style.display="none";
    length.style.display="none";
    area.style.display="none";
    temperature.style.display="none";
    interset.style.display="none";
}
function Level3(){
    colour.style.display="none";
    picture.style.display="none";
    age.style.display="block";
    multiplication.style.display="none";
    quiz.style.display="none";
    length.style.display="none";
    area.style.display="none";
    temperature.style.display="none";
    interset.style.display="none";
}
function Level4(){
    colour.style.display="none";
    picture.style.display="none";
    age.style.display="none";
    multiplication.style.display="block";
    quiz.style.display="none";
    length.style.display="none";
    area.style.display="none";
    temperature.style.display="none";
    interset.style.display="none";
}
function Level5(){
    colour.style.display="none";
    picture.style.display="none";
    age.style.display="none";
    multiplication.style.display="none";
    quiz.style.display="block";
    length.style.display="none";
    area.style.display="none";
    temperature.style.display="none";
    interset.style.display="none";
}
function Level6(){
    colour.style.display="none";
    picture.style.display="none";
    age.style.display="none";
    multiplication.style.display="none";
    quiz.style.display="none";
    length.style.display="block";
    area.style.display="none";
    temperature.style.display="none";
    interset.style.display="none";
}
function Level7(){
    colour.style.display="none";
    picture.style.display="none";
    age.style.display="none";
    multiplication.style.display="none";
    quiz.style.display="none";
    length.style.display="none";
    area.style.display="block";
    temperature.style.display="none";
    interset.style.display="none";
}
function Level8(){
    colour.style.display="none";
    picture.style.display="none";
    age.style.display="none";
    multiplication.style.display="none";
    quiz.style.display="none";
    length.style.display="none";
    area.style.display="none";
    temperature.style.display="block";
    interset.style.display="none";
}
function Level9(){
    colour.style.display="none";
    picture.style.display="none";
    age.style.display="none";
    multiplication.style.display="none";
    quiz.style.display="none";
    length.style.display="none";
    area.style.display="none";
    temperature.style.display="none";
    interset.style.display="block";
}
//end control display
// start second column
//start tutorial video
// start tutorial video
//colour
var popup_video=document.getElementById("popup-video");
var closeVideo=document.getElementById("close");
function showTutorialVideo(){
    popup_video.style.display="block";
}
closeVideo.onclick=()=>popup_video.style.display="none";
//picture
var popup_video2=document.getElementById("popup-video2");
var closeVideo2=document.getElementById("close2");
function showTutorialVideo2(){
    popup_video2.style.display="block";
}
closeVideo2.onclick=()=>popup_video2.style.display="none";
//age
var popup_video3=document.getElementById("popup-video3");
var closeVideo3=document.getElementById("close3");
function showTutorialVideo3(){
    popup_video3.style.display="block";
}
closeVideo3.onclick=()=>popup_video3.style.display="none";
//multiplication
var popup_video4=document.getElementById("popup-video4");
var closeVideo4=document.getElementById("close4");
function showTutorialVideo4(){
    popup_video4.style.display="block";
}
closeVideo4.onclick=()=>popup_video4.style.display="none";
//quiz
var popup_video5=document.getElementById("popup-video5");
var closeVideo5=document.getElementById("close5");
function showTutorialVideo5(){
    popup_video5.style.display="block";
}
closeVideo5.onclick=()=>popup_video5.style.display="none";
//length
var popup_video6=document.getElementById("popup-video6");
var closeVideo6=document.getElementById("close6");
function showTutorialVideo6(){
    popup_video6.style.display="block";
}
closeVideo6.onclick=()=>popup_video6.style.display="none";
//area
var popup_video7=document.getElementById("popup-video7");
var closeVideo7=document.getElementById("close7");
function showTutorialVideo7(){
    popup_video7.style.display="block";
}
closeVideo7.onclick=()=>popup_video7.style.display="none";
//temperature
var popup_video8=document.getElementById("popup-video8");
var closeVideo8=document.getElementById("close8");
function showTutorialVideo8(){
    popup_video8.style.display="block";
}
closeVideo8.onclick=()=>popup_video8.style.display="none";
//interest
var popup_video9=document.getElementById("popup-video9");
var closeVideo9=document.getElementById("close9");
function showTutorialVideo9(){
    popup_video9.style.display="block";
}
closeVideo9.onclick=()=>popup_video9.style.display="none";
// end tutorial video
//end tutorial video
//start colour 
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
//end colour
//start picture
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

//end picture
//start age
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
//end age
//start multiplication
const tableInput = document.getElementById("tableInput");
const tableResult = document.getElementById("tableResult");

function generateTable() {
    const number = Number(tableInput.value);
    tableResult.innerHTML = ""; // Clear old results

    if (isNaN(number)) {
        tableResult.innerHTML = "<li>Please enter a valid number</li>";
        return;
    }

    for (let i = 1; i <= 12; i++) {
        const result = number * i;
        const listItem = document.createElement("li");
        listItem.textContent = `${number} × ${i} = ${result}`;
        tableResult.appendChild(listItem);
    }
}

//end multiplication
//start quiz
const mathQuestion = document.getElementById("mathQuestion");
const userAnswer = document.getElementById("userAnswer");
const mathResult = document.getElementById("mathResult");

let correctAnswer;

generateQuestion();

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operators = ["+", "-", "*", "/"];
    const operator = operators[Math.floor(Math.random() * operators.length)];

    switch (operator) {
        case "+":
            correctAnswer = num1 + num2;
            break;
        case "-":
            correctAnswer = num1 - num2;
            break;
        case "*":
            correctAnswer = num1 * num2;
            break;
        case "/":
            correctAnswer = (num1 / num2).toFixed(1); // one decimal place
            break;
    }

    mathQuestion.textContent = `What is ${num1} ${operator} ${num2}?`;
    userAnswer.value = "";
    mathResult.textContent = "";
}

function checkMathAnswer() {
    const userValue = userAnswer.value;

    if (userValue === "") {
        mathResult.textContent = "Please enter an answer.";
        return;
    }

    if (Number(userValue).toFixed(1) == correctAnswer) {
        mathResult.textContent = "Correct! ✅";
    } else {
        mathResult.textContent = `Wrong! ❌ The correct answer was ${correctAnswer}`;
    }

    setTimeout(generateQuestion, 2000); // new question after 2 seconds
}

//end quiz
//start length
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

//end length
//start area
const shapeSelect = document.getElementById("shapeSelect");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const areaResult = document.getElementById("areaResult");

function calculateArea() {
    const val1 = Number(input1.value);
    const val2 = Number(input2.value);
    const shape = shapeSelect.value;
    let area;

    switch (shape) {
        case "square":
            area = val1 * val1;
            areaResult.textContent = `Area: ${area.toFixed(2)}`;
            break;
        case "rectangle":
            area = val1 * val2;
            areaResult.textContent = `Area: ${area.toFixed(2)}`;
            break;
        case "triangle":
            area = 0.5 * val1 * val2;
            areaResult.textContent = `Area: ${area.toFixed(2)}`;
            break;
        case "circle":
            area = Math.PI * val1 * val1;
            areaResult.textContent = `Area: ${area.toFixed(2)}`;
            break;
        default:
            areaResult.textContent = "Select a shape";
    }
}

//end area
//start temperature
const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convert(){

    if(toFahrenheit.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
    }
    else if(toCelsius.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "°C";
    }
    else{
        result.textContent = "Select a unit"; 
    }
}

//end temperature
//start interest
function calculate(){

    const totalAmount = document.getElementById("total-amount");
    const principalInput = document.getElementById("principal");
    const rateInput = document.getElementById("rate");
    const yearsInput = document.getElementById("years");

    let principal = Number(principalInput.value);
    let rate = Number(rateInput.value / 100);
    let years = Number(yearsInput.value);

    if(principal < 0 || isNaN(principal)){
        principal = 0;
        principalInput.value = 0;
    }
    if(rate < 0 || isNaN(rate)){
        rate = 0;
        rateInput.value = 0;
    }
    if(years < 0 || isNaN(years)){
        years = 0;
        yearsInput.value = 0;
    }

    const result = principal * Math.pow((1 + rate / 1), 1 * years)

    totalAmount.textContent = result.toLocaleString(undefined, {style: "currency", currency: "USD"});
}
//end interest
// end second column
//start calendar
const calendarTitle = document.getElementById("calendarTitle");
const calendarBody = document.getElementById("calendarBody");

let currentDate = new Date();

function renderCalendar(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const today = new Date();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  calendarTitle.textContent = `${monthNames[month]} ${year}`;
  calendarBody.innerHTML = "";

  let dateCount = 1;
  for (let i = 0; i < 6; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < 7; j++) {
      const cell = document.createElement("td");

      if (i === 0 && j < firstDay) {
        cell.textContent = "";
      } else if (dateCount <= daysInMonth) {
        cell.textContent = dateCount;

        if (
          year === today.getFullYear() &&
          month === today.getMonth() &&
          dateCount === today.getDate()
        ) {
          cell.classList.add("today");
        }

        dateCount++;
      } else {
        cell.textContent = "";
      }

      row.appendChild(cell);
    }

    calendarBody.appendChild(row);

    if (dateCount > daysInMonth) break;
  }
}

function prevMonth() {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
}

function nextMonth() {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
}

// Initial render
renderCalendar(currentDate);

//end calendar
//start digital clock
const clockDisplay = document.getElementById("digitalClock");

function updateClock() {
  const now = new Date();

  let hours = now.getHours().toString().padStart(2, "0");
  let minutes = now.getMinutes().toString().padStart(2, "0");
  let seconds = now.getSeconds().toString().padStart(2, "0");

  clockDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call

//end digital clock
