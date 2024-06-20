document.getElementById('temperatureForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const temperature = parseFloat(document.getElementById('temperature').value);
    const resultFahrenheit = document.getElementById('resultFahrenheit');
    const calculation = document.getElementById('calculation');
    const explanation = document.getElementById('explanation');
    let convertedTemperature;
    let calcExplanation;
    let detailedExplanation;

    if (isNaN(temperature)) {
        resultFahrenheit.value = '';
        calculation.innerHTML = 'Please enter a valid number.';
        explanation.innerHTML = '';
        return;
    }

    convertedTemperature = (temperature * 9/5) + 32;
    calcExplanation = `${temperature}°C * (9/5) + 32 = ${convertedTemperature.toFixed(2)}°F`;
    detailedExplanation = `Suhu ${temperature} derajat Celsius (°C) sama dengan ${convertedTemperature.toFixed(2)} derajat Fahrenheit (°F).`;

    resultFahrenheit.value = convertedTemperature.toFixed(2);
    calculation.innerHTML = `<strong>Cara Kalkulasi:</strong> <br> ${calcExplanation}`;
    explanation.innerHTML = `<strong>Cara Konversi Dari Celsius (°C) ke Fahrenheit (°F)</strong><br>Suhu dalam derajat Fahrenheit (°F) sama dengan suhu dalam derajat Celsius (°C) kali 9/5 tambah 32.<br><br> S(°F) = (S(°C) × 9/5) + 32 <br> atau <br> S(°F) = (S(°C) × 1.8) + 32`;
});

document.getElementById('reverseButton').addEventListener('click', function() {
    const celsius = document.getElementById('temperature').value;
    const fahrenheit = document.getElementById('resultFahrenheit').value;

    if (celsius && fahrenheit) {
        document.getElementById('temperature').value = fahrenheit;
        document.getElementById('resultFahrenheit').value = '';
        document.getElementById('calculation').innerHTML = '';
        document.getElementById('explanation').innerHTML = '';
    }
});
