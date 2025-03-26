//Esto solo emn modulos nativps
//que no tiennen promesas nativas

//const {promisfy} = reuqire('node:util')
//const readPromise = promisify(fs.readFile)

const fs = require('fs/promises')

console.log('Leyendo el primer archivo...')
fs.readFile('./archivo.txt', 'utf-8')
    .then(text =>{//ejecutas este callback cuando termine de leer el archivo
console.log('primer texto:',text)
})



console.log('---->Hacer cosas mientras lee el archivo...')

console.log('Leyendo el segundo archivo...')
fs.readFile('./archivo2.txt', 'utf-8')
 .then(text =>{

console.log('segundo texto:', text)
})