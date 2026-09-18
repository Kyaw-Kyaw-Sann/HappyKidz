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
const body=document.getElementById("bodyColor")
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
//start gift
const cells = document.querySelectorAll(".cell");
const goCell = document.getElementById("cell5");
const resultInput = document.getElementById("drawResult");
const statusText = document.getElementById("statusText");

goCell.addEventListener("click", startLuckyDraw);

function startLuckyDraw() {
    // statusText.textContent = "Drawing...";
    let index = 0;
    let totalCycles = 3; // how many full loops before stopping
    let blinkCount = 0;
    const drawOrder = Array.from(cells).filter((cell, i) => i !== 4); // exclude "Go" button

    function blinkNext() {
        if(statusText.textContent != "🎉 You got a prize!"){
        // Clear all highlights first
        drawOrder.forEach(cell => cell.classList.remove("blinking"));

        // Highlight current cell
        drawOrder[index].classList.add("blinking");

        index = (index + 1) % drawOrder.length;
        blinkCount++;

        if (blinkCount < drawOrder.length * totalCycles + Math.floor(Math.random() * drawOrder.length)) {
            setTimeout(blinkNext, 150); // speed of blink
        } else {
            // Final selected prize
            const winnerCell = drawOrder[(index + drawOrder.length - 1) % drawOrder.length];
            const prize = winnerCell.textContent;
            statusText.textContent = "🎉 You got a prize!";
            resultInput.value = `🎁 Prize: ${prize}`;
            winnerCell.classList.add("winner");
        }
    }
    else{
        resultInput.value = `❌You have only one chance to draw!`;
    }
    }
    blinkNext();

}


//end gift