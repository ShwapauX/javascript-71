/**
 * Funciones flecha(arrow function)
 * !importante
 * Return implicito
 * Quiere decir que si tu funcion se puede escribir en una sola linea sin necesidad de llaves, no es necesario poner la palabra return la exprecion a la que apunte la flecha
 * 
 * Expresion lambda
 * 
 * 
 */

const addTwoNumbers = (a, b) => a + b;
let result = addTwoNumbers(3, 4);
console.log(`El resultado de sumar 4 + 3 es ${result}`);

const evenOrOdd = (limit) => {
    let total=0;
    for(let i = 0;i <= limit; i++){
        if(i % 2 == 0){
            console.log("es par");
        }else{
            console.log("es impar");
        }
    total += i;
    }
}

console.log(evenOrOdd(10));