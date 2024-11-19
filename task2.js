
let displayValue = "";  


function updateDisplay() {
    document.getElementById("display").innerText = displayValue || "0";
}


function clearDisplay() {
    displayValue = "";
    updateDisplay();
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}


function appendNumber(number) {
    if (number === "." && displayValue.includes(".")) return;
    displayValue += number;
    updateDisplay();
}


function appendOperator(operator) {
    const lastChar = displayValue.slice(-1);
    if (["+", "-", "*", "/"].includes(lastChar)) return; 
    displayValue += operator;
    updateDisplay();
}


function calculateResult() {
    try {
       
        displayValue = String(eval(displayValue.replace("×", "*").replace("÷", "/")));
        updateDisplay();
    } catch (error) {
        displayValue = "Error";
        updateDisplay();
        setTimeout(clearDisplay, 1000); 
    }
}
