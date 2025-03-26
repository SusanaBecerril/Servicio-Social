import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'os'; // Corregido: "require" en lugar de "requiere"
console.log(platform()); // Muestra el sistema operativo


console.log('Informacion del sistema operativo:')
console.log('---------------------')

console.log('Nombre del sistema operativo', platform())
console.log('Version del sistema operativo', release())
console.log('Arquitectura', arch())
console.log('CPUs', cpus())
console.log('Memoria Libre', freemem()/1024/1024)
console.log('Memoria total', totalmem()/1024/1024)
console.log('uptime', uptime()/60/60)