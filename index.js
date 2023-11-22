/*1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.
*/

const getAleatorio = () => Math.floor(Math.random() * 100) + 1;
const ingreso = document.querySelector(".ingreso");
const btn = document.getElementById("btn");
const otraVez = document.querySelector("#otraVez");
let intentos = 5;
let aleatorio = 0;
const info = document.querySelector(".info");
info.innerText = `Tienes ${intentos} para lograrlo!`;
function show() {
    btn.setAttribute("class", "d-none");
    ingreso.setAttribute("class", "d-flex col-12 col-md-6 col-lg-4");
    aleatorio = getAleatorio();
}
const resultado = document.getElementById("resultado");
function reset() {
    aleatorio = getAleatorio();
    resultado.innerText = "";
    otraVez.setAttribute("class", "d-none");
}

function probar() {
    intentos--;
    if (intentos < 0) {
        resultado.innerText = `PERDISTE!! el numero magico era el ${aleatorio}`;
        otraVez.setAttribute("class", "d-block btn btn-outline-success");
        intentos = 5;
    } else {
        const ingreso = document.getElementById("intento").value;
        if (ingreso > aleatorio) {
            alert("Prueba con un numero menor!");
        } else if (ingreso < aleatorio) {
            alert("Sigue intentando con un numero mayor!");
        } else {
            resultado.innerText = `ADIVINASTE!! el numero era el ${aleatorio}`;
            otraVez.setAttribute("class", "d-block btn btn-outline-success");
            intentos = 5;
        }
    }
    info.innerText = `Tienes ${intentos} para lograrlo!`;
}
