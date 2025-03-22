const wordContainer = document.getElementById('wordContainer');/*  variables palabra que hay que adivinar*/
const startButton = document.getElementById('startButton');/*palabra del boton*/
const usedLettersElement = document.getElementById('usedLetters');/*palabras utilizadas*/

let canvas = document.getElementById('canvas');/*inicializar canvas*/
let ctx = canvas.getContext('2d');/*utiliza dos dimensiones*/
ctx.canvas.width  = 0;/* ancho*/
ctx.canvas.height = 0;/*alto */

const bodyParts = [/*constantes para el juego valores para dibujar el juego d elos errores*/
    [4,2,1,1],/*cabeza*/
    [4,3,1,2],/*cuello*/
    [3,5,1,1],/*mano izquierdo*/
    [5,5,1,1],/*mano derecho*/
    [3,3,1,1],/*pie izquierdo*/
    [5,3,1,1]/*pie derecho*/
];

let selectedWord;/*variables del juego termina el juego, palabra a divibar*/
let usedLetters;/*palbras que s eutlizaron*/
let mistakes;/*errores*/
let hits;/*aciertos*/

const addLetter = letter => {/*añadir la letra*/
    const letterElement = document.createElement('span');/*crea el drupo de palabras*/
    letterElement.innerHTML = letter.toUpperCase();/*asigna letra*/
    usedLettersElement.appendChild(letterElement);/*guarda las letras*/
}

const addBodyPart = bodyPart => {/* partes del cuerpo*/
    ctx.fillStyle = '#fff';/*dibuje color blanco*/
    ctx.fillRect(...bodyPart);/*parte del cuerpo*/
};

const wrongLetter = () => {/*palabra incorrecta*/
    addBodyPart(bodyParts[mistakes]);/*agrega parte del cuerpo*/
    mistakes++;/*sumar parte del error, cuerpo*/
    if(mistakes === bodyParts.length) endGame();
}

const endGame = () => {/*termino el juego, partida*/
    document.removeEventListener('keydown', letterEvent);/*no ingrese letras*/
    startButton.style.display = 'block';/*nuevamente se muestra el boton iniciar*/
}

const correctLetter = letter => {/*si esta correcto la palabra*/
    const { children } =  wordContainer;/*donde esta la plabra en el cuadro*/
    for(let i = 0; i < children.length; i++) {/*span grupo de texto*/
        if(children[i].innerHTML === letter) {/*si es menor la letra*/
            children[i].classList.toggle('hidden');/* si ingreso la palabra corecto, muestra*/
            hits++;/*suma acierto*/
        }
    }
    if(hits === selectedWord.length) endGame();/* cierra*/
}

const letterInput = letter => {/*si ingresa una letra */
    if(selectedWord.includes(letter)) {/*si esta correcto*/
        correctLetter(letter);/*da como correcto*/
    } else {
        wrongLetter();/*rompe letra*/
    }
    addLetter(letter);/*añade letra*/
    usedLetters.push(letter);/*agrega la letra*/
};

const letterEvent = event => {/* la palabra que se ejcuto*/
    let newLetter = event.key.toUpperCase();/*compara la letra en mayusculas*/
    if(newLetter.match(/^[a-zñ]$/i) && !usedLetters.includes(newLetter)) {/*letra de la a-z es corecto, numero incorrecto*/
        letterInput(newLetter);/*letra que ingresa el usuario*/
    };
};

const drawWord = () => {/*pintar la palabra*/
    selectedWord.forEach(letter => {/*selecciona la palabra*/
        const letterElement = document.createElement('span');/*elemento tipo span agrupa e*/
        letterElement.innerHTML = letter.toUpperCase();/*contenido la letra en mayuscula toUpperCase*/
        letterElement.classList.add('letter');/*clase letra*/
        letterElement.classList.add('hidden');/* que no se vea la letra al inicio*/
        wordContainer.appendChild(letterElement);/* llama y agrega la letra*/
    });
};

const selectRandomWord = () => {/* palabra aleorio*/
    let word = words[Math.floor((Math.random() * words.length))].toUpperCase();/*selecciona la palabra */
    selectedWord = word.split('');/*palabra selecionada quede separado*/
};

const drawHangMan = () => {/*dibujar*/
    ctx.canvas.width  = 120;/*ancho*/
    ctx.canvas.height = 160;/*alto*/
    ctx.scale(20, 20);/*pixeles e vean grandes*/
    ctx.clearRect(0, 0, canvas.width, canvas.height);/*borra lo que existe*/
    ctx.fillStyle = '#d95d39';/*pinta lo que simula la madera dond esta colgado la persona, color*/
    ctx.fillRect(0, 7, 4, 1);/*dibuja la parte da abajo de la madera*/
    ctx.fillRect(1, 0, 1, 8);/*dibuja el alto de la madera*/
    ctx.fillRect(2, 0, 3, 1);/*dibuja el largo de arriba */
    ctx.fillRect(4, 1, 1, 1);/* dibuja lo pequeño donde esta colgado*/
};

const startGame = () => {/*dar click en el boton inicia el juego*/
    usedLetters = [];/*limpiar el juego*/
    mistakes = 0;
    hits = 0;
    wordContainer.innerHTML = '';/*el contenedor esta vacio*/
    usedLettersElement.innerHTML = '';/*letras usadas*/
    startButton.style.display = 'none';/*desaparece el boton start*/
    drawHangMan();
    selectRandomWord();
    drawWord();
    document.addEventListener('keydown', letterEvent);/*agrega la palabras el usuario*/
};

startButton.addEventListener('click', startGame);/*click en el boton iniciar*/