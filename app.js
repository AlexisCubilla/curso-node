
const { crearArchivo } = require('./helpers/multiplicar.js');

const argv=require('./config/yargs.js')

console.clear();

// console.log(yargs.base);

// console.log(process.argv);

// const [ , , arg3='base=10']= process.argv;

// const [,mult=11]= arg3.split('=');

// const mult = yargs.base;

// console.log(yargs.l);


crearArchivo(argv.b,argv.l,argv.h)
    .then(nombre => {
        console.log(nombre.rainbow);
    })
    .catch(
        err => {
            console.log(err);
        }
    )
