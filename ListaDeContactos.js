let listaContactos = []

let Usuario1 = { 
    "id": 1,
    "nombres": "Gonzalo Fernando",
    "apellidos": "Gonzalez Fernández",
    "teléfono": 999999,
    "ubicaciones": {
        "ciudad": "Santiago",
        "dirección": "Calle Falsa 123"
    }
}

let añadirUsuario = listaContactos.push(Usuario1);
console.log(listaContactos)

let Usuario2 = { 
    "id": 2,
    "nombres": "Pedro Pepe",
    "apellidos": "Perez Pereira",
    "teléfono": 444444,
    "ubicaciones": {
        "ciudad": "Viña del Mar",
        "dirección": "Calle realn't 456"
    }
}

let nuevaLongitud = listaContactos.push(Usuario2);
console.log(listaContactos)

let Usuario3 = { 
    "id": 3,
    "nombres": "María Mariana",
    "apellidos": "Marín Martínez",
    "teléfono": 222222,
    "ubicaciones": {
        "ciudad": "Curicó",
        "dirección": "Avenida Mentira 789"
    }
}
let nuevaLongitud2 = listaContactos.push(Usuario3);
console.log(listaContactos)

let eliminacion = listaContactos.splice(1, 1)
console.log(listaContactos)

