
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


