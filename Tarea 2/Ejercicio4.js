
//Ejercicio 4
const numero1 = 10;
const numero2 = 20;
const numero3 = 30;

//Imprimir en consola el número mayor de los tres.
if (numero1 > numero2 && numero1 > numero3) {
    console.log('el numero1 es el mayor de los tres: ', numero1);
}
if (numero2 > numero3 && numero2 > numero1) {
    console.log("el numero2 es el mayor de los tres:", numero2)
}
if (numero3 > numero2 && numero3 > numero1) {
    console.log("el numero3 es el mayor de los tres:", numero3)
}
//Imprimir en consola el número menor de los tres.

if (numero1 < numero2 && numero1 < numero3) {
    console.log('el numero1 es el menor de los tres: ', numero1);
}
if (numero2 < numero3 && numero2 < numero1) {
    console.log("el numero2 es el menor de los tres:", numero2)
}
if (numero3 < numero2 && numero3 < numero1) {
    console.log("el numero3 es el menor de los tres:", numero3)
}
//Imprimir en consola si el numero1 es par o impar
if (numero1 % 2 == 0) {
    console.log("El numero1 es par")
} else {
    console.log("El numero1 es impar")
}
//Imprimir en consola si el numero2 es par o impar
if (numero2 % 2 == 0) {
    console.log("El numero2 es par")
} else {
    console.log("El numero2 es impar")
}
//Imprimir en consola si el numero3 es par o impar
if (numero3 % 2 == 0) {
    console.log("El numero3 es par")
} else {
    console.log("El numero3 es impar")
}

//Imprimir en consola si el numero1 es multiplo de 5
if (numero1 % 2 == 0) {
    console.log("El numero1 es multiplo de 5")
} else {
    console.log("El numero1 no es multiplo de 5")
}
//Imprimir en consola si el numero2 es multiplo de 5
if (numero2 % 2 == 0) {
    console.log("El numero2 es multiplo de 5")
} else {
    console.log("El numero2 no es multiplo de 5")
}
//Imprimir en consola si el numero3 es multiplo de 5
if (numero3 % 5 == 0) {
    console.log("El numero3 es multiplo de 5")
} else {
    console.log("El numero3 no es multiplo de 5")
}
