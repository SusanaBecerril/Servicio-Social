//Esto solo emn modulos nativps
//que no tiennen promesas nativas

//const {promisfy} = reuqire('node:util')
//const readPromise = promisify(fs.readFile)

const { readFile } = require('fs/promises')

//IIFE - Inmediatly Invoked Fuction Expression
;(
    async () => {
        console.log('Leyendo el primer archivo...')
        const text = await readFile('./archivo.txt', 'utf-8')
        console.log('primer texto:',text)
        console.log('---->Hacer cosas mientras lee el archivo...')

        console.log('Leyendo el segundo archivo...')
        const secondText = await readFile('./archivo2.txt', 'utf-8')
        console.log('segundo texto:', text)

    }

)()

/*async function init (){
    console.log('Leyendo el primer archivo...')
        const text = await readFile('./archivo.txt', 'utf-8')
        console.log('primer texto:',text)
        console.log('---->Hacer cosas mientras lee el archivo...')

        console.log('Leyendo el segundo archivo...')
        const secondText = await readFile('./archivo2.txt', 'utf-8')
        console.log('segundo texto:', text)

}

init()*/