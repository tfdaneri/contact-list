const listaContactos = []

const Usuario2 = { 
    order: 2,
    nombres: "Pedro Pepe",
    apellidos: "Perez Pereira",
    teléfono: 444444,
    ubicaciones: {
        ciudad: "Viña del Mar",
        dirección: "Calle realn't 456"
    }
}

let nuevaLongitud = listaContactos.push(Usuario2);
console.log(listaContactos)

const Usuario1 = { 
    order: 1,
    nombres: "Gonzalo Fernando",
    apellidos: "Gonzalez Fernández",
    teléfono: 999999,
    ubicaciones: {
        ciudad: "Santiago",
        dirección: "Calle Falsa 123"
    }
}

let añadirUsuario = listaContactos.push(Usuario1);
console.log(listaContactos)


const Usuario3 = {
    order: 3,
    nombres: "María Mariana",
    apellidos: "Marín Martínez",
    teléfono: 222222,
    ubicaciones: {
        ciudad: "Curicó",
        dirección: "Avenida Mentira 789"
    }
}
let nuevaLongitud2 = listaContactos.push(Usuario3);
console.log(listaContactos)

console.log(Usuario1.id)

listaContactos.sort((a, b) => {
    if (a.order > b.order) {
        return 1
    } else {
        return -1
    }
})

console.log(listaContactos)

let eliminacion = listaContactos.splice(1, 1)
console.log(listaContactos)