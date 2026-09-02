/**
 * Diferencias
 * Hoitsing
 * es un proceso por el cual las function declaration y las variables escritas con var pasan a estar hasta arriba en el proceso de ejeccuion 
 * Function Expression y Arrow Function no pasa por este proceso
 * 
 * 
 */


console.log("function declaration"+multiplyNumbers(20,6));

const addNumber = function(a,b) {//expression
    return a + b;
}

const divideNumbers = (a, b) => a / b;//arrow

function multiplyNumbers(a, b){//declaration
    return a * b;
}

console.log(divideNumbers(10, 2));



// const atinale = () => {
//     // 1. Generamos un número aleatorio (ej. del 1 al 10)
//     let secret = Math.floor(Math.random()*100)+1; 
//     // 2. Bucle for para los 3 intentos
//     for (let i = 0; i < 3; i++) {
//         // 3. El prompt va adentro para preguntar en cada iteración y usamos parseInt() para asegurarnos de que sea un número y no un texto.
//         let join = parseInt(prompt("Adivina el número secreto:"));
//         if (join === secret) {
//             console.log("Lo lograste");
//             break; // Termina el bucle si adivina correctamente
//         } else if (join > secret) {
//             console.log("El número secreto es menor");
//         } else {
//             console.log("El número secreto es mayor");
//         }
//         // Opcional: Avisar cuando se acaban los intentos
//         if (i === 2) {
//             console.log("Se agotaron tus intentos. El número era: " + secret);
//         }
//     }
// }
// atinale();