
//Ejercicio 7 ARRAYS
//1. Crea una función que reciba como parámetro un array de números y retorne la suma de todos los números del array.

const array1 = [1, 5, 6, 7, 8];
function sumaArray(a) {
    let suma2 = a.reduce(function (acum, valor) { return acum + valor }, 0);
    return suma2
}
console.log(sumaArray(array1))


//2. Crea una función ( o varias) que reciba como parámetro un array de números y retorne el promedio de todos los números del array.
function promedio(a) {
    let cantidad = a.length
    let suma2 = a.reduce(function (acum, valor) { return acum + valor }, 0);

    return suma2 / cantidad
}
console.log(promedio(array1))
//3. Crea una función que tome un arreglo de strings como parámetro y devuelva un nuevo arreglo que contenga los mismos strings pero con todas las letras en mayúsculas.
let array2 = ['platano', 'manzana', 'pera']

function arregloString(a) {
    let nuevoArr = a.map(function (elemento) {
        return elemento.toUpperCase();
    })
    return nuevoArr
}
console.log(arregloString(array2))

//4. Crea una función que tome un arreglo de números como parámetro y devuelva un nuevo arreglo que contenga solo los números pares.//

function arregloString2(a) {
    let b = []
    a.forEach(function (elemento) {
        if (elemento % 2 == 0) {
            b.push(elemento)
        }
    })
    return b
}
console.log(arregloString2(array1))

