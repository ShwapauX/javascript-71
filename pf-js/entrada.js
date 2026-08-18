/**
 * Promt:
 * 1. Hay que asignar su uso a una variable para luego poder usar el valor que ingreso el usuario
 *      1.2 Usar el valor inmediatamente
 * !importante
 * 1. no se recomienda su uso en palicaciones en produccion
 * 2. bloquea el codigo, esto quiere decir que el codigo que este debajo de donde escribimos el uso de promt no se va a ejecutar hasta que el usuario ingrese algo.
 * 3. no se puede personalizar
 * 4 todo lo que ingresa mediante prompt siempre es un string
 */

// const edad = prompt("ingrese su edad", 25);
// console.log(edad);

// const nombre = prompt("ingrese su nombre", 'marjosjaz');
// console.log(nombre);
// console.log("hola mi nombre es " + nombre + " y tengo " + edad + "anos");

const serie = prompt("ingrese su serie favorita", 'Dr stone');
console.log(serie);
const personaje = prompt("ingrese su personaje favorito de suu serie", 'senku');
console.log(personaje);
const porque = prompt("ingrese porque es su favorito", 'el mas malote');
console.log(porque);
alert("Mi serie favorita es " + serie + " y me guta el personaje de " + personaje + " y es mi favorito por que es " + porque + " asi es ");




