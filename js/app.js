// 1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
// Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.

document.addEventListener("DOMContentLoaded", function () {
  let numeroMagico;

  // Función para comenzar el juego
  document.getElementById("startGame").addEventListener("click", function () {
    numeroMagico = Math.floor(Math.random() * 100) + 1; // Genera un número aleatorio entre 1 y 100
    document.getElementById("gameArea").style.display = "block";
  });

  // Función para manejar el envío del formulario
  document.getElementById("submitGuess").addEventListener("cli", function (e) {
    e.preventDefault(); // Evita que el formulario se envíe y recargue la página

    const guessInput = document.getElementById("guessInput");
    const userGuess = parseInt(guessInput.value); // Asegura que sea un número entero

    if (isNaN(userGuess)) {
      alert("Por favor, ingresa un número válido.");
      return;
    }

    if (userGuess === numeroMagico) {
      alert("¡Felicidades! Adivinaste el número mágico.");
      document.getElementById("gameArea").style.display = "none"; // Oculta el área de juego
    } else if (userGuess < numeroMagico) {
      alert("El número es mayor. ¡Intenta de nuevo!");
    } else {
      alert("El número es menor. ¡Intenta de nuevo!");
    }

    guessInput.value = ""; // Limpia el input después de cada intento
  });
});
