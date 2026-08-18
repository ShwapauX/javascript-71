/**
 * 
 * En Javascript hay 3 formas de declarar variables
 * !existe ina forma que ya no se recomienda su uso
 * !var
 * Al proceso de creare una variable y darle un valor se le llama asignacion
 * 
 * A las variables que pueden ser reasignadas(pueden cambier en un futuro el valor que tienen) se declaran:
 * ? let nombreVariable = valor;
 * 
 * *el operador = se conoce como operador de asignacion
 * Una ves creada una variables podemos usarla en otros lugares del codigo
 * utilizanndo su nombre, las variables al ser utilizadas no van entre ""
 * 
 * Las variables que no pueden ser reasignadas (su valor no puede cambiar) se declaran:
 * todo const nombreVariable = valor;
 * 
 * 
 * 
 * 
 * Nota: palabras reservadas , son palabras que utiliza el lenguaje de programacion y si intentamos usarlas en otros lados pueden ghenerar errores. */


let nombre = "Joan";// tipo string
console.log(nombre);

const birthYear = 1993;// tipo numero
console.log(birthYear);

/*  Reasignando una variable (cambiamos el valor que tiene)
    Cuando reasignamos una variable (una varibale ya creada)
    ! Ya no es necesario poner let
*/

name = "Juan"
console.log(name);

// Concatenacion - nos permite pegar una o mas variables a un texto
console.log("hola soy "+ nombre + " no " + name + " y naci en el ano " + birthYear);