function calculator() {
    const G = 6.67430e-11; // Gravitational constant (m^3 kg^−1 s^−2)
    const mass = parseExponential(document.getElementById("massInput").value);
    let distance, gravity;

    if (document.getElementById("distanceInput").value !== "") {
        distance = parseExponential(document.getElementById("distanceInput").value);
        gravity = (G * mass) / Math.pow(distance, 2);
        document.getElementById("result").textContent = `Acceleration due to Gravity (g) = ${gravity.toExponential(2)} m/s²`;
    } else if (document.getElementById("gravityInput").value !== "") {
        gravity = parseExponential(document.getElementById("gravityInput").value);
        distance = Math.sqrt((G * mass) / gravity);
        document.getElementById("resut").textContent = `Distance from the Center (r) = ${distance.toExponential(2)} meters`;
    } else {
        document.getElementById("resut").textContent = "Please enter either Distance (r) or Acceleration due to Gravity (g).";
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
