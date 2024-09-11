
//Ejercicio 6 FUNCIONES
//1. Crea una función que reciba un string y retorne el string en mayúsculas.
let palabraMIN = 'hola mundo'
function cambiarMayus(a) {
    return a.toUpperCase()
}
console.log(cambiarMayus(palabraMIN))

//2. Crea una función que reciba un string y retorne el string en minúsculas.
let palabraMAY = 'HOLA AYUDANTES'
function cambiarMin(a) {
    return a.toLowerCase()
}
console.log(cambiarMin(palabraMAY))

//3. Crear una función que reciba como parámetro 2 números y los reste.
function resta2(a, b) {
    return a - b
}

//4. Crear una función que reciba como parámetro 2 números y los divida.
function division2(a, b) {
    return a / b
}
//5. Crear una función que reciba como parámetro 2 números y los multiplique.
function multiplicacion2(a, b) {
    return a * b
}
//6. Crear una función que reciba un string y devuelva la longitud del string.
function longitud(a) {
    return a.length
}
console.log(longitud(palabraMAY))
