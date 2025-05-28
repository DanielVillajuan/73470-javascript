// 1- Hacer un programa que permita ingresar 10 notas de alumno y sacar el promedio.
// 2- Modificar para que el usuario primero ingrese la cantidad de alumnos y luego sacar el promedio en base a eso.
// 3- Modificar que siga haciendo lo del punto 2 pero que a medida de ingrsar la nota mencione si esta aprobado o no (>=7)
// 4- Modificar el for del punto 3, pasarlo a while

// clase 3 - Funciones bloque de codigo re utilizable, procesa datos/info.

// sintaxis 

// function pedirNombre(salida){
//     // salida -> string , alert muestro con alert, console muestro por consola
//     const nombre = prompt("Ingrese su nombre") // "D' Alesandro"
//     if(salida === "alert"){
//         alert(nombre)
//     }else {
//         console.log(nombre)
//     }
// }

// function mostrarMensaje(mensaje, mensaje2, mensaje3, mensaje4){
//     console.log(mensaje)
//     console.log(mensaje2)
//     console.log(mensaje3)
//     console.log(mensaje4)
// }

// mostrarMensaje("Hola", 2, true, "tardes")
// mostrarMensaje(5, "Daniel", "Leo", 20)


// function suma(a, b){
//     const resultado = a + b

//     return resultado
// }

// const resultadoDeSuma = suma(5, 10)


// export function crearAlumno(){
//     // pidos datos
//     // retorno el alumno
// }

// function guardarBBDD(alumno){
//     // guarda en la base de datos al alumno
// }

// const alumno = crearAlumno()
// guardarBBDD(alumno)


// function esMayor(numero){ // numero 70

//     if(numero > 100){
//         return 'Es Mayor a 100'
//     }
    
//     if(numero > 50){
//         return 'Es Mayor a 50'
//     }    
    
//     return 'Es menor a 50'
    
// }

// // SCOPE


// const a = 2 // globales
// const b = 3 // globales

// function evaluar(){
//     const a = 5 // variable locales
//     const b = 30 // locales

//     function mostrar(){
//         const a = 10; // locales
//         const b = 50; // locales
//         console.log(a,b)
//     } 

//     mostrar()
// }


// evaluar(); // no es una funcion
// console.log(a - b)

// COMMONJS 

// module.export = {
//     crearAlumno
// }

// ESMODULES

// funciones Anonimas

// const crearAlumno = function (){

// }

// crearAlumno()

// Funcion tipo flecha

// const suma = (a, b) => {

// }


// suma(2,5)



// Hacer un programa que permita realizar operacions matematicas hasta que el usuario ingrese la palabra ESC
// Calculadora suma, resta, multiplicacion y division

// Ingrese una opcion 1 - suma 2- resta -3 mult 4-div 5-salir
// pedir 2 numeros y mostrar por alert el resultado de la operacion
// Volver preguntar por una opcion

const pedirNumero = () => {
    return parseInt(prompt("Ingrese un numero"))
}

const suma = (a,b) => a + b
const resta = (a,b) => a - b
const multiplicar = (a,b) => a * b
const dividir = (a,b) => a / b

const MENU = `Ingrese una opcion: \n
            1- Sumar
            2- Restar
            3- Multiplicar
            4- Dividir
            5- Salir
        `

function main(){
    let opc = parseInt(prompt(MENU))
    while(opc !== 5){
        const a = pedirNumero()
        const b = pedirNumero()
        
        switch(opc){
            case 1:
                alert(suma(a, b))
                break;
            case 2:
                alert(resta(a,b))
                break;
            case 3:
                alert(multiplicar(a,b))
                break;
            case 4:
                alert(dividir(a,b))
                break;
            default:
                break;
        }
        opc = parseInt(prompt(MENU))
    }
    
}

main()
