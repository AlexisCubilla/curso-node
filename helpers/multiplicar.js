const fs = require('fs');
const colors=require('colors')

const crearArchivo = async (base, listar,hasta) => {
    try {
        let salida = '';
        let salidac= '';

        for (let i = 1; i <= hasta; i++) {

            salida = salida + `${base} x ${i} '=' ${base * i} \n`;

            salidac = salidac + `${`${base}`.green} ${'x'.red} ${`${i}`.green} ${'='.gray} ${`${base * i}`.green} \n`;
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        if (listar) {
            console.log(`Tabla del ${base}`.red);
            console.log(salidac);
            
        }

        // console.log(`Archivo de la tabla del ${base} creado`)

        return `tabla-${base}.txt`;

    } catch (err) {

        throw err;

    }
}

module.exports = {
    crearArchivo
}