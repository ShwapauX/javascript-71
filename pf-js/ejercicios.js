// Ejercisio while y do-while

// problema 1
// let numero = prompt('Ingresa un numero positivo');

// while (numero <= 0){
//     numero = prompt()
// }
// console.log('numero aceptado '+numero)

//problema 2
// let suma = 0;
// let numero = prompt("Ingresa un número (0 para salir):");

// while (numero != 0) {
//     suma = suma + (numero * 1);
//     numero = prompt("Ingresa otro número (0 para salir):");
//     console.log(``);
// }

// console.log("Suma total: " + suma);

//problema 3
// let base = prompt("Ingresa la base:");
// let exponente = prompt("Ingresa el exponente:");

// let resultado = 1;
// let i = 0;

// while (i < exponente) {
//     resultado = resultado * base;
//     i = i + 1;
// }

// console.log("Resultado: " + resultado);

// do-while
// Problema 1
let opcion;

do {
    opcion = prompt("Menú:\n1. Consultar saldo\n2. Retirar dinero\n3. Salir");
} while (opcion != "3");

console.log("¡Hasta luego!");

