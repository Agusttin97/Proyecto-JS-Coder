// Array de objetos tipo contacto
const listaContactos = [{
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

let nombre

// Funciones
function menu(){
    console.log("\tGestion de Contactos \n ==========================")
    console.log("1. Lista de contactos \n2. Añadir nuevo \n3. Buscar\n0. Salir")
    let op = Number(prompt("Ingrese opcion (1/2/3/0): "))
    return op
}

function mostrarContacto(arr){
    arr.forEach(contacto => {
        console.log(`Nombre: ${contacto.nombre} \nTelefono: ${contacto.telefono} \nEmail: ${contacto.email}`)
    });
}


let op = menu()

while(op != 0){
    console.clear()
    if(op === 1){
        console.log("\tLista de contactos\n==========================")
        mostrarContacto(listaContactos)
    }else if(op === 2){
        console.log("\tAñadir nuevo contacto\n============================")
        nombre = prompt("Ingrese nombre: ")
        let telefono = prompt("Ingrese numero de telefono: ")
        let email = prompt("Ingrese email: ")
        listaContactos.push({nombre:nombre, telefono:telefono, email:email})
        console.log("Contacto creado con exito.")
    }else if(op === 3){
        console.log("\tBuscar\n==============")
        nombre = prompt("Ingrese nombre: ")
        const contactoFiltrado = listaContactos.filter(contacto => contacto.nombre === nombre)
        if(contactoFiltrado.length != 0){
            mostrarContacto(contactoFiltrado)
        }else{
            console.log(`No hay resultados sobre "${nombre}"`)
        }
    }
    alert("Click en 'aceptar' para volver al menu")
    console.clear()
    op = menu()
}