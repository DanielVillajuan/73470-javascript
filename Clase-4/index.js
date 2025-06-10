// Arrays + Objetos

// Array 

const miArray = [] // Array esta vacio.
const otroArray = [24, 5, 3, 6, 100]
const stringArray = ["Daniel", "Pablo", "Jose"]
const mixtoArray = [true,[ [ "Maria", 210] ], "Daniel",2,[]]
                // 0, 1, 2, 3, 4

// mixtoArray[2] // "Daniel"
const primeraParte = mixtoArray[1]// [ [ "Maria", 210] ]
const segundaParte = primeraParte[0]// ["Maria", 210]
const terceraParte = segundaParte[1] // 210
console.log(terceraParte) // 210

for(let i=0;i < stringArray.length; i++ ){ // sugar syntax i++ -> i = i + 1
    console.log(stringArray[i])
}

// "Daniel"
// "Pablo"
// "Jose"


// Array.push()

// Agrega al final del array lo que se pase por parentesis (parametro)
stringArray.push("Eric")

console.log(stringArray) // ["Daniel", "Pablo", "Jose", "Eric"]

// Array.unshift()
stringArray.unshift("Juan")

console.log(stringArray) // ["Juan" ,"Daniel", "Pablo", "Jose", "Eric"]

// Array.pop()

stringArray.pop()

console.log(stringArray) // ["Juan" ,"Daniel", "Pablo", "Jose"]

// Array.shift()

stringArray.shift()

console.log(stringArray) // ["Daniel", "Pablo", "Jose"]

// Array.join()

// Devuelve un string, la union de todos los elementos del array separados por lo que se le pase por parametro al join

const stringJoin = stringArray.join("x") // "DanielxPabloxJose"
// Array.reverse(), da vuelta un array

// 2025/6/3 -> reverse -> 3/6/5202 X

// Array.split() // separa en base a un caracter por parametro -> devuelve un array 
// const fecha = "2025/6/3"
const fechaArray = fecha.split("/") //  ["2025", "6", "3"]

const fechaFormateada = fechaArray[0] + '-' + fechaArray[2] + '-' + fechaArray[1]

// 2025/6/3 -> split -> ["2025", "6", "3"] -> reverse -> ["3", "6","2025"] -> join("-") -> "3-6-2025"

// Array.includes("Eric")

const siExiste = stringArray.includes("Eric") // true || false

// Array.indexOf("Eric") 

const indice = stringArray.indexOf("Eric") // -1


// Objetos

// const alumno = {} // objeto vacio

const alumno = {
    id:"321dsasd",
    nombre: "Daniel",
    curso: ["React"],
    edad:20,
    activo: true,
    domicilio: {
        descripcion: "Av siempre viva",
        numero: 1231,
        cp: {
            numero: 1270,
            provincia: "Bs As"
        }
    }
}

console.log(alumno.nombre) // 'Daniel'
console.log(alumno["edad"]) // 20

console.log(alumno.domicilio.cp.provincia)// "Bs As"

alumno.curso// ["React"]
alumno.curso.includes("Javascript") // false


console.log(alumno.apellido)// undefined

alumno.nombre = "Eric"

console.log(alumno.nombre) // "Eric"

alumno.apellido = "Vasquez"

console.log(alumno.apellido) // "Vasquez"



const curso = [
    {nombre: "Joaquin", apellido:"Noel", nota:6},
    {nombre: "Pedro", apellido:"Sanchez", nota:6},
    {nombre: "Alex", apellido:"Villa", nota:2},
    {nombre: "Juan", apellido:"Dearmas", nota:8}
]

const alumnoEncontrado = curso.find((alumno) => { 
    return alumno.edad >= 5
})

// alumnoEnontra -> {nombre: "Alex", apellido:"Villa", nota:2}

alumnoEncontrado.nombre // "Alex"
alumnoEncontrado.nota // 2
