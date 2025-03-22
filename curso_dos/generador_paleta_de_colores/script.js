const palleteContainer = document.getElementById('palleteContainer');/*variable la paleta de colores*/ 
const colorRange = document.getElementById('colorRange');
const colorValues = ['1','2','3','4','6','7','8','9','A','B','C','D','E','F'];/*asigna colores alas variable hexadecimal*/
const PALLETE_SIZE = 5;/*cantidad de color de paleta*/

const createPallete = () => {/*crear paleta*/
    palleteContainer.innerHTML = '';/*tamaño de la paleta cinco veces*/
    for(let i = 0; i < PALLETE_SIZE; i++) {/*tamaño*/
        const palleteElement = document.createElement('div');/*creado elementos*/
        palleteElement.classList.add('palleteItem');/*estilos*/
        palleteContainer.appendChild(palleteElement);/*creado valor a contenedor*/
    }
    updatePallete();/*generar los valores*/
}

const colorize = (element) => {/*darle color a cada elemento*/
    let color = '#';/*crea variable aleatorio*/
    for(let i = 0; i < 6; i++) {/*se colores valor hexadecimal (seis carcateres)*/
        const randomElement = colorValues[Math.floor(Math.random() * colorValues.length)];/*elemento random entre 0-6*/
        color += randomElement;/*color agreag el elemento*/
    };
    element.style.backgroundColor = color; /*agrega color al elemento*/
    element.innerHTML = `<span class='colorHex'>${color}</span>`; /*agrupa conjunto*/  
}

const updatePallete = () => {/*genera los colores*/
    for (let i = 0; i < palleteContainer.children.length; i++) {/*itera con los elementosy color de texto*/
        colorize(palleteContainer.children[i])/*elementos que los itera/guarda*/
    }
};

createPallete();/*crear paleta*/