'use strict';

/**
 * Muestre todos los número divisores de un numero introducido en un prompt
 */

var numero= parseInt(prompt("Ingrese un número",1));

for(var i=1; i<=numero; i++){
    if(numero%i===0){
        console.log("Divisor" + i);
    }
}


