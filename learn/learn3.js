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
