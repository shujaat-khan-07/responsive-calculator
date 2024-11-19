
function convertTemperature() {
    const temperatureInput = document.getElementById("temperatureInput").value;
    const unit = document.querySelector('input[name="unit"]:checked').value;
    const resultDiv = document.getElementById("result");

    // Validate input to ensure it is a number
    
    if (isNaN(temperatureInput)) {
        resultDiv.innerHTML = "Please enter a valid number.";
        return;
    }

    const temperature = parseFloat(temperatureInput);
    let convertedTemp, outputUnit;

    if (unit === "celsius") {
        convertedTemp = (temperature * 9/5) + 32;
        outputUnit = "Fahrenheit";
        const kelvin = temperature + 273.15;
        resultDiv.innerHTML = `${temperature} °C = ${convertedTemp.toFixed(2)} °F | ${kelvin.toFixed(2)} K`;
    } else if (unit === "fahrenheit") {
        convertedTemp = (temperature - 32) * 5/9;
        outputUnit = "Celsius";
        const kelvin = convertedTemp + 273.15;
        resultDiv.innerHTML = `${temperature} °F = ${convertedTemp.toFixed(2)} °C | ${kelvin.toFixed(2)} K`;
    } else if (unit === "kelvin") {
        convertedTemp = temperature - 273.15;
        const fahrenheit = (convertedTemp * 9/5) + 32;
        resultDiv.innerHTML = `${temperature} K = ${convertedTemp.toFixed(2)} °C | ${fahrenheit.toFixed(2)} °F`;
    }
}
