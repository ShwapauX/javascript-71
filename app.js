/**
 * Objetos en JS (JSON)
 * Son una estrucutura de datos, similar diccionarios o mapas
 * ?se organiza en pares
 * ?Llave : valor asociado
 * ?Es ina estrutura de datos desordenada
 * ?Aqui los datos se obtienen mediante su llave
 * !No son los mismos objetos que los de progrmacion orientada a objetos
 * !Las llaves no se pueden repetir
 * 
 * notacion punto no acepta texto y notacion corchete si
 * 
 * 
 * Curiosidades
 * Esta notacion se volvio el estandar para intercambio de informacion
 * Entre cliente y servidor en la web
 * JSON (Java Script Object Notation)
 * 
 * Nota: Todas las funciones por defecto retornan undefined
 */

// Como declarar un objeto
const participante = {
    name: "Alberto",
    lastName: "Pedraza",
    age: 23,
    isAlive: true,
    sayHi: function(){
        console.log("Beto dice hola");
    },
    ch:71,
};

//Como acceder a los valores
//1. Notacion punto (mas usado)
//2. Notacion corchete, el nombre va entre comillas como si fuera String
console.log(`El nombre de el participante es ${participante.name},obtenido con notacion punto`);
console.log(`La edad de el participante es ${participante["age"]},obtenido con notacion corchete`);

participante.sayHi();

//Como agregar un nuevo par llave valor
participante.favoriteAnimals = ["Tortuga", "Gato", "cuervo"];
participante.addresDirection = {
    calle:"enrique segobiano", 
    zip:"56978",
};
console.log(participante);

// Como accedemos a la info de objetos o arrays anidados(objetos o arrays dentro de otro objeto, u otro array)

console.log(
    `El primer animal favorito de ${participante.name} es ${participante.favoriteAnimals[0]}`,
);

console.log(
    `El codigo postal de ${participante.name} es ${participante.addresDirection["zip"]}`,
);

// como modificar el valor de una llave
participante.age = 25;
console.log(participante.age);

// como eliminar una llave
delete participante.ch
console.log(participante);

// como iterar sobre el objeto
for(const llave in participante){
    console.log(`el valor de la llave ${llave} es ${participante[llave]}`);
}
