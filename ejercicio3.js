'use strict';

/*
Hacer un programa que muestre todos los números introducidos por el usuario
*/ 

var numero1= parseInt(prompt("Ingrese el primer número",0));
var numero2= parseInt(prompt("Ingrese el segundo número",0));

//El documento.write permite añadir texto al body del documento
document.write("<h1> De" + numero1+ "a" + numero2+ "van los siguiente números: </h1>");

//El bucle for permite recorrer una lista de numeros entre las 2 variables que nosotros introducidos 
for (var i=numero1; i<=numero2; i++){
    document.write(i + "<br>");

}
