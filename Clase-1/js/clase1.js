const nombre = "Juan D'Alesandro"
// tipo de variable Const -> no se puede cambiar el valor 
// nombre -> alias del espacio en memoria
// "Juan" -> string es un tipo de dato

const edad = 20 // number -> tipo de dato numerico
const esEstudiante = false // boolean -> true o false

let apellido = "D'Alesandro" // let -> se puede cambiar el valor en el tiempo
// console.log(apellido)

apellido = "Villajuan"

// console.log(apellido)

// edad = 31
// console.log(edad)

const cumple = 1

const actual = edad + cumple // - * / %
console.log(actual)
console.log(edad)

// alert("Hola mundo")

const respuestaUsuario = prompt("Cual es tu nombre?") // cuando una funcion devuelve un valor, lo hace de derecha a izquierda
// console.log(respuestaUsuario)

const saludo = "Hola tu nombre ingresado es:" + respuestaUsuario // cuando son string el operador + concatena
console.log(saludo)
