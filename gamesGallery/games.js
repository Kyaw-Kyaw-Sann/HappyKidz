// start menu
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
const body=document.getElementById("home");

function light(){//default position
    btn1.style.left="0";
     body.style.background="#2a5298";
}
function dark(){
    btn1.style.left="55px";
    body.style.background="rgba(0, 0, 139, 0.898)"
}
// end toggle //
/*start display toggle*/
var rock=document.getElementById("rockGame");
var dice=document.getElementById("diceRoller");
var tic=document.getElementById("tictactoe");
var pong=document.getElementById("pong");
var snake=document.getElementById("snakeGameWrapper");
function Rock(){
    // gameStop();
    rock.style.display="flex";
    dice.style.display="none";
    tic.style.display="none";
    pong.style.display="none";
    snake.style.display="none";
}
function Dice(){
    // gameStop();
    dice.style.display="block";
    rock.style.display="none";
    tic.style.display="none";
    pong.style.display="none";
    snake.style.display="none";
}
function Tic(){
    // gameStop();
    tic.style.display="block";
    rock.style.display="none";
    dice.style.display="none";
    pong.style.display="none";
    snake.style.display="none";
}
function Pong(){
    pong.style.display="block";
    rock.style.display="none";
    dice.style.display="none";
    tic.style.display="none";
    snake.style.display="none";
}
function Snake(){
    // gameStop();
    snake.style.display="block";
    rock.style.display="none";
    dice.style.display="none";
    tic.style.display="none";
    pong.style.display="none";
}
/* end display toggle*/
/*start rock paper scissor*/
const choices=["rock", "paper", "scissors"];
const playerDisplay=document.getElementById("playerDisplay");
const computerDisplay=document.getElementById("computerDisplay");
const resultDisplay=document.getElementById("resultDisplay");
const playerScoreDisplay=document.getElementById("playerScoreDisplay");
const computerScoreDisplay=document.getElementById("computerScoreDisplay");
let playerScore=0;
let computerScore=0;

function playGame(playerChoice){
    const computerChoice=choices[Math.floor(Math.random()*3)];
    let result="";

    if(playerChoice === computerChoice){
        result = "It's a tie";
    }else{
        switch(playerChoice){
            case "rock": 
            result =(computerChoice === "scissors") ? "You Win!" : "You Lose!";
            break;
            case "paper": 
            result =(computerChoice === "rock") ? "You Win!" : "You Lose!";
            break;
            case "scissors": 
            result =(computerChoice === "paper") ? "You Win!" : "You Lose!";
            break;
        }
    }
    // if(computerChoice=="rock") computerChoice="👊";
    // if(computerChoice=="paper") computerChoice="✋";
    // if(computerChoice=="scissors") computerChoice="👊";
    //playerDisplay.textContent=`PLAYER: ${playerChoice}`;
    computerDisplay.textContent=`COMPUTER: ${computerChoice}`;
    resultDisplay.textContent=result;
    //This concept is very important
   resultDisplay.classList.remove("greenText","redText");//Why here? Now ,i know this concept because this is for altrenative click
    switch(result){
        // case "It's a tie":
        //     resultDisplay.classList.add("whiteText");
        case "You Win!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent=playerScore;
            break;
        case "You Lose!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent=computerScore;
            break; 
}
}
/*end rock paper scissor*/
/*start dice roller*/
const diceIcons=document.getElementById("diceIcons");
const diceIcons2=document.getElementById("diceIcons2");
const icon_names=['one','two','three','four','five','six'];
const result=document.getElementById("result");
var value1=0;
var value2=0;
function rollDice(player){
    value1=Math.floor(Math.random() * 6) + 1;//6-1+1,1
    value2=Math.floor(Math.random() * 6) + 1;
    if(player == "player1"){
    diceIcons.innerHTML=`<i class="fa-solid fa-dice-${icon_names[value1-1]}"></i>`;
    }
    if(player == "player2"){
        diceIcons2.innerHTML=`<i class="fa-solid fa-dice-${icon_names[value2-1]}"></i>`;
    }
    // if(value1 =Number && value2 != Number)
}
// alert(value1);

if(value1 == value2){
    result.textContent="It is a tie";
}
if(value1 > value2){
    result.textContent="Player1 win!";
}
if(value1 < value2){
    result.textContent="Player2 win!";
}
/*end dice roller*/
/*start tic tac toe*/
const cells = document.querySelectorAll(".cell");//get elements that need to work with user interaction
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";//default player or first player
let running = false;

initializeGame();//default running function

function initializeGame(){
    cells.forEach(cell => cell.addEventListener("click", cellClicked));//any cell click call cellClicked function
    restartBtn.addEventListener("click", restartGame);//restart button click call restartGame function
    statusText.textContent = `${currentPlayer}'s turn`;//whose turn
    running = true;
}
function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex");//get cellIndex

    if(options[cellIndex] != "" || !running){//something has in clicked cell or running false?
        return; //if any one condition is true,return nothing 
    }

    updateCell(this, cellIndex);//if nothing is true,it will work this two functions
    checkWinner();
}
function updateCell(cell, index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}
function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statusText.textContent = `${currentPlayer}'s turn`;
}
function checkWinner(){//i don't understand this function well
    let roundWon = false;

    for(let i = 0; i < winConditions.length; i++){
        const condition = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            roundWon = true;
            break;
        }
    }

    if(roundWon){
        statusText.textContent = `${currentPlayer} wins!`;
        running = false;
    }
    else if(!options.includes("")){
        statusText.textContent = `Draw!`;
        running = false;
    }
    else{
        changePlayer();
    }
}
function restartGame(){//This is simple
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
}
/*end tic tac toe*/
/*start pong*/
// const gameBoard = document.querySelector("#gameBoard");
// const ctx = gameBoard.getContext("2d");
// const scoreText = document.querySelector("#scoreText");
// const resetBtn = document.querySelector("#resetBtn");
// const gameWidth = gameBoard.width;
// const gameHeight = gameBoard.height;
// const boardBackground = "black";
// const paddle1Color = "blue";
// const paddle2Color = "red";
// const paddleBorder = "black";
// const ballColor = "white";
// const ballBorderColor = "black";
// const ballRadius = 12.5;
// const paddleSpeed = 50;
// let intervalID;
// let ballSpeed;
// let ballX = gameWidth / 2;
// let ballY = gameHeight / 2;
// let ballXDirection = 0;
// let ballYDirection = 0;
// let player1Score = 0;
// let player2Score = 0;
// let paddle1 = {
//     width: 25,
//     height: 100,
//     x: 0,
//     y: 0
// };
// let paddle2 = {
//     width: 25,
//     height: 100,
//     x: gameWidth - 25,
//     y: gameHeight - 100
// };

// window.addEventListener("keydown", changeDirection);
// resetBtn.addEventListener("click", resetGame);

// // gameStart();

// function gameStart(){
//     createBall();
//     nextTick();
// };
// function nextTick(){
//     intervalID = setTimeout(() => {
//         clearBoard();
//         drawPaddles();
//         moveBall();
//         drawBall(ballX, ballY);
//         checkCollision();
//         nextTick();
//     }, 10)
// };
// function clearBoard(){
//     ctx.fillStyle = boardBackground;
//     ctx.fillRect(0, 0, gameWidth, gameHeight);
// };
// function drawPaddles(){
//     ctx.strokeStyle = paddleBorder;

//     ctx.fillStyle = paddle1Color;
//     ctx.fillRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
//     ctx.strokeRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);

//     ctx.fillStyle = paddle2Color;
//     ctx.fillRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
//     ctx.strokeRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
// };
// function createBall(){
//     ballSpeed = 1;
//     if(Math.round(Math.random()) == 1){
//         ballXDirection =  1; 
//     }
//     else{
//         ballXDirection = -1; 
//     }
//     if(Math.round(Math.random()) == 1){
//         ballYDirection = Math.random() * 1; //more random directions
//     }
//     else{
//         ballYDirection = Math.random() * -1; //more random directions
//     }
//     ballX = gameWidth / 2;
//     ballY = gameHeight / 2;
//     drawBall(ballX, ballY);
// };
// function moveBall(){
//     ballX += (ballSpeed * ballXDirection);
//     ballY += (ballSpeed * ballYDirection);
// };
// function drawBall(ballX, ballY){
//     ctx.fillStyle = ballColor;
//     ctx.strokeStyle = ballBorderColor;
//     ctx.lineWidth = 2;
//     ctx.beginPath();
//     ctx.arc(ballX, ballY, ballRadius, 0, 2 * Math.PI);
//     ctx.stroke();
//     ctx.fill();
// };
// function checkCollision(){
//     if(ballY <= 0 + ballRadius){
//         ballYDirection *= -1;
//     }
//     if(ballY >= gameHeight - ballRadius){
//         ballYDirection *= -1;
//     }
//     if(ballX <= 0){
//         player2Score+=1;
//         updateScore();
//         createBall();
//         return;
//     }
//     if(ballX >= gameWidth){
//         player1Score+=1;
//         updateScore();
//         createBall();
//         return;
//     }
//     if(ballX <= (paddle1.x + paddle1.width + ballRadius)){
//         if(ballY > paddle1.y && ballY < paddle1.y + paddle1.height){
//             ballX = (paddle1.x + paddle1.width) + ballRadius; // if ball gets stuck
//             ballXDirection *= -1;
//             ballSpeed += 1;
//         }
//     }
//     if(ballX >= (paddle2.x - ballRadius)){
//         if(ballY > paddle2.y && ballY < paddle2.y + paddle2.height){
//             ballX = paddle2.x - ballRadius; // if ball gets stuck
//             ballXDirection *= -1;
//             ballSpeed += 1;
//         }
//     }
// };
// function changeDirection(event){
//     const keyPressed = event.keyCode;
//     const paddle1Up = 87;
//     const paddle1Down = 83;
//     const paddle2Up = 38;
//     const paddle2Down = 40;

//     switch(keyPressed){
//         case(paddle1Up):
//             if(paddle1.y > 0){
//                 paddle1.y -= paddleSpeed;
//             }
//             break;
//         case(paddle1Down):
//             if(paddle1.y < gameHeight - paddle1.height){
//                 paddle1.y += paddleSpeed;
//             }
//             break;
//         case(paddle2Up):
//             if(paddle2.y > 0){
//                 paddle2.y -= paddleSpeed;
//             }
//             break;
//         case(paddle2Down):
//             if(paddle2.y < gameHeight - paddle2.height){
//                 paddle2.y += paddleSpeed;
//             }
//             break;
//     }
// };
// function updateScore(){
//     scoreText.textContent = `${player1Score} : ${player2Score}`;
// };
// function resetGame(){
//     player1Score = 0;
//     player2Score = 0;
//     paddle1 = {
//         width: 25,
//         height: 100,
//         x: 0,
//         y: 0
//     };
//     paddle2 = {
//         width: 25,
//         height: 100,
//         x: gameWidth - 25,
//         y: gameHeight - 100
//     };
//     ballSpeed = 1;
//     ballX = 0;
//     ballY = 0;
//     ballXDirection = 0;
//     ballYDirection = 0;
//     updateScore();
//     clearInterval(intervalID);
//     gameStart();
// };
// function gameStop(){
//     clearInterval(intervalID);
// }
/*end pong*/
/*start snake*/
const snakeCanvas = document.querySelector("#snakeCanvas");
const snakeCanvasCtx = snakeCanvas.getContext("2d");
const snakeScoreDisplay = document.querySelector("#scoreDisplay");
const snakeResetButton = document.querySelector("#restartButton");
const canvasWidth = snakeCanvas.width;
const canvasHeight = snakeCanvas.height;
const canvasBackgroundColor = "white";
const snakeBodyColor = "lightgreen";
const snakeBodyBorder = "black";
const snakeFoodColor = "red";
const segmentSize = 25;
let isSnakeRunning = false;
let velocityX = segmentSize;
let velocityY = 0;
let foodPosX;
let foodPosY;
let currentScore = 0;
let snakeSegments = [
    {x: segmentSize * 4, y: 0},
    {x: segmentSize * 3, y: 0},
    {x: segmentSize * 2, y: 0},
    {x: segmentSize, y: 0},
    {x: 0, y: 0}
];

window.addEventListener("keydown", updateSnakeDirection);
snakeResetButton.addEventListener("click", restartSnakeGame);

startSnakeGame();

function startSnakeGame(){
    isSnakeRunning = true;
    snakeScoreDisplay.textContent = currentScore;
    generateFood();
    drawFood();
    gameLoop();
};

function gameLoop(){
    if(isSnakeRunning){
        setTimeout(()=>{
            clearCanvas();
            drawFood();
            updateSnakePosition();
            drawSnake();
            checkCollision();
            gameLoop();
        }, 75);
    } else {
        showGameOverMessage();
    }
};

function clearCanvas(){
    snakeCanvasCtx.fillStyle = canvasBackgroundColor;
    snakeCanvasCtx.fillRect(0, 0, canvasWidth, canvasHeight);
};

function generateFood(){
    function getRandomFoodPosition(min, max){
        const randNum = Math.round((Math.random() * (max - min) + min) / segmentSize) * segmentSize;
        return randNum;
    }
    foodPosX = getRandomFoodPosition(0, canvasWidth - segmentSize);
    foodPosY = getRandomFoodPosition(0, canvasWidth - segmentSize);
};

function drawFood(){
    snakeCanvasCtx.fillStyle = snakeFoodColor;
    snakeCanvasCtx.fillRect(foodPosX, foodPosY, segmentSize, segmentSize);
};

function updateSnakePosition(){
    const newHead = {
        x: snakeSegments[0].x + velocityX,
        y: snakeSegments[0].y + velocityY
    };
    snakeSegments.unshift(newHead);

    if(newHead.x === foodPosX && newHead.y === foodPosY){
        currentScore += 1;
        snakeScoreDisplay.textContent = currentScore;
        generateFood();
    } else {
        snakeSegments.pop();
    }
};

function drawSnake(){
    snakeCanvasCtx.fillStyle = snakeBodyColor;
    snakeCanvasCtx.strokeStyle = snakeBodyBorder;
    snakeSegments.forEach(part => {
        snakeCanvasCtx.fillRect(part.x, part.y, segmentSize, segmentSize);
        snakeCanvasCtx.strokeRect(part.x, part.y, segmentSize, segmentSize);
    });
};

function updateSnakeDirection(event){
    const key = event.keyCode;
    const LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;

    const goingUp = (velocityY === -segmentSize);
    const goingDown = (velocityY === segmentSize);
    const goingRight = (velocityX === segmentSize);
    const goingLeft = (velocityX === -segmentSize);

    switch(true){
        case (key === LEFT && !goingRight):
            velocityX = -segmentSize;
            velocityY = 0;
            break;
        case (key === UP && !goingDown):
            velocityX = 0;
            velocityY = -segmentSize;
            break;
        case (key === RIGHT && !goingLeft):
            velocityX = segmentSize;
            velocityY = 0;
            break;
        case (key === DOWN && !goingUp):
            velocityX = 0;
            velocityY = segmentSize;
            break;
    }
};

function checkCollision(){
    const head = snakeSegments[0];
    if (head.x < 0 || head.x >= canvasWidth || head.y < 0 || head.y >= canvasHeight) {
        isSnakeRunning = false;
    }

    for(let i = 1; i < snakeSegments.length; i++){
        if(snakeSegments[i].x === head.x && snakeSegments[i].y === head.y){
            isSnakeRunning = false;
        }
    }
};

function showGameOverMessage(){
    snakeCanvasCtx.font = "50px MV Boli";
    snakeCanvasCtx.fillStyle = "black";
    snakeCanvasCtx.textAlign = "center";
    snakeCanvasCtx.fillText("GAME OVER!", canvasWidth / 2, canvasHeight / 2);
    isSnakeRunning = false;
};

function restartSnakeGame(){
    currentScore = 0;
    velocityX = segmentSize;
    velocityY = 0;
    snakeSegments = [
        {x: segmentSize * 4, y: 0},
        {x: segmentSize * 3, y: 0},
        {x: segmentSize * 2, y: 0},
        {x: segmentSize, y: 0},
        {x: 0, y: 0}
    ];
    startSnakeGame();
};

/*end snake*/