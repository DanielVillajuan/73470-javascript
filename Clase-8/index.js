// Asincronia


// console.log('1')
// console.log('2')
// console.log('3')


// '1'
// '2'
// '3'

// function suma(a,b){
//     return a + b
// }


// function Mostrar(){
//     console.log('Buenas noches')
//     const resultado = suma(1,2)
//     console.log(resultado)
//     console.log('Fin de suma')
// }


// Mostrar()

// metodos asincronos que forman parte de la web API ( son del navegador )
// setInterval
// setTimeout

// setTimeout(() => {}, 1000)

// console.log('Inicio del programa')

// setTimeout(() => {
//     console.log('Buenas soy un set time out')
// },5000)


// console.log('Fin del programa')

// let i = 0
// setInterval(() => {
//     i++
//     console.log(i)
// }, 1000)

// Manejo de Errores

// try{
//     // inicio un loading en pantalla


//     // solicitar informacion de una base de datos
//     // consulta de un usuario si existe en la base de datos


// } catch (e){
//     // muestro que no es posible dividir 0.
// } finally{
//    // cancelar el loading 
// }

//
//
//

// Metodo asincrono -> fetch

// GET -> traer
// POST -> guardar un recurso
// PUT -> reescribir un recurso existente
// DELETE -> eliminar un recurso
const urlRecurso = 'https://rickandmortyapi.com/api'

// async - await

// async function traerPersonajes(params) {
//     await fetch('....')
// }

const traerPersonajes = async () => {
    try{
        console.log("Consultando url's...")
        const resultado = await fetch(urlRecurso)
        const data = await resultado.json()
        
        console.log('Consultado personajes...')
        const result = await fetch(data.characters)
        const personajes = await result.json()
        console.log(personajes.results)
    } catch (e){
        console.log('Ocurrio un error algunas de las solicitudes fallaron', e)
    }
}

// traerPersonajes()


async function traerAlumnos(){
    const resultado = await fetch('./mijson.json')
    const data = await resultado.json()
    console.log(data)
}

traerAlumnos()
