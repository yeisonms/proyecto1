const { cursos } = require('./datos');
const opciones = {
    id: {
        demand: true,
        alias: 'i'
    },
    nombre: {
        demand: true,
        alias: 'n'

    },
    cedula: {
        demand: true,
        alias: 'c'

    }

}
var express = require('express')
var app = express()


const argv = require('yargs')
    .command('inscribir', 'inscribir el curso', opciones)
    .argv

let incripcionEstu = cursos.find(idEstu => idEstu.id == argv.id)




if ((argv.id == 1) || (argv.id == 2) || (argv.id == 3)) {

    texto = 'El nombre del estudiante es: ' + argv.nombre + '<br>' +
        'el id del curso es: ' + argv.id + '<br>' +
        'la cedula del estudiante es: ' + argv.cedula + '<br>' +
        'el curso matriculado es: ' + cursos[argv.id - 1].nombre + '<br>' + 'duracion de: ' +
        cursos[argv.id - 1].duracion + '<br>' +
        'costo de: ' +
        cursos[argv.id - 1].costo






} else {
    console.log('Bienvenidos a nuestros curos virtuales ')
    console.log('Cargando cursos disponibles... ')
    setTimeout(function() {
        console.log('El nombre del curso es: ' + cursos[0].nombre + '\n' +
            'el id: ' + cursos[0].id + '\n' +
            'la duracion del curso es: ' + cursos[0].duracion + '\n' +
            'el costo del curso es: ' + cursos[0].costo +
            '\n' + '\n'

        );

    }, 2000);
    setTimeout(function() {
        console.log('El nombre del curso es: ' + cursos[1].nombre + '\n' +
            'el id: ' + cursos[1].id + '\n' +
            'la duracion del curso es: ' + cursos[1].duracion + '\n' +
            'el costo del curso es: ' + cursos[1].costo +
            '\n' + '\n'

        );

    }, 4000);

    setTimeout(function() {
        console.log('El nombre del curso es: ' + cursos[2].nombre + '\n' +
            'el id: ' + cursos[2].id + '\n' +
            'la duracion del curso es: ' + cursos[2].duracion + '\n' +
            'el costo del curso es: ' + cursos[2].costo + '/n'

        );

    }, 6000);

    console.log('aun no te encuentra registrado en ningun curso')

}
app.get('/', function(req, res) {
    res.send(texto)
})

app.listen(3000)