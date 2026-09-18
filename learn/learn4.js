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
