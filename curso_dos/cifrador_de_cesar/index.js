 
 const alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
 const inputOriginal = document.getElementById('input-original');
 const cifrador = document.getElementById('cifrador');
 const resultado = document.getElementById('resultado');
 const rango = document.getElementById('rango');
 
 const shifMessage = () => {/* obtner un input genreal de las palabras*/
     const wordArray = [...inputOriginal.value.toUpperCase()];/*letras formados en array*/
     printChar(0, wordArray);
 }
 /*palabra inciptada*/
 const printChar = (currentLetterIndex, wordArray) => {
     if(wordArray.length === currentLetterIndex) return;
     inputOriginal.value = inputOriginal.value.substring(1)
     const spanChar = document.createElement("span");/*animar los caracteres al resultado*/
     resultado.appendChild(spanChar);
     animateChar(spanChar)/*se llama a la animación de los caracteres*/
         .then( () => {/*ejecuta el codigo solo si se cumple caracter inciptado*/
             const charSinCodificar = wordArray[currentLetterIndex];
             spanChar.innerHTML = alfabeto.includes(charSinCodificar) ? /*se pregunta dentro del alfabeto se suma al rango*/
                 alfabeto[(alfabeto.indexOf(charSinCodificar) + parseInt(rango.value)) % alfabeto.length] : 
                 charSinCodificar
             printChar(currentLetterIndex + 1, wordArray);/* se agreaga ala array +1*/
         });
 }
 
 const animateChar = spanChar => {/*animar cada uno de los caracteres*/
     let cambiosDeLetra = 0;
     return new Promise(resolve => {/*mostrar el caracter ya incirptado*/
         const intervalo = setInterval(() => {/*ejecuta un resultado rewpetitivo*/
             spanChar.innerHTML = alfabeto[Math.floor(Math.random() * alfabeto.length)];
             cambiosDeLetra++;
             if(cambiosDeLetra === 3) {/*numero aletrio, si se suma mas se vuelve mas lento*/
                 clearInterval(intervalo);
                 resolve();
             }
         }, 50);/* nuemro de caracter*/
     });
 }
 
 const submit = e => {/*llama a la constante del comportamiento base*/
     e.preventDefault();
     resultado.innerHTML = '';
     shifMessage()
 }
 
 cifrador.onsubmit = submit;
