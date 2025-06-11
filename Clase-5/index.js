// localStorage.setItem("isAuth", true);

// const isAuth = localStorage.getItem("isAuth")

// console.log(isAuth)



// localStorage.setItem("dni", 58237121)

// const dni = localStorage.getItem("dni")

// console.log(dni)


// const random = 238123

// random.toString()

// localStorage.clear() -> limpia todo el localstorage

// localStorage.key(2)
// localStorage.removeItem()
// const producto = {descripcion: "Arroz",precio: 1100}

// const productoString = JSON.stringify(producto)
// localStorage.setItem("producto", productoString)

// const productoRecuperado = localStorage.getItem("producto")
// const productoParseado = JSON.parse(productoRecuperado)
// console.log(productoParseado.precio)


// Plantilla/Plano sera funcion constructora

// function Persona(nombre, apellido, dni, edad){
//     //convive el objeto this de manera implicita
//     this.nombre = nombre
//     this.apellido = apellido
//     this.dni = dni
//     this.edad = edad

//     this.sumarEdad = function (){
//         this.edad = this.edad + 1
//     }

//     // siempre que se instancie la funcion constructora retornara this
// }

// const persona1 = new Persona("Daniel"," Peschiutta", 9999999, 20)
// const persona2= new Persona("Leo", "Sanchez", 3333333, 30)
// persona1.nombre = "Pablo"
// console.log(persona1.sumarEdad())
// console.log(persona2.sumarEdad())



class Persona {
    constructor(nombre, apellido, dni, edad){
        this.nombre = nombre
        this.apellido = apellido
        this.dni = dni
        this.edad = edad
    }

    sumarEdad(){
        this.edad = this.edad + 1
    }

}

const persona1 = new Persona("Daniel"," Peschiutta", 9999999, 20)
const persona2= new Persona("Leo", "Sanchez", 3333333, 30)


class Producto {
    constructor(detalleValores){ // destructuramiento
        this.id = new Date().getTime() // devuelve el tiempo en milisegundos
        this.nombre = detalleValores.nombre
        this.codigo = detalleValores.codigo ?? 111111
        this.precio = detalleValores.precio
        this.stock = detalleValores.stock ?? 0
        this.tieneCuotas = false
    }

    habilitarCuotas(){
        this.tieneCuotas = true
    }

    setIva(){
        this.precio = this.precio * 1.21
    }

    getCodigo(){
        return this.codigo
    }

    setCodigo(codigo){
        this.codigo = codigo
    }
}

const nombre = prompt("Ingrese nombre de producto")
const codigo = parseInt(prompt("Ingrese codigo"))

const producto1 = new Producto({ nombre: nombre, codigo: 23543234123, precio: 500 })

producto1.setIva()

console.log(producto1)

class Carrito{
    constructor(productos){
        this.carrito = productos ?? []
    }

    agregarProducto(nuevoProducto){
        const productoExistente = this.carrito.find(producto => producto.id === nuevoProducto.id )
        if(!productoExistente){
            this.carrito.push(nuevoProducto)
        } else {
            // logica para agregar cantidad a un producto
        }
    }
}
