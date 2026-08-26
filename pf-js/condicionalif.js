/**
 * Condicionales
 * serie de condiciones para que algo suceda
 * 
 * En programacion el manejo de estas condiciones tenemos el bloque 
 * !if else
 * ?bloque if pregunta por una condicion y en caso de ser verdadera ejecuta un bloque de codigo, en caso de falso no ejecuta nada
 * ?else maneja la ejecucion de codigo en caso negativo
 * 
 * *Lo que se coloca dentro del if, debe ser algo que genere un valor true o false (tipo de dato booleano)
 * 
 * 
 * 
 */

/**
 * Convertir de texto a numero
 * !importante Si se trata de convertir algo que no es un numero como resultado obtendremos NaN (not a number)
 */


const year = prompt("ingrese su año de nacimiento");
console.log(year);
let edad = 2026 - year;
console.log("hola tu año de nacimiento es " + year + " y tu edad es " + edad + " años");console.log("hola tu año de nacimiento es " + year + " y tu edad es " + edad + " años");

/**
 * todo: Operadores lógicos
 * Sirven para hacer operaciones cuyo resultado es Verdadero o Falso
 * == es e; simbolo de igualdad en programacion
 * Mayor que >
 * 2 > 1 == true
 * 1 > 2 == false
 * 0 > 0 == false
 * 
 * Menor que <
 * 2 < 1 == false
 * 1 < 2 == true
 * 0 < 0 == false
 * 
 * Igualdad ==
 * 2 == 2 == true
 * 3 == 2 == false
 * 
 * mayor o igual que >=
 * 2 >= 2 == true
 * 2 >= 1 == true
 * 2 >= 3 == false
 * 
 * menor o igual que <=
 * 4 <= 4 == true
 * 4 <= 5 == true
 * 7<= 5 == false
 * 
 * diferente de ! =  == !=
 * 5 != 4 == true
 * 5 != 5 == false
 * 
 * Negacion (not) !
 * !verdadero == falso
 * !falso == verdadero
 * !(4 <= 4) == false
 * 
 * AND && Es un operdor que devuelve
 * ? Verdadero solo si ambos lados de la exprecion son verdaderos
 * ? si un lado es falso todo resultado se vuelve falso
 * Verdadero && Verdadero == Verdadero
 * Verdadero && Falso == Falso
 * Falso && Verdadero == Falso
 * 
 * age >= 6 && age <= 12
 * age == 7 == Verdadero
 * age == 15 == False
 * age == 5 == False
 * 
 * OR || Es un operador que devuelve 
 * ?Falso si ambos lados de la exprecion son Falso
 * ?si un lado de la expercion es verdadero devuelve verdadero
 * Verdadero == Falso == Verdadero
 * Falso == Verdadero == Verdadero
 * Falso == Falso == Falso
 * 
 * age > 20 || age < 100
 * age == 7 == Verdadero
 * age == 20 == Falso
 * 
 * 
 */

/* 
*para el if
Dentro de los parentesis va la condición que se va a evaluar
Dentro de las llaves va el código que se va a ejecutar en caso
de que la condición sea Verdero

?else if 
Nos permite evaluar mas de una condicion
va asociado a un if
*/

if (edad >= 18) {
    alert("Puede ingresar a la pagina ");
} else if (edad >= 6 && edad <= 12){
    alert("Aun no puedes pasar, pero felicidades entraste a la primaria");
}else if (edad >= 3 && edad <= 5){
    alert("Aun no puedes pasar, pero felicidades ya casi acabas el kinder");
} else {
    alert("Aun no puedes pasar, por que aun eres muy feto");
}