const wordContainer = document.getElementById('wordContainer');/*  variables palabra que hay que adivinar*/
const startButton = document.getElementById('startButton');/*palabra del boton*/
const usedLettersElement = document.getElementById('usedLetters');/*palabras utilizadas*/

let canvas = document.getElementById('canvas');/*inicializar canvas*/
let ctx = canvas.getContext('2d');/*utiliza dos dimensiones*/
ctx.canvas.width  = 0;/* ancho*/
ctx.canvas.height = 0;/*alto */

const bodyParts = [/*constantes para el juego valores para dibujar el juego d elos errores*/
    [4,2,1,1],
    [4,3,1,2],
    [3,5,1,1],
    [5,5,1,1],
    [3,3,1,1],
    [5,3,1,1]
];

let selectedWord;/*variables del juego termina el juego, palabra a divibar*/
let usedLetters;/*palbras que s eutlizaron*/
let mistakes;/*errores*/
let hits;/*aciertos*/

const addLetter = letter => {
    const letterElement = document.createElement('span');
    letterElement.innerHTML = letter.toUpperCase();
    usedLettersElement.appendChild(letterElement);
}

const addBodyPart = bodyPart => {
    ctx.fillStyle = '#fff';
    ctx.fillRect(...bodyPart);
};

const wrongLetter = () => {
    addBodyPart(bodyParts[mistakes]);
    mistakes++;
    if(mistakes === bodyParts.length) endGame();
}

const endGame = () => {
    document.removeEventListener('keydown', letterEvent);
    startButton.style.display = 'block';
}

const correctLetter = letter => {
    const { children } =  wordContainer;
    for(let i = 0; i < children.length; i++) {
        if(children[i].innerHTML === letter) {
            children[i].classList.toggle('hidden');
            hits++;
        }
    }
    if(hits === selectedWord.length) endGame();
}

const letterInput = letter => {
    if(selectedWord.includes(letter)) {
        correctLetter(letter);
    } else {
        wrongLetter();
    }
    addLetter(letter);
    usedLetters.push(letter);
};

const letterEvent = event => {
    let newLetter = event.key.toUpperCase();
    if(newLetter.match(/^[a-zñ]$/i) && !usedLetters.includes(newLetter)) {
        letterInput(newLetter);
    };
};

const drawWord = () => {
    selectedWord.forEach(letter => {
        const letterElement = document.createElement('span');
        letterElement.innerHTML = letter.toUpperCase();
        letterElement.classList.add('letter');
        letterElement.classList.add('hidden');
        wordContainer.appendChild(letterElement);
    });
};

const selectRandomWord = () => {
    let word = words[Math.floor((Math.random() * words.length))].toUpperCase();
    selectedWord = word.split('');
};

const drawHangMan = () => {/*
    ctx.canvas.width  = 120;
    ctx.canvas.height = 160;
    ctx.scale(20, 20);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#d95d39';
    ctx.fillRect(0, 7, 4, 1);
    ctx.fillRect(1, 0, 1, 8);
    ctx.fillRect(2, 0, 3, 1);
    ctx.fillRect(4, 1, 1, 1);
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
    document.addEventListener('keydown', letterEvent);
};

startButton.addEventListener('click', startGame);