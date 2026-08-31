// Declarar la funcion
function saludar(){
    console.log("hola");
}

// usar la funcion (invocar o llamar)
saludar();
saludar();
saludar();

// function con parametros
function saludarConNombre(name, edad){
    console.log(`hola ${name} mucho gusto en conocerte no sabia que tenias ${edad} anos`);
}

// pasando argumentos a una funcion
saludarConNombre('josue', 32);
saludarConNombre('liz', 27);
saludarConNombre('carmen', 82);

// funcion que retorna algo
// !importante
// Cuando usamos return
// !1. Termina la ejecucion de la funcion
// !2. el valor retornado debe ser ocupado o nunca lo vamos a ver

function multiplyToNumbers(a,b){
    if(typeof a == "number" && typeof b == "number"){
        return a*b;//finaliza la ejecucion
    }else{
        return "por favor envia dos numeros" //finaliza la ejecucion
    }
}

// aqui no voy a ver nada
multiplyToNumbers(2,3);

// 
console.log(multiplyToNumbers(3,5));
console.log(multiplyToNumbers(3,"josue"));