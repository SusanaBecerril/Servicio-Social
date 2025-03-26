//Esto solo emn modulos nativps
//que no tiennen promesas nativas

//const {promisfy} = reuqire('node:util')
//const readPromise = promisify(fs.readFile)

import { readFile } from 'fs/promises';

// IIFE - Immediately Invoked Function Expression
Promise.all([     
    readFile('./archivo.txt', 'utf-8'),
    readFile('./archivo2.txt', 'utf-8')
]).then(([text, secondText]) => {
    console.log('primer texto:', text);
    console.log('segundo texto:', secondText);
});


