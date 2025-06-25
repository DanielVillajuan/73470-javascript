// DOM



// getElementById accedemos a un elemento del DOM por su ID -> HTML o Null
// const contenedor = document.getElementById("contenedor")

// console.log(contenedor.innerHTML) // innerHTML
// console.log(contenedor.innerText) // innerText

// getElementsByClassName accedemos a todos los elementos ue contengan dicha clase -> Array De elemento html
// const paises = document.getElementsByClassName("pais")

// for(let i=0; i<paises.length; i++){
//     console.log(paises[i])
// }


// getElementsByTagName accedemos a todos los elementos de dicho nombre de etiqueta -> ARray de elementos HTML
// const etiquetas = document.getElementsByTagName("input")


// querySelector accedemos a un elemento mediante selectores CSS 
// querySelectorAll accedemos a todos los elementos mediante selectores CSS
// document.querySelector("#contenedor")
// document.querySelectorAll(".pais")
// console.log(paises)

const productos = [
    { nombre: "Arroz", precio: 1500, categoria: "Almacen", imagen:"./imagen/arroz.png" }, // false
    { nombre: "Fideos", precio: 800, categoria: "Almacen" }, // false
    { nombre: "Cocacola", precio: 2500, categoria: "Bebida" }, // true 
    { nombre: "Agua Mineral", precio: 1500, categoria: "Bebida" },
    { nombre: "Carne", precio: 8500, categoria: "Congelados" },
    { nombre: "Pescado", precio: 5500, categoria: "Congelados" },
]

const carrito = []

const contenedor = document.querySelector("#contenedor")
const buttonCarrito = document.querySelector("#ver-carrito")

productos.forEach((producto) => {
    const div = document.createElement("div")

    div.innerHTML = `
        <img src="${producto.imagen}" />
        <p>Nombre: ${producto.nombre} </p>
        <p>precio: $${producto.precio} </p>
        <p>categoria: ${producto.categoria} </p>
    `
    const button = document.createElement("button")
    button.innerText = `Agregar producto`

    button.addEventListener("click", () => {
        carrito.push(producto)
        console.log(producto)
    })

    div.appendChild(button)
    contenedor.appendChild(div)
})

buttonCarrito.addEventListener("click", () => {
    console.log(carrito)
})

// contenedor.innerHTML = "<h1> Hola fui modificado con js </h1>"

// console.log(contenedor)

// EVENTOS


// const boton = document.querySelector("#boton-click")

// evento por atributo del elemento

// boton.onclick = () => {
//     console.log("click desde javascript")
// }
// const usuario = {
//     nombre: ''
// }

// const inputNombre = document.querySelector("input")

// inputNombre.addEventListener("input",(event) => {
//     // console.log(event.target) // event contiene info del evento, 
//     // dentro de la misma target es el elemento que disparo el evento
//     // console.log("esta cambiando de valor el input")
//     // console.log(event.target.value)
//     usuario.nombre = event.target.value
// })


// boton.addEventListener("click", () => {
//     console.log("el nombre del usuario es:", usuario.nombre)
// })
