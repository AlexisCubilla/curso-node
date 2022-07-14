
const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            type: 'number',
            describe: 'base del multiplicador',
            demandOption: true
        },
        'l': {
            alias: 'listar',
            type: 'boolean',
            describe:'listar tabla de multiplicar',
            default: false
        },
        'h': {
            alias: 'hasta',
            type: 'number',
            describe:'longitud de multiplicacion',
            default: 10
        }

    })
    .check((argv, options) => {
        if (isNaN(argv.b)) throw 'la base debe ser numerico' 
        return true

    })
    .argv;

module.exports=argv;