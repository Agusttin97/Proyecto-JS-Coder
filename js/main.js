// Array de objetos tipo contacto
const contactos = [{
    nombre: "Carpi",
    telefono: 1122334455,
    email: "carpi@gmail.com"
    },
    {
    nombre: "Coder",
    telefono: 9988776655,
    email: "coder@gmail.com"
    }
]

// let nombre

// // Funciones
// function menu(){
//     console.log("\tGestion de Contactos \n ==========================")
//     console.log("1. Lista de contactos \n2. Añadir nuevo \n3. Buscar\n0. Salir")
//     let op = Number(prompt("Ingrese opcion (1/2/3/0): "))
//     return op
// }

// function mostrarContacto(arr){
//     arr.forEach(contacto => {
//         console.log(`Nombre: ${contacto.nombre} \nTelefono: ${contacto.telefono} \nEmail: ${contacto.email}`)
//     });
// }


// let op = menu()

// while(op != 0){
//     console.clear()
//     if(op === 1){
//         console.log("\tLista de contactos\n==========================")
//         mostrarContacto(listaContactos)
//     }else if(op === 2){
//         console.log("\tAñadir nuevo contacto\n============================")
//         nombre = prompt("Ingrese nombre: ")
//         let telefono = prompt("Ingrese numero de telefono: ")
//         let email = prompt("Ingrese email: ")
//         listaContactos.push({nombre:nombre, telefono:telefono, email:email})
//         console.log("Contacto creado con exito.")
//     }else if(op === 3){
//         console.log("\tBuscar\n==============")
//         nombre = prompt("Ingrese nombre: ")
//         const contactoFiltrado = listaContactos.filter(contacto => contacto.nombre === nombre)
//         if(contactoFiltrado.length != 0){
//             mostrarContacto(contactoFiltrado)
//         }else{
//             console.log(`No hay resultados sobre "${nombre}"`)
//         }
//     }
//     alert("Click en 'aceptar' para volver al menu")
//     console.clear()
//     op = menu()
// }
let principal = document.querySelector(".principal")
let botones = document.querySelector(".botones")
let btnMenu = document.createElement("button")
btnMenu.className = "btn btn-menu"
btnMenu.innerText = "Menu"


//* LISTA DE CONTACTOS
let btnLista = document.querySelector(".btn-lista")
btnLista.addEventListener("click", () => {
    botones.remove()
    let listaContactos = document.createElement("ul")
    mostrarContacto(contactos, listaContactos)
    principal.append(listaContactos)
    listaContactos.append(btnMenu)

    btnMenu.addEventListener("click", () =>{
        principal.append(botones)
        listaContactos.remove()
    })
})

//* NUEVO CONTACTO
let btnNuevoContacto = document.querySelector(".btn-nuevo")
btnNuevoContacto.addEventListener("click", () => {
    botones.remove()
    let formNuevoContacto = document.createElement("form")
    formNuevoContacto.className = "form-nuevo-contacto"
    formNuevoContacto.innerHTML = 
    `
    <input type="text" class="input-form" id="input-nombre" placeholder="Nombre" required>
    <input type="text" class="input-form" id="input-telefono" placeholder="Telefono" required>
    <input type="email" class="input-form" id="input-email" placeholder="Email" required>
    <input type="submit" class="input-form" id="input-submit" value="Agregar">
    `

    principal.append(formNuevoContacto)
    formNuevoContacto.append(btnMenu)

    formNuevoContacto.addEventListener("submit", (e) => {
        e.preventDefault()
        contactos.push({nombre: document.querySelector("#input-nombre").value , telefono: document.querySelector("#input-telefono").value, email: document.querySelector("#input-email").value})

        formNuevoContacto.innerHTML = 
        `
        <p>¡Contacto añadido con exito!</p>
        `
        formNuevoContacto.append(btnMenu)
    })

    btnMenu.addEventListener("click", () => {
        formNuevoContacto.remove()
        principal.append(botones)
    })
})

//* BUSCAR CONTACTO
let btnBuscar = document.querySelector(".btn-buscar")
btnBuscar.addEventListener("click", () => {
    botones.remove()
    let formBuscar = document.createElement("form")
    formBuscar.className = "form-buscar"
    formBuscar.innerHTML = 
    `
    <input type="text" class="input-form" id="input-nombre-buscar" placeholder="Nombre" required>
    <input type="submit" class="input-form" id="input-submit" value="Buscar">
    `
    principal.append(formBuscar)
    formBuscar.append(btnMenu)

    formBuscar.addEventListener("submit", (e) => {
        e.preventDefault()
        let nombre = document.querySelector("#input-nombre-buscar").value
        const contactoFiltrado = contactos.filter(contacto => contacto.nombre === nombre)
        if(contactoFiltrado.length != 0){
            mostrarContacto(contactoFiltrado,formBuscar) 
        }
    })

    btnMenu.addEventListener("click", () =>{
        principal.append(botones)
        formBuscar.remove()
    })
})

//* SALIR

let btnSalir = document.querySelector(".btn-salir")
btnSalir.addEventListener("click", () => {
    principal.innerHTML =
    `
    <h1> Sesion cerrada </h1>
    `
})

//* FUNCIONES
function mostrarContacto(array, nodoHtml){
    array.forEach((contacto) => {
        nodoHtml.innerHTML += 
        `
        <li class='item'>
            <p>Nombre: ${contacto.nombre}</p> 
            <p>Telefono: ${contacto.telefono}</p> 
            <p>Email: ${contacto.email}</p>
        </li>
        `
    })
}




