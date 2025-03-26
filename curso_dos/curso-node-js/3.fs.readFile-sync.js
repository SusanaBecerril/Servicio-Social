const fs = require('fs')

console.log('Leyendo el primer archivo...')
const text = fs.readFileSync('./archivo.txt', 'utf-8')//ejecutas este callback cuando termine de leer el archivo
console.log('primer texto:', text)

console.log('---->Hacer cosas mientras lee el archivo...')

console.log('Leyendo el segundo archivo...')
const secondText = fs.readFileSync('./archivo2.txt', 'utf-8')
console.log('segundo texto:', secondText)
