/**
 * switch 
 * Es una estructura de control condicional
 * Pero a diferencia del if no se basa en valores de verdad o falso
 * Si no que se basa en opciones
 * ? Nos permite tener multiples opciones 
 * ? y con base en la opcion seleccionada ejecuta un bloque de codigo
 * ? tiene una respuesta por default, por si la opccion inresada no esta en la lista
 * 
 * ?Se divide en casos
 * ?cada caso lleva su bloque de codigo y debe llevar al finalizar la palabra break
 * 
 * *Nota
 * todo: Expresiones (expression): Es todo aquello que
 * * ejemplos: una suma, usar una variable, usar una
 * * texto, numero
 * todo: Declaraciones (statement): No genera valor y genera un valor funcion por lo general son estructuras de control o bucles 
 * * ejemplos: el if, el switch, el for, el while
 * 
 * 
 * 
 */

let month = prompt("Ingresa el mes que te gustaria ver");

switch(month){
    case "enero":
        console.log("El mes de enero es el primer mes del ano");
        break
    case "febrero":
        alert(`El mes ${month} es el segundo mes del ano`);
        break;
    case "marzo":
        alert(`El mes ${month} es el tercer mes del ano`);
        break    
    case "abril":
    case "marzo":
        alert("abril y marzo");
        break;
    default:
        alert("El mes seleccionado no aplica")
}

let pais = prompt("Ingresa el pais que te gustaria ver");

switch(pais){
    case "Brazil":
        console.log("tutata tata");
        break
    case "Chile":
        alert(`${pais} es pololo de mexico`);
        break;
    case "Inglaterra":
        alert(`${pais} canta wonderwall`);
        break;
    case "Mexico":
        alert("no era penal");
        break;
    case "Etiopia":
        alert("Es curioso que en mexico una estacion del metro se llame como yo");
        break;
    default:
        alert("No es un pais que mole")
}