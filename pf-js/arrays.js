/**
 * Estructura de datos array
 * Que son y por que son tan importantes?
 * 
 * Son estructuras que nos ayudan a agrupar y/o ordenar datos
 * Para manipular estos datos de manera mas eficiente 
 * Datos no representa nada por si solo
 * Datos juntos y dandoles contexto se vuelve informacion
 * 
 * * Array
 * Es una estructura de datos ordenada
 * !importante
 * Los datos se identifican por un indice, el indice empieza a contar desde 0
 * el tamaño real se empieza a contar desde el 1
 * 
 * !importante en javascript
 * Podemos guardar cualquier tipode datos dentro del array, incluso combinaciones
 * tienen tamaño dinamico
 * 
 * 
 */

// Como definimos un array
const arrayVacio = [];

const months = ["Jan", "March", "April", "June"];

const arrayContenido = ["Alberto", 20, true ];
// obtencion de un elemento guradado en un array con notacion corchete []

console.log(arrayContenido[1]);
console.log(arrayContenido[0]);
console.log(arrayContenido[3]);

/** 
 * ingresando datos al array
 * Metodos
 * 1. unshift para ingresar elementos al comienzo del array
 * 2 push para ingresar elementos al final del array
 * 
 * 
 */ 

console.log("Array antes");
console.log(arrayContenido);
arrayContenido.unshift(" Javier");
console.log("Array despues");
console.log(arrayContenido);

console.log("Array antes");
console.log(arrayContenido);
arrayContenido.push("Daniel", false);
console.log("Array despues");
console.log(arrayContenido);

/**
 * Elimina datos
 * 1. shift elimina y devuleve el elemento en la posicion 0
 * 2. pop elimina y devuelve el ultimo eemento del array
 * Nota:
 * Lo que va dentro de los parentesis de un metodo o funcion se conoce como argumento
 */


console.log("Array antes")
console.log(arraycontenido)
// arraycontenidoshift
console.log(`Elemento eliminado ${arraycontenido.shift()}`);
console.log("Array despues")
console.log(arraycontenido)


console.log("Array antes")
console.log(arraycontenido)
// arraycontenidopop
console.log(`Elemento eliminado ${arraycontenido.pop()}`);
console.log("Array despues")
console.log(arraycontenido)

/**
 * Reasignar el valor de un inice
 */

let valorAnterior 
arrayContenido[0] = "Liz";
arrayContenido[2] = "Josue";
console.log('el valor anterior es :' + valorAnterior);
console.log(`el valor anterior es :${arrayContenido}`);
console.log(arrayContenido)

/**
 * Splice
 * Elimina elementos o agrega
 * 
 * el primer argumento es desde donde queremos empezar y el segundo es cuantos queremos modificar
 */


console.log("======= splice");
arrayContenido.splice(1, 1)
console.log(arrayContenido);
arrayContenido.splice(1,2);
console.log(arrayContenido);

// agregar elementos
months.log(3, 0 ,"mar");
console.log(months);

/**
 * Splice tien 3 partes que van dentro de los parentesis
 * (1,2,3)
 * 1. Indica la pisicion donde va a iniciar a eliminar o a agregar
 * 2. Cuantos elementos vas a eliminar
 * 3. Son elementos a agregar
 */