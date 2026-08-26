/**
 * do while
 * !El bucle do while simepre se ejecuta por lo menos una vez
 * al ejecutar primero y luego evaluar te permine tener una ejecucion garantizada
 * 
 * !necesitas un contador existente
 * !no debemos olvidar actualizar dicho contador
 * 
 */

let counter =200;
do {
    console.log("hola")
    console.log(counter);
    // operador de suma y asignacion
    counter += 1 ;
} while (counter <= 100);//para seguir ejecutandose tiene que cumplirse esta condicion
console.log(counter);

counter = 1;
do{
    if (counter % 2 == 0){
        console.log(`El numero ${counter} es par`);
    }else{
        console.log(`El numero ${counter} es impar`);
    }
    counter++;
} while (counter < 200);