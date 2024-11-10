// Generar un número aleatorio entre 1 y 10
const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intentos = 5;

function adivinar() {
    const intento = parseInt(document.getElementById("intento").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(intento) || intento < 1 || intento > 10) {
        resultado.textContent = "Por favor, introduce un número válido entre 1 y 10.";
        return;
    }

    intentos--;

    if (intento === numeroSecreto) {
        resultado.textContent = "¡Felicidades! Has adivinado el número. 🎉";
        resultado.style.color = "green";
    } else if (intento < numeroSecreto) {
        resultado.textContent = `Muy bajo. Te quedan ${intentos} intentos.`;
        resultado.style.color = "orange";
    } else {
        resultado.textContent = `Muy alto. Te quedan ${intentos} intentos.`;
        resultado.style.color = "orange";
    }

    if (intentos === 0 && intento !== numeroSecreto) {
        resultado.textContent = `Lo siento, has perdido. El número era ${numeroSecreto}.`;
        resultado.style.color = "red";
    }

    if (intento === numeroSecreto || intentos === 0) {
        document.getElementById("intento").disabled = true;
        document.querySelector("button").disabled = true;
    }
}
