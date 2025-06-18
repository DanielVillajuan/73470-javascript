
// const mayorQue = (n) => { // n-> 10
//     return (n2) => n2 > n // n2 -> 15 > 10 -> true
// }

// const mayorQueDiez = mayorQue(10)
// const resultado = mayorQueDiez(15)
// console.log(resultado) // true



// const porCadaUno = (arrayAux, fn) => {
//     for(let i=0; i < arrayAux.length; i++ ){
//         fn(arrayAux[i]) // por cada elemento i en el array, se lo paso a la funcion
//     }
// }

// const arrayNumeros = [50,20,33,101,250, 3503]

// porCadaUno(arrayNumeros, (el) => {
//     if(el % 2 === 0){
//         console.log(el)
//     }else {
//         console.log('es impar', el)
//     }
// })

// const aplicaDescuento = (precio, estrategiaDescuento) => {
//     return estrategiaDescuento(precio) // nos devolvera el descuento aplicado al precio
// }

// const descuentoNormal = precio => precio * 0.95 // 5%
// const descuentoPremium = precio => precio * 0.85 // 15%
// const descuentoJubilados = precio => precio * 0.5 // 50%


// const precioProducto = 1000

// console.log(aplicaDescuento(precioProducto, descuentoPremium)) // $850


// const validadorLogintud = (min, max) => {
//     return (dato) => {
//         return dato.length >= min && dato.length <= max
//     }
// }

// const validarNombre = validadorLogintud(3,30);
// const validarDNI = validadorLogintud(7,8);
// const validarCP = validadorLogintud(3,4);
// const validarCiudad = validadorLogintud(5,20);
// validarNombre("Maximiliano Esteban") // true
// validarNombre("Al") // false
// validarDNI("33888777") // true


// const productos = [
//     { nombre: "Arroz", precio: 1500, categoria: "Almacen" }, // false
//     { nombre: "Fideos", precio: 800, categoria: "Almacen" }, // false
//     { nombre: "Cocacola", precio: 2500, categoria: "Bebida" }, // true 
//     { nombre: "Agua Mineral", precio: 1500, categoria: "Bebida" },
//     { nombre: "Carne", precio: 8500, categoria: "Congelados" },
// ]

// forEach - no retorna nada

// let contador = 0

// productos.forEach((elemento) => {

//     if(elemento.precio > 1500){
//         console.log(elemento)
//         contador++
//     }
// })

// console.log('hay ', contador, ' productos mayores a 1500')
// console.log(`Hay ${contador} productos mayores a 1500`)


// find -> devuelve un elemento en caso de encontrarlo, sino undefined

// const productoEncontrado = productos.find((elemento) => {
//     return elemento.nombre === 'Coca cola'
// })

// console.log(productoEncontrado)


// FILTER -> filtra un array en base a una condicion -> siempre devolvera un ARRAY

// const resultado = productos.filter((elemento) => {
//     return elemento.precio >= 1000 && elemento.precio <= 1500
// })

// console.log(resultado)

// SOME -> simplemente devuelve un booleano , true si existe ( cumple la condicion) false si nunca se cumple


// const resultado = productos.some((elemento) => {
//      return elemento.nombre === "Coca cola"
// })

// console.log(resultado)


// const alumno = [
//     { nombre: "Miguel", nota: 6, activo: true},
//     { nombre: "Nico", nota: 4, activo: true},
//     { nombre: "Rober", nota: 8, activo: true},
//     { nombre: "Marlene", nota: 7, activo: true},
// ]


// // const resultado = alumno.map((elemento) => {

// //     if(elemento.nota >= 7){
// //         return {
// //             ...elemento,
// //             aprobado: true
// //         }
// //     }else {   
// //         return {
// //             ...elemento,
// //             aprobado: false
// //         }
// //     }
// // }) // devuelve un nuevo array

// // console.log(resultado)

// const resultado = alumno.reduce((acum, elemento) => {
//     return elemento.nota + acum
// }, 0) // retorna un valor/variable

// console.log(resultado)


const productos = [
    { nombre: "Arroz", precio: 1500, categoria: "Almacen" }, // false
    { nombre: "Fideos", precio: 800, categoria: "Almacen" }, // false
    { nombre: "Cocacola", precio: 2500, categoria: "Bebida" }, // true 
    { nombre: "Agua Mineral", precio: 1500, categoria: "Bebida" },
    { nombre: "Carne", precio: 8500, categoria: "Congelados" },
    { nombre: "Pescado", precio: 5500, categoria: "Congelados" },
]

const resultado = productos.reduce((acum, elemento) => {
    // acum  -> {}

    if(!acum[elemento.categoria]){ // acum.Almacen -> undefined
        return {
            ...acum,
            [elemento.categoria]: [{...elemento}] 
        }
    }

    acum[elemento.categoria].push(elemento)
    return acum



}, {})

console.log(resultado)
