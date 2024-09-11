
//Ejercicio 5 CICLOS

//1. Imprimir en consola los números del 1 al 10.
for (let i = 0; i < 10; i++) {
    console.log(i + 1)
}
//2. Imprimir en consola los números del 10 al 1.
i = 10
while (i > 0) {
    console.log(i)
    i = i - 1
}
//3. Imprimir en consola los números del 1 al 10 pero solo los pares.
for (let i = 1; i < 11; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}
//4. Imprimir en consola los números del 1 al 10 pero solo los impares.
for (i = 1; i < 11; i++) {
    if (i % 2 != 0) {
        console.log(i)
    }
}
//5. Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3.

for (i = 1; i < 11; i++) {
    if (i % 3 == 0) {
        console.log(i)
    }
}
//6. Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 5.
for (i = 1; i < 11; i++) {
    if (i % 5 == 0) {
        console.log(i)
    }
}
//7. Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3 y 5.
for (i = 1; i < 11; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i)
    }
}
//8. Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3 o 5.
for (i = 1; i < 11; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        console.log(i)
    }
}
