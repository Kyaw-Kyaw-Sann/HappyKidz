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
