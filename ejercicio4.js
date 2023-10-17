'use strict';

/**
 * Mostar todos los números impares que hay entre dos números introducidos por el usuario
 */
//MI EJERCICIO
var numero1= parseInt(prompt("Ingrese el primer número",0));
var numero2= parseInt(prompt("Ingrese el segundo número",0));

document.write("<h1> De" + numero1+ "a" + numero2 + "van los siguientes números impares: </h1>");
for(var i=numero1; i<=numero2;i++){
        //Para comprobar que un número sea impar: numero % 2 !== 0 (SIEMPRE)
        if (i % 2 !== 0) {
        document.write(i + "<br>");
    }
}

//EJERCICIO DE CLASE
var numero1= parseInt(prompt("Ingrese el primer número",0));
var numero2= parseInt(prompt("Ingrese el segundo número",0));

while(numero1<numero2){
    numero1++;
    if(numero1%2!==0){
        console.log("El"+ numero1 + "es impar");
    }

}



