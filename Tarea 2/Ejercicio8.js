
//Ejercicio 8 OBJETO
//1. **Crear un objeto de persona**: Define un objeto llamado "persona" que tenga propiedades como nombre, edad y género. Luego, muestra la información de esa persona por la consola.

const persona = {
    Nombre: "Jerson",
    edad: 21,
    genero: "Masculino",
}

console.log(persona);


//2. Crear un objeto llamado caja: La caja se compone de cuadernos, lápices, papel, fotografías y indica el estado si esta en buen estado o no. Imprimir el objeto entero por consola, imprimir cada propiedad del objeto y el tipo de dato que es.
const caja = {
    cuadernos: 3,
    lapices: 21,
    papel: "carta",
    fotografias: 4,
    estado: "buen estado"
}
console.log(caja)
console.log(caja.cuadernos)
console.log(caja.lapices)
console.log(caja.papel)
console.log(caja.fotografias)
console.log(caja.estado)

console.log(typeof caja.cuadernos)
console.log(typeof caja.lapices)
console.log(typeof caja.papel)
console.log(typeof caja.fotografias)
console.log(typeof caja.estado)