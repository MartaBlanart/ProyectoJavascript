'use strict';

//Calculadora 
/**
 * Pida los numeros por pantalla
 * si metemos uno mal que nos lo vuelva a pedir
 * En el cuerpo de la página , en una alerta y por consola que nos devuelva el resultado de sumar, restar,
 * multiplicar y dividir esas 2 cifras
 */

var numero1= parseInt(prompt("Ingrese el primer número",1));
var numero2= parseInt(prompt("Ingrese el segundo número",1));


while(numero1<0 || numero2<0 || isNaN(numero1) || isNaN(numero2)){

     numero1= parseInt(prompt("Ingrese el primer número",1));
     numero2= parseInt(prompt("Ingrese el segundo número",1));

}

/**
 * Al haber pedido mostrarlo tanto en pantalla, como en alert como en consola
 * la forma optima de poder pintar el resultado en las 3 más facil es crear solo 
 * una variable resulatdo
 */
//El br es solo para docs HTML
var resultado= "La suma es: "+ (numero1 + numero2) + "<br>"+
               "La resta es: "+ (numero1 - numero2) + "<br>"+
               "La multiplicación es: "+ (numero1 * numero2) + "<br>"+
               "La división es: "+ (numero1 / numero2) + "<br>";

//Para alert y por consola necesitamos el \n
var resultadoCMD= "La suma es: "+ (numero1 + numero2) + "\n"+
               "La resta es: "+ (numero1 - numero2) + "\n"+
               "La multiplicación es: "+ (numero1 * numero2) + "\n"+
               "La división es: "+ (numero1 / numero2) + "\n";

document.write(resultado);
alert(resultadoCMD);
console.log(resultadoCMD);

var suma= numero1 + numero2;
var resta= numero1 - numero2;
var multiplicacion= numero1 * numero2;
var division= numero1 / numero2;

document.write("La suma de " + numero1 + " y " + numero2 + " es " + suma);
document.write("La resta de " + numero1 + " y " + numero2 + " es " + resta);
document.write("La multiplicación de " + numero1 + " y " + numero2 + " es " + multiplicacion);
document.write("La división de " + numero1 + " y " + numero2 + " es " + division);