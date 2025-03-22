class Display {/*clase que interactua con los botones*/
    constructor(displayValorAnterior, displayValorActual) {/* valor anterioires o actuales*/
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;/* tipo de usuario que este utilizando*/
        this.valorActual = '';/*numero que guarda*/
        this.valorAnterior = '';/*valor anterior*/
        this.signos = {/* los signos*/
            sumar: '+',
            dividir: '%',
            multiplicar: 'x',
            restar: '-', 
        }
    }

    borrar() {/*borra los numeros del boton*/
        this.valorActual = this.valorActual.toString().slice(0,-1);/* recortarlo en su ultima posocision -1*/
        this.imprimirValores();
    }

    borrarTodo() {/* borra el quitar todos los valora actuales y anterioires*/
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    computar(tipo) {/*recibe el tipo de operacion*/
        this.tipoOperacion !== 'igual' && this.calcular();/* si es distio calcula*/
        this.tipoOperacion = tipo;/*actualiza*/
        this.valorAnterior = this.valorActual || this.valorAnterior;/*si hay valor actual se coloca si no, no se coloca*/
        this.valorActual = '';/* deja vaio el espacio*/
        this.imprimirValores();
    }

    agregarNumero(numero) {/* recibe un número recibido*/
        if(numero === '.' && this.valorActual.includes('.')) return/* pregunta si se agrga un punto*/
        this.valorActual = this.valorActual.toString() + numero.toString();/*concatenen los valores uno atras del otro*/
        this.imprimirValores();
    }

    imprimirValores() {/*imprime los valores*/
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;/* muestra la operacion que se realizo o signo que se agrega*/
    }

    calcular() {/* dar los valores y los calcule*/
        const valorAnterior = parseFloat(this.valorAnterior);/*ser un numero */
        const valorActual = parseFloat(this.valorActual);/* numero ser utlizado*/

        if( isNaN(valorActual)  || isNaN(valorAnterior) ) return/* los dos no son nan no dar valor*/
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);/*hacer calculos los metodos*/
    }
}