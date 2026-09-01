/**
 * 
 * 
 * 
 * 
 * 
 


// functio expression
const getTriangleArea = function(base,heigth){
    return (base * heigth) / 2;
}

let area = getTriangleArea(20,24);
console.log(`${area}`);
*/

const serie = function(numero){
    for(let i = 1; i <= numero; i++){
        if (i % 2 == 0){
            console.log(`El numero ${i} es par`);
        }else{
            console.log(`El numero ${i} es impar`);
        }
    }
}
let numero = prompt('Ingrese un numero limite de una serie');
serie(numero);
