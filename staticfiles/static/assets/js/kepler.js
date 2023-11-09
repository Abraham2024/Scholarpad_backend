function calculate() {
    const g = 10;
    const G = 6.67430e-11; // Gravitational constant (m^3 kg^−1 s^−2 , acceleration due to gravity m/s²)
    const mass = parseExponential(document.getElementById("massInput").value);
    const radius = parseExponential(document.getElementById("radiusInput").value);
    const resultType = document.getElementById("resultType").value;
    
    let result;
    if (resultType === "escapeVelocity") {
        result = Math.sqrt(2 * g * radius);
        document.getElementById("resultSection").textContent = `Escape Velocity (Ve) = ${result.toExponential(2)} m/s`;
    } else if (resultType === "velocityOfEarth") {
        result = Math.sqrt(2*G * mass / radius);
        document.getElementById("resultSection").textContent = `Velocity of the Earth (V) = ${result.toExponential(2)} m/s`;
    } else {
        document.getElementById("resultSection").textContent = "Please select a calculation type.";
    }
}

function parseExponential(str) {
    const regex = /([-+]?\d*\.?\d+)[eE]([-+]?\d+)/;
    const match = str.match(regex);
    if (match) {
        return parseFloat(match[1]) * Math.pow(10, parseFloat(match[2]));
    }
    return parseFloat(str);
}
