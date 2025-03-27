const fs = require('node.fs/promises')

fs.readdir('.')
    .then((files) => {
        console.log(files)
    })
    .catch((err) => {
        if (err){
            console.err('Error al leer el directorio: ', err)
            return;
        }
    
    })