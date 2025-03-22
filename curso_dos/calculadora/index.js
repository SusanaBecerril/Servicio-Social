const displayValorAnterior = document.getElementById('valor-anterior');/*llamada del valor de variables*/
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual);/* se muestra el calculo en el cuadro o display d enumeros actuales*/

botonesNumeros.forEach(boton => {/*cada boton agregue un nuevo nuevo*/
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {/*asignar los operadores*/
    boton.addEventListener('click', () => display.computar(boton.value))/*recibe el distinto operacion los calculos*/
});